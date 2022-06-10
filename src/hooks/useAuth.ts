import selectors from '../store/selectors';
import useTypedSelector from './useTypedSelector';

const useAuth = () => {
  const { email, refreshToken, id } = useTypedSelector(selectors.auth);

  return { email, refreshToken, id };
};

export default useAuth;
