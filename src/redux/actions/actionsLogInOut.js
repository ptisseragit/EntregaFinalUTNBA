import { LOGIN, LOGOUT } from "./action-types";

export function logInApp(payload) {
  return { type: LOGIN, payload };
}

export function logOutApp() {
    return { type: LOGOUT };
}

