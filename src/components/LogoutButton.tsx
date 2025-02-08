import { logOut } from '@/features/authSlice';
import { logout } from '@/lib/firebase';
import { useDispatch } from 'react-redux';


const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logOut());
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; // Clear cookies
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
