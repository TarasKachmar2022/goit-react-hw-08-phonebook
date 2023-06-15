import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/avatar.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <p>Hello, {user} </p>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
