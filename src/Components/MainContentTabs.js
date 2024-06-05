import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import phoneIcon from '../Assets/Icons/Phone-100x100.png';
import emailIcon from '../Assets/Icons/Email-100x100.png';
import './MainContentTabs.css'


export default () => (
  <Tabs>
    <TabList>
      <Tab>About</Tab>
      <Tab>Contact</Tab>
    </TabList>

    <TabPanel>
      <div className='about-grid-container'>
        <div/>
        <div>    
          <p>
            We are crafting bespoke software, specialising in integrations, automation, and interactive data visualisation.
          </p>
        </div>
        <div/>
      </div>

    </TabPanel>
    <TabPanel>
    <div className="grid-container">
      <div/>
      <div className='contact-container'>
        <div className="contact-details">
          <div className="icon-container">
            <img src={phoneIcon} alt="Phone Icon" className="icon" />
          </div>
          <p>022 020 5733</p>
        </div>
        <div className="contact-details">
          <div className="icon-container">
            <img src={emailIcon} alt="Email Icon" className="icon" />
          </div>
          <p>info@redshawsoftware.pro</p>
        </div>
      </div>
      <div/>      
    </div>
    </TabPanel>
  </Tabs>
);