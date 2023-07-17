import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import Header from "@/components/Header"
import { PDFStyle } from "@/styles/PDFStyle.css"
import Head from "next/head"
import { useEffect, useState } from "react"

const downloadCV = () => {

    const [isDark, setIsDark] = useState()

    useEffect(() => {
        setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
    }, [])

    return (
        <>
            <Head>
                <title>Alberto Jolyt Cárdenas</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <style global jsx>
                {`
                body{
                    background-color: ${isDark ? "#1E1C29 !important;" : "#EAEAEE !important;"};
                }

                .sidebarMenuSB{
                    font-size: 20px;
                    color: ${isDark ? "#FFFFFF !important;" : "#000000 !important;"};
                    font-family: 'Montserrat', sans-serif !important;
                }
                
                .sidebarMenuCVSB{
                    font-size: 20px;
                    color: #00BFFF !important;
                    font-family: 'Montserrat', sans-serif !important;
                }
                
                .p-sidebar {
                    background: ${isDark ? "#1E1C29 !important;" : "#EAEAEE !important;"};
                    color: #495057;
                    border: 0 none;
                    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
                }

                .p-sidebar-close-icon{
                    color: ${isDark ? "#FFFFFF !important;" : "#000000 !important;"};
                }

                `}
            </style>
            <div className={PDFStyle(isDark)}>
                <div className="bgAll w-full">
                    <Header isDark={isDark} setIsDark={setIsDark} />

                </div>
            </div>
        </>
    )
}

export default downloadCV