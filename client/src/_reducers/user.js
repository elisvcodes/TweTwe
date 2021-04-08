export default (user = { userData: null }, action) => {
  switch (action.type) {
    case 'GET_SINGLE_USER':
      return { ...user, userData: action.payload };
    default:
      return user;
  }
};
