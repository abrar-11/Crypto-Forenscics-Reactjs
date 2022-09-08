import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { createTheme,  ThemeProvider } from "@material-ui/core";
import CoinTable from "./CoinTable";
// import { ThemeProvider } from "styled-components";
const CoinTableContainer = () => {

    const [input, setinput] = useState("")

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#5B39DB",
            },          
            type:"dark"
        }
    })
    return (
        <>
        <ThemeProvider theme={darkTheme} >
    
            <form className="" noValidate autoComplete="off"  style={{margin:"3rem auto"}}>
               
                <TextField
                    id="outlined-basic"
                    label="Search Coin here"
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e)=>setinput(e.target.value)}
                />

            </form>
            </ThemeProvider >
            
          <CoinTable input={input}/>
        </>
    );
};


export default CoinTableContainer;
