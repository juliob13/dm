import React , {useState}from "react";
export default function Weight({factor}){
    const [weight, setWeight] = useState();
    const handleChange =({target})=>{
        let newWeight =target.value;
        setWeight(newWeight);
    }
    return (
        <div>
            <label for="weight" >Enter weight in kg: </label>
            <
            input type="number" name="weight" value={weight} onChange={handleChange} 
            />
            
        </div>
    )
}