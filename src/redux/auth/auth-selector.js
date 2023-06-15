const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsLoading = state => state.auth.isLoading;
const getError = state => state.auth.error;

const authSelectors = {
  getUserName,
  getIsLoggedIn,
  getIsLoading,
  getError,
};

export default authSelectors;
