import React from 'react';
import PcandLaptopScreen from '../src/components/pc-laptop-maksafy';
import TabletAndMobileScreen from '../src/components/tabletAndMobileScreen';
import MediaQuery from 'react-responsive';

function App() {
 
  return (<React.Fragment>
    <MediaQuery minDeviceWidth={1048}>
    <PcandLaptopScreen/> 
    </MediaQuery> 

    <MediaQuery maxDeviceWidth={1002}>
      <TabletAndMobileScreen/>
      </MediaQuery>
      </React.Fragment>

  );
}

export default App;
