import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  

import Head from "next/head";
import Header from "@/components/Header";
import { FontStyle } from "@/styles/fonts.css";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [isDark,setIsDark] = useState()

  useEffect(() => {
    setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
  },[])
  
  return (
    <>
      <Head>
        <title>Alberto Jolyt Cárdenas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <div className={FontStyle(isDark)}>
        <div className="bgAll">
          <div className="banner">
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <div className="flex justify-content-center align-items-center pt-8 pb-4">
              <div className="w-6 flex justify-content-end pr-8">
                <img src="Saly-13.png"/>
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
          <div className="container flex flex-column">
            <div>
              <h1 className="first-section-title text-center m-0">
                Soy capaz de crear interfaces y aplicaciones web de alta calidad
              </h1>
              <div className="mt-8 card-first-section">
                <h6 className="text-center font-normal m-0">
                  Mi ágil aprendizaje ayuda a adaptarme rápidamente a nuevas tecnologías y tendencias en la industria, lo que me permite estar siempre actualizado y ofrecer soluciones innovadoras. Mi estilo de presentación se enfoca en la comunicación efectiva y la atención al detalle. Me entusiasma aprender y especializarme en liderazgo de proyectos para contribuir al crecimiento y éxito de un equipo y una empresa.
                </h6>
              </div>
            </div>
            <div className="tech-section">
              <h2 className="text-center font-bold m-0 pb-2">
                Tecnologías
              </h2>
              <h6 className="text-center font-normal m-0">
                A lo largo de mi trayectoria he trabajado con diversas herramientas que han aumentado mis habilidades.
              </h6>
              <div className="flex gap-6 pt-8 justify-content-center">
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
                <div style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>

                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
