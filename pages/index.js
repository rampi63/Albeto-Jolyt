import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  

import Head from "next/head";
import Header from "@/components/Header";
import { FontStyle } from "@/styles/fonts.css";
import { useEffect, useState } from "react";
import Apollo_Icon from "@/assets/svgComponents/Apollo";
import S3_Icon from "@/assets/svgComponents/AWS_S3";
import AWX_Amplify from "@/assets/svgComponents/AWS_Amplify";
import Laravel_Icon from "@/assets/svgComponents/Laravel_icon";
import Javascript_Icon from "@/assets/svgComponents/Javascript_icon";

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
                  {/* <span className="font-light">
                    con habilidades en:
                  </span>
                  <br/>
                  <span className="font-bold">
                    React y Laravel
                  </span> */}
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
                  Mi ágil aprendizaje ayuda a adaptarme rápidamente a nuevas tecnologías y tendencias en la industria, lo que me permite estar siempre actualizado y ofrecer soluciones innovadoras. Destaco por mi comunicación efectiva y la atención al detalle. Me entusiasma aprender y especializarme como lider de proyecto para contribuir al crecimiento y éxito de un equipo y una empresa.
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
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <Apollo_Icon/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{paddingRight: "2px",width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <S3_Icon/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{paddingBottom: "4px", width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <AWX_Amplify/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="awsLamda.png" style={{paddingLeft:2, paddingRight: 2,width:"44.77px",height:"43.77px",filter: "invert(100%)"}}/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="dbs_mongodb.png" style={{width:"53.77px",height:"53.77px",filter: "invert(100%)"}} />
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="graphql-icon.png" style={{paddingLeft:2, paddingRight: 2,width:"46.77px",height:"50.77px",filter: "invert(100%)"}}/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{paddingLeft:3, paddingTop: 2,width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <Laravel_Icon/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <Javascript_Icon/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="mysql-logo.png" style={{paddingLeft:2, paddingRight: 2,width:"46.77px",height:"50.77px",filter: "invert(100%)"}}/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="next-js.png" style={{paddingLeft:2, paddingRight: 2,width:"57.77px",height:"34.77px",filter: "invert(100%)"}}/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="php-logo.png" style={{paddingLeft:2, paddingRight: 2,width:"57.77px",height:"56.77px",filter: "invert(100%)"}}/>
                </div>
                <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px"}}>
                  <img src="react.png" style={{paddingLeft:2, paddingRight: 2,width:"53.77px",height:"52.77px",filter: "invert(100%)"}}/>
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
