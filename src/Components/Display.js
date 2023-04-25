import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DisplayStyle from  './DisplayStyle.css'

export default function Display(props) {

    const navigate=useNavigate()

    const { state } = useLocation();

    const data={...state}

    // console.log("Display: ",typeof(data));

    const[filter,setFilter]=useState('')

   

    const postOffice=data[0].PostOffice
    // console.log("POST: ",postOffice)

    function handleFilter(e){

        e.preventDefault();
        const v=e.target.value
        // console.log("V: ", v, typeof(v))
        setFilter(v) 
    }

    function hadleKeyPress(e)
    {
        // console.log("Filter: ",filter)
        
        if(e.key === 'Enter')
        {
            console.log("if-Enter")

           const newFilter = postOffice.filter((result)=>result.Name === filter)
        //    console.log(newFilter, typeof(newFilter))

           navigate('/areaDetail/', {state: newFilter})
            
        }
       
    }
    return (
        <div>
            <h1 className='pinheading'>Pincode Data</h1>

            <label className='filterclass'>
                
                <input className='inFilter' type="text" value={filter} onChange={handleFilter} onKeyPress={hadleKeyPress} placeholder='Filter' />
            </label>
           

            {state ?  (
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>BranchType</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>

                        {postOffice!==null ? postOffice.map((office) => {return <tr key={office.Name}>
                                        
                                        <td>{office.Name}</td>
                                        <td>{office.BranchType}</td>
                                        <td>{office.District}</td>
                                        <td>{office.State}</td>
                                        <td>{office.Pincode}</td>
                                    </tr> }
                                    ):
                                    <h1 className='errormsg' style={{alignContent:'center', alignItems:'center', fontSize:'bolder', color:'red'}}>Couldn't find postal data you are looking for</h1>
                                    
                        }
                        
                        {/* { postOffice.map((office) => {return <tr key={office.Name}>
                                        
                                        <td>{office.Name}</td>
                                        <td>{office.BranchType}</td>
                                        <td>{office.District}</td>
                                        <td>{office.State}</td>
                                        <td>{office.Pincode}</td>
                                    </tr> })
                        } */}
                        
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
             
            
    );
}


