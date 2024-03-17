
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tabs3.css'
import TabContent from './TabContent/TabContent';
import deal01 from '../../../assets/images/deal-01.jpg';
import deal02 from '../../../assets/images/deal-02.jpg';
import deal03 from '../../../assets/images/deal-03.jpg';

const Tabs3 = () => {
  const dataTabContent = [
    {
        image: deal01 ,
        title: "Extra Info About Property",
        text1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        text2:"When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
        tabledata: [
          {
          t11: "Total Flat Space", 
          t12: "185 m2",
          t21: "Floor number",
          t22: "26th",
          t31: "Number of rooms",
          t32: "4",
          t41: "Parking Available",
          t42: "Yes",
          t51: "Payment Process",
          t52: "Bank"
        }
        ]
    } , 
    {
      image: deal02 ,
      title: "Detail Info About Villa",
      text1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
      text2:"Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
      tabledata: [
        {
          t11: "Total Flat Space", 
          t12: "250 m2",
          t21: "Floor number",
          t22: "26th",
          t31: "Number of rooms",
          t32: "5",
          t41: "Parking Available",
          t42: "Yes",
          t51: "Payment Process",
          t52: "Bank"
      }
      ]
  } , 
  {
    image: deal03 ,
    title: "Extra Info About Penthouse",
    text1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
    text2:"Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
    tabledata: [
      {
        t11: "Total Flat Space", 
        t12: "320 m2",
        t21: "Floor number",
        t22: "34th",
        t31: "Number of rooms",
        t32: "6",
        t41: "Parking Available",
        t42: "Yes",
        t51: "Payment Process",
        t52: "Bank"
    }
    ]
} 
];
  return (
    <div className="tabs3">
    <Tabs
      defaultActiveKey="appartment"
      id="my-tab"
      className="mb-3"  
    >
      <Tab eventKey="appartment" title="Appartment">
        <TabContent data = {dataTabContent[0]}/>
      </Tab>
      <Tab eventKey="villahouse" title="Villa House">
      <TabContent data = {dataTabContent[1]}/>
      </Tab>
      <Tab eventKey="penthouse" title="Penthouse">
      <TabContent data = {dataTabContent[2]}/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Tabs3