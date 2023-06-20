import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => useSelector(selectContacts);
export const useIsLoading = () => useSelector(selectIsLoading);
export const useError = () => useSelector(selectError);
