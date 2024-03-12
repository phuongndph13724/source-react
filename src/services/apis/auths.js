import instance from "./instance";

export const apiSignin = (data) => {
  const url = `/signin`;
  return instance.post(url, data);
};

export const apiRegister = (data) => {
  const url = `/signup`;
  return instance.post(url, data);
};
