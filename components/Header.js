import Logo from "@/assets/svgComponents/Logo"
import { ToggleCustom } from "./Toggle"

const Header = ({isDark=true,setIsDark}) => {

    function scrollToTop(id){
        console.log(id)
        let access = document.getElementById(id);
        access.scrollIntoView(false);
        //window.scrollTo({top: access, behavior: 'smooth'});
    }

    return(
        <header className="w-full flex justify-content-around align-items-center" style={{height:"100px"}}>
            <div>
                <Logo/>
            </div>
            <nav className="flex gap-3">
                <a className="sidebarMenu cursor-pointer" style={{textDecorationLine:"unset"}}  href="#tech">
                    Tecnologías
                </a>
                <a className="sidebarMenu cursor-pointer" style={{textDecorationLine:"unset"}} href="#projects">
                    Proyectos
                </a>
                <div className="sidebarMenuCV cursor-pointer" style={{color:"#00BFF"}}>
                    Descargar CV
                </div>
            </nav>
            <div>
                <ToggleCustom isDark={isDark} setIsDark={setIsDark}/>
            </div>
        </header>
    )
}

export default Header