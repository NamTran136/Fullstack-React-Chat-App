import axios, { AxiosRequestConfig } from "axios";
import { VITE_SERVER_URL } from "../utils/constants";

export default async function authFetchHandler<T>({
  endPoint,
  method,
  data,
}: {
  endPoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data: T;
}) {
  const url = `${VITE_SERVER_URL}/${endPoint}`;
  const options: AxiosRequestConfig<T> = {
    withCredentials: true,
    method: method || "GET",
    data,
  };
  try {
    const response = await axios(url, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}
