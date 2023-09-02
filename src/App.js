import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth'



function App() {

  const [user] = useAuthState(auth)


  return (
    <>
      {user? <Dashboard/> :<Signin/>}
    </>
    

  );
}

export default App;
