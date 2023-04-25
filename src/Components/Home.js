import React, { useEffect } from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import img from './img.jpg'
import homeStyle from './homeStyle.css'

export default function Home() {

    const navigate=useNavigate()

    const[pincode, setPincode]=useState('')
    const[data, setData]=useState('')
    const[error,setError]=useState('')

    function handleChange(e){

        setPincode(e.target.value);

    }
    const fetchData = async () => {
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/413201`);

        //   if (!response.ok) {
        //     setError(`Couldn't find postal data you are looking for`);
        //     console.log(error)
        //   }

          const info = await response.json();
           console.log("Info: ", info)
        //   console.log("Type: ",typeof(info))
        //   console.log("0: ",info[0])
        //   const myData={info}

        if(info===null)
        {
            setError("Couldn't find postal data you are looking for")
            alert("could not found your data ")
        }
        else{
          setData(info)
         
          navigate('/display/',{state: info})
        }

        }
        catch{
            console.log("error")
            alert("Error: ",error);
            
        }
    }
    
    function handleSubmit(e){

        e.preventDefault();
        

        if(pincode.length === 6)
        {
            console.log("Going to FtechData")
            fetchData();
            
        }
        else{
            alert("Enter Valid Pincode with 6-Digits")
        }
       
    }

   
        return (
        <>

        <div>
        <div className="card mb-3">
            <img src={img} className=" img card-img-top" alt="..."/>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1 className='cardh1'>
                        Enter Pincode:
                    </h1>
                    <input className='inputPin' type="text" value={pincode} onChange={handleChange} /><br/>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>


        
        </>
        )
}
