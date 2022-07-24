import axios from "axios";

axios.defaults.withCredentials = true;

export type User = {
  id?: number;
  firstName?: string;
  lastName?: string;
  mail: string;
  password?: string;
};

export const login = async (data: User) => {
  const response = await axios.post(`http://localhost:8000/login`, data);
  return response;
};

export const signUp = async (data: User) => {
  const response = await axios.post(`http://localhost:8000/sign-up`, data);
  return response;
};

export const logout = async () => {
  const response = await axios.post(`http://localhost:8000/logout`);
  return response;
};

export const checkJwt = async () => {
  const response = axios.get(`http://localhost:8000/tokenVerification`);
  return response;
};
