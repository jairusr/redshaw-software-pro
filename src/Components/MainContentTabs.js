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
            Call us today!
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
          <p><a href="tel:0220205733">022 020 5733</a></p>
        </div>
        <div className="contact-details">
          <div className="icon-container">
            <img src={emailIcon} alt="Email Icon" className="icon" />
          </div>
          <p><a href="mailto:info@redshawsoftware.pro">info@redshawsoftware.pro</a></p>
        </div>
      </div>
      <div/>      
    </div>
    </TabPanel>
  </Tabs>
);