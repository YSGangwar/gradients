import { useState } from "react"
export const useFormInput = (inputValue) =>{

    const [ value , setValue ] = useState(inputValue);

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const inputProps = {
        value :value,
        onchange : handleChange
    }
    
    return inputProps;
}