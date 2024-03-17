import React from 'react'
import TabTable from './TabTable'
import './TabContent.css'


const TabContent = (data , key) => {

  return (
   
    <div className="tabContent">
      <div className="row">
        <div className="col-lg-3">
          <TabTable datatable = {data.data.tabledata} />
        </div>
        <div className="col-lg-6">
        <img src={data.data.image} alt=""/>
        </div>
        <div className="col-lg-3">
          <h4>{data.data.title}</h4>
          <p>{data.data.text1} 
          <br/><br/>{data.data.text2}</p>
          <div className="icon-button">
            <a href="property-details.html"><i className="fa fa-calendar"></i> Schedule a visit</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabContent