import axios from "axios";

axios.defaults.withCredentials = true;

export type User = {
  id?: number;
  firstName?: string;
  lastName?: string;
  mail: string;
  password?: string;
};

export const loginData = async (apiUrl: string, data: User) => {
  const response = await axios.post(apiUrl, data);
  return response;
};

export const signUpData = async (apiUrl: string, data: User) => {
  const response = await axios.post(apiUrl, data);
  return response;
};

export const logoutData = async (apiUrl: string) => {
  const response = await axios.post(apiUrl);
  return response;
};
