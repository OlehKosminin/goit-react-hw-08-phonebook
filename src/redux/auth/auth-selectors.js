export const isUserLogin = store => store.auth.isLogin;
export const userName = store => {
  if (!store.auth.user.name) {
    return;
  }

  return store.auth.user.name;
};
