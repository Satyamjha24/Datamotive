import React, { useEffect, useState } from 'react';
import './Home.css';

import { data } from '../db'
const Home = () => {
    const [totaldata, setTotaldata] = useState([])
    // let fieldValue='low fat'
    // let fieldName='FatContent'

    useEffect(()=>{
       setTotaldata(data)
    },[data])
    return (
        <div>
            {/* {
                totaldata.filter((el)=>{
                  return el[fieldName]===fieldValue
                })
            } */}

            <table>
                <thead style={{border:'2px solid red'}}>
                    <tr>
                        <th>ProductID</th>
                        <th>Weight</th>
                        <th>FatContent</th>
                        <th>ProductVisibility</th>
                        <th>ProductType</th>
                        <th>MRP</th>
                        <th>OutletID</th>
                        <th>EstablishmentYear</th>
                        <th>OutletSize</th>
                        <th>LocationType</th>
                        <th>OutletType</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {totaldata.length > 0 && data.map((el) => {
                          return (<tr><td>{el.ProductID}</td>
                                 <td>{el.Weight}</td>
                                 <td>{el.FatContent}</td>
                                 <td>{el.ProductVisibility}</td>
                                 <td>{el.ProductType}</td>
                                 <td>{el.MRP}</td>
                                 <td>{el.OutletID}</td>
                                 <td>{el.EstablishmentYear}</td>
                                 <td>{el.OutletID}</td>
                                 <td>{el.LocationType}</td>
                                 <td>{el.OutletType}</td>
                                 </tr>)
                        })}
                    
                </tbody>
            </table>
       
        </div>
    )
}

export default Home