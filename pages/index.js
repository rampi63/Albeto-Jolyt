import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  
import {Saly} from "../assets/images/Saly-13.png"

import Head from "next/head";
import Header from "@/components/Header";
import { FontStyle } from "@/styles/fonts.css";
import { useState } from "react";

export default function Home() {
  
  const [isDark,setIsDark] = useState(true)
  
  return (
    <>
      <Head>
        <title>Alberto Jolyt Cárdenas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <div className={FontStyle()}>
        <div className="banner">
          <Header isDark={isDark}/>
          <div className="flex justify-content-center align-items-center">
            <div className="w-6 flex justify-content-end pr-8">
              <img src="/Saly-13.png"/>
            </div>
            <div className="flex flex-column gap-5 w-6">
              <div className="font-25 font-bold flex gap-2">
                <div>
                  Hola! mi nombre es
                </div>
                <div style={{color:"#00BFFF !important"}}>
                  Alberto Jolyt Cárdenas
                </div> 
              </div>
              <h2 className="m-0">
                <span className="font-bold" style={{color: "#00CAB1 !important"}}>
                  Web developer
                </span>
                <br/>
                <span className="font-light">
                  con habilidades en:
                </span>
                <br/>
                <span className="font-bold">
                  React y Laravel
                </span>
              </h2>
              <h6 className="m-0 font-light" style={{width:"60%"}}>
                Destaco por mis habilidades de liderazgo en los proyectos y mi capacidad para conectar con los clientes para entender mejor sus necesidades.
              </h6>
            </div>
          </div>
        </div>
        <div>
          hola2
        </div>
      </div>
    </>
  )
}
