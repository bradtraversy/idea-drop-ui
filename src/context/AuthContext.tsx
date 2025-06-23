import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from 'react';
import { refreshAccessToken } from '@/api/auth';

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  user: { id: string; email: string; name: string } | null;
  setUser: (user: AuthContextType['user']) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthContextType['user'] | null>(null);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const { accessToken: newToken, user } = await refreshAccessToken();

        setAccessToken(newToken);
        setUser(user);
      } catch (err: any) {
        console.log('Failed to refresh access token', err);
      }
    };

    loadAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a provider');
  return context;
};
