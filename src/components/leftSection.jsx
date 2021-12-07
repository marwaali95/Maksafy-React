import React from 'react';
import { Input } from "reakit/Input";
import { Button } from "reakit/Button";
import emptyImage from '../assets/images/empty.png';

const LeftSection = () => {
    return ( <React.Fragment>

<div className="TheLeftContainerUp">
         <label className="SearchIconLabel">
        <span className="icon search"> </span>
          <Input className='SearchInput' placeholder = " اسم الطالب"/>
          </label>
          <Button className="YellowButton" />
           <Button className="BlueButton"/>
           </div>
          <div className="TheLeftContainerDown">
           <img className="EmptyImage" src={emptyImage}/>
           <div className="TxtMessage">يجب عليك اختيار طالب اولا </div>
           </div>
    </React.Fragment> );
}
 
export default LeftSection;