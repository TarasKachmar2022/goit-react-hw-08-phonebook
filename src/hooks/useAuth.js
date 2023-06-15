import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
} from '../redux/auth/auth-selector';

export const useAuth = () => {
  const user = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    error,
  };
};
