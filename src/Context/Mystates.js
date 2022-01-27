import React, { useState } from "react";
import myContext from "./Mycontext";
const MyStates = (props) => {
    const [state, setState] = useState(false);
    const [FullName,setFullName]=useState("Shubham");
    const [Loginu,setuname]=useState("Shubham");
    const [Loginpass,setpassword]=useState("12345");
    const update = () => {
        const p = window.confirm("Are You Sure");
        if (p === true) {
            if (state) {
                setState(false)
            } else {
                setState(true)
            }
        }
    }
    return (
        <myContext.Provider value={{ state, update ,FullName,Loginu,Loginpass}}>
            {props.children}
        </myContext.Provider>
    )
}
export default MyStates;