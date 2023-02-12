import { useState } from "react"

export const ToggleCustom = ({isDark=true}) => {

    const [isDarky,setIsDarky] = useState(isDark)
    
    let togglePosition = !isDarky? {right: "4px"} : {right:"unset"}
    
    return(
        <div className={`${isDarky? " toggle-background" : "toggle-background-active"}`}>
            <div className= {`${isDarky? "toggle-mountain" : "toggle-mountain-active"}` + " relative flex align-items-center px-1"}>
                <div className={ `${isDarky? " toggle-circle" : "toggle-circle-active"}` + " absolute cursor-pointer"} onClick={() => setIsDarky(!isDarky)}>

                </div>
            </div>
        </div>
    )
}