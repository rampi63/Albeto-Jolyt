import Logo from "@/assets/svgComponents/Logo"
import { useState } from "react"
import { ToggleCustom } from "./Toggle"
import { Sidebar } from 'primereact/sidebar';
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ isDark = true, setIsDark }) => {

    const [visible, setVisible] = useState(false)

    const router = useRouter()

    return (
        <header className="w-full flex align-items-center sm:justify-content-around justify-content-between sm:px-0 px-5" style={{ height: "100px" }}>
            <style global jsx>
                {`
                body{
                    overflow-y: ${visible ? "hidden" : "unset"} !important;
                }
            `}
            </style>
            <div>
                {
                    router.pathname === "/" ?
                        <Logo />
                        :
                        <></>
                }
            </div>
            <nav className="gap-3 sm:flex hidden">
                {
                    router.pathname === "/" ?
                        <>
                            <a className="sidebarMenu cursor-pointer" style={{ textDecorationLine: "unset" }} href="#tech">
                                Tecnologías
                            </a>
                            <a className="sidebarMenu cursor-pointer" style={{ textDecorationLine: "unset" }} href="#projects">
                                Proyectos
                            </a>
                            <div className="sidebarMenuCV cursor-pointer" style={{ color: "#00BFF" }} onClick={() => window.open("/downloadCV")}>
                                Descargar CV
                            </div>
                        </>
                        :
                        <>
                        </>
                }
            </nav>
            <div className="sm:flex hidden">
                <ToggleCustom isDark={isDark} setIsDark={setIsDark} />
            </div>
            <Sidebar visible={visible} position="right" onHide={() => setVisible(false)}>
                <div className="flex flex-column-reverse gap-6">
                    <nav className="gap-3 flex-column flex">
                        <a onClick={() => setVisible(false)} className="sidebarMenuSB cursor-pointer" style={{ textDecorationLine: "unset" }} href="#tech">
                            Tecnologías
                        </a>
                        <a onClick={() => setVisible(false)} className="sidebarMenuSB cursor-pointer" style={{ textDecorationLine: "unset" }} href="#projects">
                            Proyectos
                        </a>
                        <div onClick={() => setVisible(false)} className="sidebarMenuCVSB cursor-pointer" style={{ color: "#00BFF" }}>
                            Descargar CV
                        </div>
                    </nav>
                    <div className="">
                        <ToggleCustom isDark={isDark} setIsDark={setIsDark} />
                    </div>
                </div>
            </Sidebar>
            <i className="pi pi-bars sm:hidden flex" style={{ color: 'white', fontSize: "3rem" }} onClick={() => setVisible(true)}></i>
        </header>
    )
}

export default Header