export const isUserLogin = store => store.auth.isLogin;
export const userName = store => {
  if (!store.auth.user.name) {
    return;
  }
  //   console.log(store.auth.user.name);
  return store.auth.user.name;
};
