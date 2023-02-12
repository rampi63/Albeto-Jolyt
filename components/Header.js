import Logo from "@/assets/svgComponents/Logo"
import { ToggleCustom } from "./Toggle"

const Header = ({isDark=true}) => {
    return(
        <header className="w-full flex justify-content-around align-items-center" style={{height:"100px"}}>
            <div>
                <Logo/>
            </div>
            <div className="flex gap-3">
                <div className="sidebarMenu cursor-pointer">
                    Tecnologías
                </div>
                <div className="sidebarMenu cursor-pointer">
                    Proyectos
                </div>
                <div className="sidebarMenuCV cursor-pointer" style={{color:"#00BFF"}}>
                    Descargar CV
                </div>
            </div>
            <div>
                <ToggleCustom isDark={isDark}/>
            </div>
        </header>
    )
}

export default Header