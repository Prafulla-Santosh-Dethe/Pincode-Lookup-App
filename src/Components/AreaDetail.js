import React from 'react'
import { useLocation } from 'react-router-dom'
import Area from './Area.css'

function AreaDetail() {

    const {state} = useLocation()
    console.log("S: ",state)

    const area={...state[0]}
    // console.log("A: ",area.Name)

    return (
        <>
          <h2>Area-Details</h2>

          <div className='ContainerMain'>

                <div className="card" style={{width:'35rem'}}>
                        <div className="card-body" style={{background:'black'}}>
                            <h3 style={{alignItems:'center', background:'black', color:'white'}}>Name:{area.Name}</h3><hr/>


                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h4>BranchType:{area.BranchType}</h4></li>
                                <li className="list-group-item"><h4>District:{area.District}</h4></li>
                                <li className="list-group-item"><h4>Pincode:{area.Pincode}</h4></li>
                                <li className="list-group-item"><h4>Division:{area.Division}</h4></li>
                                <li className="list-group-item"><h4>Region:{area.Region}</h4></li>
                                <li className="list-group-item"><h4>State:{area.State}</h4></li>
                                <li className="list-group-item"><h4>Country:{area.Country}</h4></li>
                        </ul>

                        
                        </div>
                </div>
          </div>
        </>
    )
}

export default AreaDetail