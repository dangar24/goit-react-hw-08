export const selectIsLoggedIn = (state) => state.auth.isLoggedIn 

export const selectUser = (state) => state.auth.user

export const selectAuthLoader = (state) => state.auth.loader

export const selectAuthError = (state) => state.auth.error

export const selectIsRefreshing = (state) => state.auth.isRefreshing