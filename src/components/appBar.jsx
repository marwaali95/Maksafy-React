import React from 'react';
import { Input } from "reakit/Input";
import { Button } from "reakit/Button";
import LogoImage from '../assets/images/logo.png';
import NotificationIcon from '../assets/jsxIcons/notificationIcon'
const AppBar = () => {
    return ( 
        <React.Fragment> 
            <div className="AppBarContainer">
        <div className="AppBarHeader">
            <img className="AppBarLogo" src={LogoImage} alt="logo" />
           <span  className="NotificationIcon"> <NotificationIcon/> </span>
             </div>
             <div className="SearchContainer">
             <Input className='SearchInput' placeholder = " اسم الطالب"/>
          <Button className="YellowButton" />
           <Button className="BlueButton"/>
           </div>
             </div>

     
    </React.Fragment>);
}
 
export default AppBar;