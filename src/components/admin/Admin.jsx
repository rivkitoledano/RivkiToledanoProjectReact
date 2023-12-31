
import { Button } from "@mui/material";
import { Outlet ,Link} from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect } from "react";
import BusinessServices from "../../stores/businessServices";
import LogIn from "../logIn/Login";
import ShowingBusinessDetails from "../showingBusinessDetails/ShowingBusinessDetails";
import './Admin.css'
const Admin = observer(() => {
  useEffect(() => {
    if (localStorage.getItem("isLogin") === 'true') {
      BusinessServices.setIsLogin(true);
    }
    BusinessServices.initialService();
    BusinessServices.initialBusinessData();
    console.log("ssdfghjkl")

  }, []);
 
  return (
    <>
      <ShowingBusinessDetails></ShowingBusinessDetails>
      {BusinessServices.isLogin ?
        <>
        <div className="buttons">
          <Button> <Link to="./services">services</Link></Button>
           
          <Button><Link to="./appointment">appointment</Link></Button>
          </div><br/>
        <Outlet />
        </>
        :
        <LogIn/>
      }
    </>
  )
});

export default Admin