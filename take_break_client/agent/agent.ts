import fetch from 'isomorphic-unfetch';

// TODO 환경에 따라 API_ENDPOINT 처리 추가
export const API_ENDPOINT: string = process.env.API_ENDPOINT || '';

const fetchAuthorizationToken = () => {
  // TODO get token from sessionStore
  const token = 'test-authorization-token';
  if (token) {
    return `token ${token}`;
  } else {
    return null;
  }
};

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const request = {
  async get<T>(url: string): Promise<T> {
    const accessToken = await fetchAuthorizationToken();

    const getReq = fetch(`${API_ENDPOINT}${url}`, {
      headers: accessToken
        ? { ...defaultHeaders, Authorization: accessToken }
        : defaultHeaders
    });

    return getReq.then((res: any) => res);
  },
  async post<T, P>(url: string, param: P): Promise<T> {
    const accessToken = await fetchAuthorizationToken();

    const postReq = fetch(`${API_ENDPOINT}${url}`, {
      method: 'POST',
      headers: accessToken
        ? { ...defaultHeaders, Authorization: accessToken }
        : defaultHeaders,
      body: JSON.stringify(param)
    });

    return postReq.then((res: any) => res);
  },
  async put<T, P>(url: string, param: P): Promise<T> {
    const accessToken = await fetchAuthorizationToken();

    const putReq = fetch(`${API_ENDPOINT}${url}`, {
      method: 'PUT',
      headers: accessToken
        ? { ...defaultHeaders, Authorization: accessToken }
        : defaultHeaders,
      body: JSON.stringify(param)
    });

    return putReq.then((res: any) => res);
  },
  async del<T>(url: string): Promise<T> {
    const accessToken = await fetchAuthorizationToken();

    const delReq = fetch(`${API_ENDPOINT}${url}`, {
      method: 'DELETE',
      headers: accessToken
        ? { ...defaultHeaders, Authorization: accessToken }
        : defaultHeaders
    });

    return delReq.then((res: any) => res);
  }
};

export default request;
