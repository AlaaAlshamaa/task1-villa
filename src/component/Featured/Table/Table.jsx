import './Table.css';
import infoicon01 from '../../../assets/images/info-icon-01.png';
import infoicon02 from '../../../assets/images/info-icon-02.png';
import infoicon03 from '../../../assets/images/info-icon-03.png';
import infoicon04 from '../../../assets/images/info-icon-04.png';

import React from 'react'

const Table = () => {
    const dataTable = [
        {
            icon: infoicon01 ,
            text1:"250 m2",
            text2:"Total Flat Space",
            lastchild: false
        } , 
        {
            icon: infoicon02 ,
            text1:"Contract",
            text2:"Contract Ready",
            lastchild: false
        },
        {
            icon: infoicon03 ,
            text1:"Payment",
            text2:"Payment Process",
            lastchild: false
        },
        {
        icon: infoicon04 ,
        text1:"Safety",
        text2:"24/7 Under Control",
        lastchild: true
    }
    ];

return (
    <div className="info-table">
        {dataTable.map((element, index)=> (
            <div key={index}>
                <ul>
                    <li className={(element.lastchild)? "lastchild": ""}>
                    <img src={element.icon} alt="" />
                    <h4>{element.text1}<br/><span>{element.text2}</span></h4>
                    </li>
                </ul>
            </div>
            ))}
    </div>
)
}

export default Table