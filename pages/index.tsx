import { useState, useEffect, useCallback, ChangeEvent } from "react";
import Head from "next/head";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  link: string;
  avatar: string | null;
}

export default function NFCBusinessCard() {
  const sessionData = useSession();
  const session = sessionData?.data;
  const status = sessionData?.status;
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    link: "",
    avatar: null,
  });
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session) {
      setFormData((prev) => ({
        ...prev,
        email: session.user?.email || "",
        name: session.user?.name || "",
        avatar: session.user?.image || null,
      }));
    }
  }, [session, status]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData((prev) => ({ ...prev, avatar: reader.result as string }));
      reader.onerror = () => setError("Ошибка загрузки изображения");
      reader.readAsDataURL(file);
    }
  }, []);

  const validateForm = useCallback(() => {
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.link) {
      setError("Все поля должны быть заполнены");
      return false;
    }
    setError(null);
    return true;
  }, [formData]);

  const handleGenerateLink = useCallback(() => {
    if (!validateForm()) return;

    setLoading(true);
    const uniqueId = crypto.randomUUID();
    setGeneratedLink(`${window.location.origin}/profile/${uniqueId}`);
    setLoading(false);
  }, [validateForm]);

  const handleRegister = useCallback(() => {
    console.log('Зарегистрироваться');
  }, []);

  const navigateToLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>NFC Визитка</title>
        <meta name="description" content="Создайте цифровую NFC-визитку с уникальной ссылкой" />
      </Head>
      <div
        className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://779777.ru/")' }}
      >
        <h1 className="text-white text-5xl font-bold mb-8 text-center mt-8">Создание NFC-визитки</h1>
        <Card className="w-full max-w-md shadow-lg rounded-lg bg-white">
          <CardContent className="space-y-4 p-4">
            {status === "authenticated" ? (
              <>
                <p className="text-center">Вы вошли как {formData.email}</p>
                <Button onClick={() => signOut()} className="w-full">Выйти</Button>
              </>
            ) : (
              <>
                <Button onClick={() => signIn("google")} className="w-full">Войти через Google</Button>
                <Button onClick={navigateToLogin} className="w-full">Войти</Button>
                <form>
                  <Input placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                  <Input placeholder="Пароль" name="password" type="password" value={formData.password} onChange={handleChange} />
                  <Button onClick={handleRegister} className="w-full">Зарегистрироваться</Button>
                </form>
              </>
            )}
            {status === "authenticated" && (
              <>
                <div className="flex flex-col items-center">
                  {formData.avatar ? (
                    <Image src={formData.avatar} alt="Avatar" width={96} height={96} className="rounded-full object-cover" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Нет фото</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  />
                </div>
                <Input placeholder="Имя" name="name" value={formData.name} onChange={handleChange} />
                <Input placeholder="Телефон" name="phone" value={formData.phone} onChange={handleChange} />
                <Input placeholder="Сайт или соцсеть" name="link" value={formData.link} onChange={handleChange} />
                {error && <p className="text-red-500 text-center">{error}</p>}
                <Button onClick={handleGenerateLink} className="w-full" disabled={loading}>
                  {loading ? "Создание ссылки..." : "Создать ссылку"}
                </Button>
                {generatedLink && (
                  <div className="mt-4 text-center">
                    <p className="text-sm">Ссылка для записи на NFC-чип:</p>
                    <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline break-all">
                      {generatedLink}
                    </a>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}