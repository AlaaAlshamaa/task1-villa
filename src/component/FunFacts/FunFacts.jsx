
import './FunFacts.css'
import Counter from './Counter/Counter';

const FunFacts = () => {
  const dataFunFacts = [
    {
        num: "34" ,
        text1:"Buildings",
        text2:"Finished Now"
    } , 
    {
        num: "12" ,
        text1:"Years",
        text2:"Experience"
    },
    {
        num: "24" ,
        text1:"Awwards",
        text2:"Won 2023"
    }  
];
  return (   
    <div className="funfacts">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="row">
            {dataFunFacts.map((element, index)=> {
              return(         
            <Counter num = {element.num} text1={element.text1} text2={element.text2} key={index}/>
              )
            })}
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default FunFacts