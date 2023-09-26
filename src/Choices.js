import React, {useState, useEffect} from 'react';
import Results from './Results';

export default function Choices(){
    const [choiceValue, setChoiceValue] = useState(0.4);
    const [scale, setScale] = useState(['kg']);
    const [total, setTotal] = useState(0)
    const multiplier ={"Normal weight":0.4, ESRD:0.2, Obese:0.5, "Type 1 DM": 0.2};

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

    const handleClick = ({target})=>{
        let previous = scale
        if (previous!== target.value){
             setScale(target.value)
             
    }
}
    
    useEffect(()=>{
     
         setTotal(choiceValue*weight)

    }, [choiceValue, weight])
  
    

  
    return (
        <div>
            <label>What is your risk?</label>
                   {list}
            
                <div>
            <label for="weight" >Enter weight in <button value='kg' onClick={handleClick}>kg</button> <button value='pounds' onClick={handleClick}>pounds</button>: </label>
            <
            input type="number" min= '0' name="weight" value={weight} onChange={handleChange} 
            />
            <Results total={total} scale={scale}/>
            
        </div>
            
        </div>
    )
}