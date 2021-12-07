import React from "react";
import '../reset.css';
import '../mystyle.css';
import BottomNavbar from "./bottomNavbar";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

function PcandLaptopScreen() {
  return (
    <React.Fragment>
      <div className="GlobalDiv">
        <LeftSection />
        <RightSection />
        <div className="bottomNavBar">
          <BottomNavbar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default PcandLaptopScreen;
