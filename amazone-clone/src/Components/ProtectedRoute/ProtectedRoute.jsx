import {useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../DataProvider/DataContext'

const ProtectedRoute = ({ children, msg, redirect}) => {
  const navigate = useNavigate();
  const { state, _dispatch } = useContext(DataContext);
  const { user } = state;

  useEffect(() => {
    if (!user) {
      //const msg = "You must sign in first"; define your message here
      navigate("/auth", { state: { msg ,redirect} });
    }
  }, [user]);

//   return <div></div>;
 return  children;
};
{/* <ProtectedRoute>
<Children/>
</ProtectedRoute> */}

export default ProtectedRoute
