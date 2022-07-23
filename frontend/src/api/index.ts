import axios from "axios";

axios.defaults.withCredentials = true;

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
};

export const login = async (apiUrl: string, data: User) => {
  const response = await axios.post(apiUrl, data);
  return response;
};

export const signUp = async (apiUrl: string, data: User) => {
  const response = await axios.post(apiUrl, data);
  return response;
};

export const logout = async (apiUrl: string) => {
  const response = await axios.post(apiUrl);
  return response;
};
