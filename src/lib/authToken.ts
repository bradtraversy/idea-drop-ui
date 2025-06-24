let accessToken: string | null = null;

export const setStoredAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getStoredAccessToken = () => accessToken;
