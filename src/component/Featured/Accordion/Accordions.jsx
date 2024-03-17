import Accordion from 'react-bootstrap/Accordion';
import './Accordions.css';

function Accordions() {
  const dataAccordion = [ 
    {
      key:"0", 
      header: "Best useful links ?",
      text1:"Get",
      text2:" website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the",
      text3:" in the world. Please tell your friends about it.",
      textstrong:" the best villa", 
      textcode:"",
      textlink:" best free CSS templates",
      link:"https://www.google.com/search?q=best+free+css+templates",
    },
    {
      key: "1", 
      header: "How does this work ?",
      text1:"Dolor",
      text2:" consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur",
      text3:" elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. culpa qui officia deserunt mollit anim id est laborum.",
      textstrong:" almesit amet", 
      textcode:" adipiscing",
      textlink:"",
      link:"",
    },
    {
      key: "2", 
      header: "How does this work ?",
      text1:"Dolor",
      text2:"consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur",
      text3:"elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. culpa qui officia deserunt mollit anim id est laborum.",
      textstrong:"almesit amet", 
      textcode:"adipiscing",
      textlink:"",
      link:"",
    }
];

  return (
    <div className="accordions">
    
    <Accordion defaultActiveKey="0">
      {dataAccordion.map((element, index)=> (
      <div key={index}>
      <Accordion.Item eventKey={element.key}>
        <Accordion.Header>{element.header}</Accordion.Header>
        <Accordion.Body>
          {element.text1} <strong>{element.textstrong}</strong>
          {element.text2}
          <a href={element.link} target="_blank">{element.textlink}</a>
          <code>{element.textcode}</code> 
          {element.text3}
        </Accordion.Body>
      </Accordion.Item>
      </div>
            ))}
    </Accordion>
    </div>
  );
}

export default Accordions;