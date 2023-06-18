import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/avatar.jpg';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import {
  Container,
  Image,
  Title,
  LogoutWrap,
  Logout,
  LogoutText,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;
  return (
    <Container>
      <div>
        <Image src={avatar} alt="" width="32" height="32" />
      </div>
      <Title>
        <span>Hello, </span>
        <span> {user}</span>
      </Title>
      <LogoutWrap>
        <Logout type="button" onClick={() => dispatch(logout())}>
          <RiLogoutBoxRLine /> <LogoutText>Log Out</LogoutText>
        </Logout>
      </LogoutWrap>
    </Container>
  );
};

export default UserMenu;
