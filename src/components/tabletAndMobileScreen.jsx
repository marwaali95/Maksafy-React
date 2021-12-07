import React from "react";
import '../reset.css';
import '../mystylemobile.css';
import BottomNavbar from "./bottomNavbar";
import RightSection from "./rightSection";
import AppBar from "./appBar";

function TabletAndMobileScreen() {
  return (
    <React.Fragment>
      <div className="GlobalDiv">
         <AppBar/>
        <RightSection />
        <div className="bottomNavBar">
          <BottomNavbar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TabletAndMobileScreen;
