import React, {useState, useEffect} from 'react';
import Weight from './weight';

export default function Choices(){
    const [choiceValue, setChoiceValue] = useState(0.4);
    const multiplier ={"Normal weight":0.4, ESRD:0.2, Obese:0.5, "Type 1 DM": 0.2}
    const handleChangeValue = ({target})=>{
        let y =target.value;
        setChoiceValue(y);
    }
    let list =[]
    for (let mult in multiplier){
       let x = <button value = {multiplier[mult]} onClick={handleChangeValue}>{mult}</button>;
       list.push(x);
    }
    const [weight, setWeight] = useState(null);
    const handleChange =({target})=>{
        let newWeight =target.value;
       if (newWeight>=0){
        setWeight(newWeight);
       }
    }
    let total = Math.floor(weight*choiceValue)
    
  
    
    
        
  
    return (
        <div>
            <label>What is your risk?</label>
                   {list}
            
                <div>
            <label for="weight" >Enter weight in kg: </label>
            <
            input type="number" min= '0' name="weight" value={weight} onChange={handleChange} 
            />
            <div style = {(!weight?{visibility:'hidden'}: {visibility:'visible'})}>
                <p id='response'>The total insulin is {total}</p>
            
                {<p style={{backgroundColor:'white'} }>The split dose is {Math.floor(total/2)} units of long acting and {Math.floor(total/6)} units prandial</p>}
            </div>
        </div>
            
        </div>
    )
}