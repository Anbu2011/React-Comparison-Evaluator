import React, { useEffect, useState } from 'react'
import './Comparison.css'

const Comparison = () => {

    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")
    const [input3,setInput3] = useState("")
    const [result,setResult] = useState("")

    const handleInput1change =(event) =>{
        setInput1(event.target.value)
    }
    const handleInput2change =(event) =>{
        setInput2(event.target.value)
    }
    const handleInput3change =(event) =>{
        setInput3(event.target.value)
    }

    useEffect(() =>{

        if(input1 && (!input2 || input2==='select') && input3 ){
            setResult("Please select the operation")
        } else if(input1 && input2 && input3){
            const full_str = input1 + input2 + input3
            const res = eval(full_str)
            if(res === true){
                setResult("TRUE")
            } else{
                setResult('FALSE')
            }
        }
        if(input1 && input2 && !input3 || !input1 && input2 && input3 ){
            setResult("INVALID")
        }
        
        

    },[input1,input2,input3]);

    
  return (
    <>
    <div className='input-div'>
        <div className='inputs'>
            <div className='input-2-3 input-1'>
                <label htmlFor="input1" className='labels'>Input - 1 : </label>
                <div className='all-inputs'>
                    <input type="number" onChange={handleInput1change} placeholder='Enter the number'/>
                </div>
            </div>
            <div className='input-2-3'>
                <label htmlFor="operations" className='labels'>Operation : </label>
                <div className='all-inputs'>
                    <select className='operations' name="ops" id="ops" onChange={handleInput2change}>
                        <option value="select">Select the operation</option>
                        <option value=">">Greater than &gt; </option>
                        <option value="<">Lesser than &lt;</option>
                        <option value=">=">Greater than Equal to &ge; </option>
                        <option value="<=">Lesser than Equal to &le; </option>
                        <option value="===">Equal to = </option>
                        <option value="!==">Not Equal to != </option>
                    </select>
                </div>
            </div>

            <div className='input-2-3'>
                <label htmlFor="input2" className='labels'>Input - 2 : </label>
                <div className='all-inputs'>
                    <input type="number" onChange={handleInput3change} placeholder='Enter the number'/>
                </div>
            </div>
            <div className='result'>
                <p className="gradient-text" style={{margin:0, fontSize:22}}>{String(result)}</p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Comparison