import React, { useEffect, useState } from 'react'
import './Comparison.css'
import InputFields from '../InputFields'

const Comparison = () => {

    const [inputs, setInputs] =useState({
        input1 : '',
        input3 : ''
    })

    const [input2,setInput2] = useState("")
    const [result,setResult] = useState("")

    const handleInputsChange = (event) =>{
        const {name, value} = event.target
        setInputs(prevInputs =>({
            ...prevInputs,
            [name] : value
        }))
    }
    const handleInput2change =(event) =>{
        setInput2(event.target.value)
    }

    useEffect(() =>{
        const {input1, input3}  = inputs
        
        if(input1 && (!input2 || input2==='select') && input3 ){
            setResult("Please select the operation")
        } else if(input1 && input2 && input3){

            const num1 = parseFloat(input1)
            const num2 = parseFloat(input3)
            
            let res = false
            switch (input2){
                case '>':
                    res = num1 > num2
                    break
                case '<':
                    res = num1 < num2
                    break
                case '>=':
                    res = num1 >= num2
                    break
                case '<=':
                    res = num1 <= num2
                    break
                case '===':
                    res = num1 === num2
                    break
                case '!==':
                    res = num1 !== num2
                    break
                default:
                    return
            }
            setResult(res ? "TRUE" : 'FALSE')
        }
        else if(input1 && input2 && !input3 || !input1 && input2 && input3 ){
            setResult("INVALID")
        }
    },[inputs,input2]);

    
  return (
    <>
    <div className='input-div'>
        <div className='inputs'>
            
            <InputFields
                label="Input - 1"
                value={inputs.input1}
                onChange={handleInputsChange}
                placeholder="Enter the number"
                type="number"
                name='input1'
            />

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

            <InputFields
                label="Input - 2"
                value={inputs.input3}
                onChange={handleInputsChange}
                placeholder="Enter the number"
                type="number"
                name='input3'
            />

            <div className='result'>
                <p className="gradient-text" style={{margin:0, fontSize:22}}>{String(result)}</p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Comparison