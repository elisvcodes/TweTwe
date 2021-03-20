export default (user = { userData: null }, action) => {
  switch (action.type) {
    case 'SIGNUP':
      localStorage.setItem('profile', JSON.stringify(action.payload));
      return { ...user, userData: action.payload };
    case 'GET_SINGLE_USER':
      return { ...user, userData: action.payload };
    default:
      return user;
  }
};
