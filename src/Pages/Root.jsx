
             //USENAVIGATION HA na useNAvigate
import { Outlet,useNavigation } from "react-router-dom";
import Navigate from './Navigation';

const Root = () => {
  // one way i2
const Navigation = useNavigation();

/*
Navigation have a 3 property if i fo this Navigation.state ===
'loading/idle/more...'
*/
console.log(Navigation.state)

  return (
  <>
  <Navigate />
{Navigation.state === 'loading' && <p>Loadingg.</p>}
  <Outlet/>
  </>
  )
}

export default Root