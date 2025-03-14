# NFC Business Card

Создайте цифровую NFC-визитку с уникальной ссылкой.

## Описание

Этот проект позволяет создавать цифровые визитные карточки с использованием технологии NFC. Пользователи могут генерировать уникальные ссылки, которые могут быть записаны на NFC-чипы и использованы для быстрого обмена контактной информацией.

## Установка

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/StanislavBorisov897/nfc-business-card.git
   ```

2. Перейдите в директорию проекта:

   ```sh
   cd nfc-business-card
   ```

3. Установите зависимости:

   ```sh
   npm install
   ```

## Использование

### Запуск в режиме разработки

Для запуска проекта в режиме разработки выполните:

```sh
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере для просмотра приложения.

### Сборка проекта

Для сборки проекта выполните:

```sh
npm run build
```

### Запуск в продакшн режиме

После сборки проекта, для запуска в продакшн режиме выполните:

```sh
npm start
```

## Настройка

### Файлы окружения

Создайте файл `.env.local` в корне проекта и добавьте следующие переменные окружения:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

### Конфигурация Tailwind CSS

Проект использует Tailwind CSS для стилизации. Вы можете настроить его в файле `tailwind.config.js`.

## Вклад

Если вы хотите внести вклад в проект, пожалуйста, создайте форк репозитория и отправьте pull request. 

## Лицензия

Этот проект лицензирован под лицензией ISC.
