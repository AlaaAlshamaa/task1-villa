
import './TabTable.css'

const TabTable = ({datatable}) => {
  
  return (
    <div className="tabTable">
                        <ul>
                        <li>{datatable[0].t11} <span>{datatable[0].t12}</span></li>
                        <li>{datatable[0].t21} <span>{datatable[0].t22}</span></li>
                        <li>{datatable[0].t31} <span>{datatable[0].t32}</span></li>
                        <li>{datatable[0].t41} <span>{datatable[0].t42}</span></li>
                        <li className="lastchild">
                          {datatable[0].t51} <span>{datatable[0].t52}</span>
                        </li>
                        </ul>
                      </div>
  )
}

export default TabTable