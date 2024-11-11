export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const validateEmail = (email) => emailRegex.test(email);
export const validatePassword = (password) => passwordRegex.test(password);
export const validateUsername = (username) => username.length >= 4;
