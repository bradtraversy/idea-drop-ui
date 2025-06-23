import api from '@/lib/axios';

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/register', {
      name,
      email,
      password,
    });

    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || 'Failed to register';
    throw new Error(message);
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/login', credentials);
    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || 'Failed to login';
    throw new Error(message);
  }
};
