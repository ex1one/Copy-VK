import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

export default useAuth;
