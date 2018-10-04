import * as types from '../constants';

// App Actions
export function screenResize(width) {
  return {
    type: types.SCREEN_RESIZE,
    width,
  };
}

export function handleInput(input, el) {
  console.log(input, el);
  return {
    type: types.INPUT,
    input,
    el,
  };
}

// Auth Actions
export function login(e, username, password) {
  e.preventDefault();
  return {
    type: types.LOGIN,
    username,
    password,
  }
}

export function register(e, username, password) {
  e.preventDefault();
  return {
    type: types.REGISTER,
    username,
    password,
  }
}

export function logout(user) {
  return {
    type: types.LOGOUT,
    user,
  };
}

export function verifyToken() {
  return {
    type: types.VERIFIED,
  };
}
