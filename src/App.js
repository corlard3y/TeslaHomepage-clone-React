import './App.css';
import  Header  from "./components/Header";
import Item from "./components/Item";

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelX.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";


function App(props) {

  return (
    <div className="App">
     <Header />
        <div className="app__itemsContainer">
        <Item 
            title = 'Model S'
            desc = '$69,420'
            descLink1 =''
            backgroundImg={ModelS}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            first
            />
            <Item 
            title = 'Lowest Cost Solar Panels in Nigeria'
            desc = 'Money-back guarantee'
            descLink1 =''
            backgroundImg={SolarPanels}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            />
 
            <Item 
            title = 'Model 3'
            desc = 'Money-back guarantee'
            descLink1 =''
            backgroundImg={Model3}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            />
            <Item 
            title = 'Model X'
            desc = 'Money-back guarantee'
            descLink1 =''
            backgroundImg={ModelX}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            />
            <Item 
            title = 'Model Y'
            desc = 'Money-back guarantee'
            descLink1 =''
            backgroundImg={ModelY}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            />
            <Item 
            title = 'Solar for New Roofs'
            desc = 'Money-back guarantee'
            descLink1 =''
            backgroundImg={SolarRoof}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            />
            <Item 
            title = 'Accessories'
            desc = 'Money-back guarantee'
            descLink1 =''
            backgroundImg={Accessories}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            leftBtnLink = ''
            twoButtons = 'true'
            />
        </div>
    </div>
  );
}

export default App;
