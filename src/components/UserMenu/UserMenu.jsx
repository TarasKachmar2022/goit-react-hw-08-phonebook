import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selector';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/avatar.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <p>Hello, {name} </p>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
