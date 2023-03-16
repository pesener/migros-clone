import React, { useState } from "react";

import { TextField} from "@mui/material/"
import InputAdornment from '@mui/material/InputAdornment';
import { grey } from '@mui/material/colors';



const Deneme = () => {

const [city, setCity]= useState<any>([])




return(    
    
    <div className="flex justify-center items-center mt-12 ">
       <div className="w-[450px]">
    <TextField label="il"
    select
    fullWidth
    helperText="Please select your currency"
     >
   <option  className={`p-2  text-md cursor-pointer hover:text-orange-400 active:bg-gray-200 
                      
                    
                  `}>Indie

</option>
 
    <option value='cit'>Mindie

</option>
<option value='cit.'>Findie

</option>

    </TextField>
    
             

    </div>
    </div>
       )




       
};

export default Deneme;
