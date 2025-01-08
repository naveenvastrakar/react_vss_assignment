import { createContext, useState } from "react";
import B from "./B";

export const aContext = createContext(null);
const AProvider = aContext.Provider;

const A = () => {
  const [darkTheme,setDarkTheme] = useState(false);

  return (
    <AProvider value={{ backgroundColor:darkTheme ? "black": "white",color:darkTheme? "white":"black" }} >
        hello I m A naveen
        <button onClick={()=>setDarkTheme(!darkTheme)}>chnage theme</button>
        <B/>
    </AProvider>
  )
}

export default A;
