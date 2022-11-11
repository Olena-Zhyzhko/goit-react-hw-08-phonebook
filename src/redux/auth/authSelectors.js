export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user;

export const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

// const authSelectors = {
//     getIsLoggedIn,
//     getUserName
// };

// export default authSelectors;