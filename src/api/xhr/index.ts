import axios, { AxiosRequestConfig } from "axios";

const homeDevClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 60000,
});

const homeDevApi = {
  get: <Res>(uri: string, config?: AxiosRequestConfig) =>
    homeDevClient.get<Res>(uri, {
      ...config,
    }),
  post: <Req, Res>(
    uri: string,
    requestData?: Req,
    config?: AxiosRequestConfig
  ) =>
    homeDevClient.post<Res>(uri, requestData, {
      ...config,
    }),
  put: <Req, Res>(
    uri: string,
    requestData?: Req,
    config?: AxiosRequestConfig
  ) =>
    homeDevClient.put<Res>(uri, requestData, {
      ...config,
    }),
};

export default homeDevApi;