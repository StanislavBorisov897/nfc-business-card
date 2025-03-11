const authService = {
  login: async (username: string, password: string) => {
    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  }
};

export default authService;