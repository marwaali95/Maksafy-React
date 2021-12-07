import React from 'react';
import HomeIcon from './../assets/jsxIcons/home-icon';
import WalletIcon from './../assets/jsxIcons/wallet-icon';
import SalesIcon from './../assets/jsxIcons/sales-icon';
import EarlyOrdersIcon from './../assets/jsxIcons/early-orders';
import MoreIcon from './../assets/jsxIcons/more-icon';
import ActiveIcon from './../assets/jsxIcons/activelink-icon';
const BottomNavbar = () => {
    return (  <React.Fragment>
        
<nav className="bottomNavBar">
<a href='#' className="bottomNavBarLinkActive">
    <ActiveIcon/>
    <span className="HomeIcon"><HomeIcon/></span>
      <span  style={{color:'#13a69a'}}>الرئيسية</span>
</a>
<a href='#' className="bottomNavBarLink">
    <WalletIcon/>
      <span className="bottomNavBarSpan">المحفظة</span>
</a>
<a href='#' className="bottomNavBarLink">
    <SalesIcon/>
      <span className="bottomNavBarSpan">المبيعات</span>
</a>
<a href='#' className="bottomNavBarLink">
    <EarlyOrdersIcon/>
      <span className="bottomNavBarSpan">طلبات مسبقة</span>
</a>
<a href='#' className="bottomNavBarLinkMore">
    <MoreIcon/>
      <span className="bottomNavBarSpanMore">المزيد</span>
</a>

</nav>
    </React.Fragment>);
}
 
export default BottomNavbar;
