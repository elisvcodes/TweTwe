export default (auth = { authData: null }, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify(action.payload));
      return { ...auth, authData: action.payload };
    case 'LOGOUT':
      console.log(action);
      localStorage.clear();
      return { ...auth, authData: null };
    default:
      return auth;
  }
};
