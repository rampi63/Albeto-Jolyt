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
              <div className="mt-6 card-first-section">
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
            <div className="projects-section">
              <h2 className="text-center font-bold m-0">
                Mis proyectos
              </h2>
              <div className="flex flex-column justify-content-center " style={{paddingTop: "12rem", gap: "25rem"}}>
                
              <div className="flex w-full relative justify-content-center">
                  <div className="mt-6 absolute" style={{marginRight:"35%",zIndex:"4"}}>
                    <div className="font-semibold" style={{color:"#00BFFF !important"}}>
                      Full Stack Developer 
                    </div>
                    <h3 className="font-bold m-0">
                      Mango pase
                    </h3>
                    <div className="card-project mt-4">
                      <h6 className="font-normal m-0">
                        Mango Pase es una solución innovadora para la compra y venta de boletos en línea para cualquier tipo de evento social. Ya sean eventos deportivos, conciertos, conferencias, festivales, etc.
                      </h6>
                    </div>
                  </div>
                  <div style={{marginLeft:"35%",zIndex:3}} className="relative">
                    <img src="mango.png" style={{maxWidth:"46rem",borderRadius: "8px",width: "100%"}}/>
                    <div className="absolute" style={{zIndex:-1,top:"0rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(118, 60, 172,0.50) 27px 20px 100px 35px"}}/>
                    <div className="absolute" style={{zIndex:-1,top:"0rem",right:"2rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(20, 78, 227,0.50) 27px 20px 100px 35px"}}/>
                  </div>
                </div>

                <div className="flex w-full relative justify-content-center">
                  <div className="mt-6 absolute" style={{marginLeft:"35%",zIndex:"4"}}>
                    <div className="font-semibold text-right" style={{color:"#00BFFF !important"}}>
                      Front End Developer
                    </div>
                    <h3 className="font-bold m-0 text-right">
                      Venntor
                    </h3>
                    <div className="card-project mt-4">
                      <h6 className="font-normal m-0">
                      Venn es una plataforma revolucionaria para maestros y profesores que ofrece una amplia variedad de opciones para brindar servicios educativos personalizados. Con Venn, los maestros pueden ofrecer Consultorías 1:1, Sesiones Live y Cursos Online Pre-Grabados, lo que permite a los estudiantes acceder a una amplia variedad de contenido educativo y desarrollarse profesionalmente de manera eficiente y efectiva.
                      </h6>
                    </div>
                  </div>
                  <div style={{marginRight:"35%",zIndex:3}} className="relative">
                    <img src="venn.png" style={{maxWidth:"46rem",borderRadius: "8px",width: "100%"}}/>
                    <div className="absolute" style={{zIndex:-1,top:"0rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(20, 78, 227,0.50) 27px 20px 100px 35px"}}/>
                    <div className="absolute" style={{zIndex:-1,top:"0rem",right:"2rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(118, 60, 172,0.50) 27px 20px 100px 35px"}}/>
                  </div>
                </div>

                <div className="flex w-full relative justify-content-center">
                  <div className="mt-6 absolute" style={{marginRight:"35%",zIndex:"4"}}>
                    <div className="font-semibold" style={{color:"#00BFFF !important"}}>
                      Front End Developer
                    </div>
                    <h3 className="font-bold m-0">
                      Abastero
                    </h3>
                    <div className="card-project mt-4">
                      <h6 className="font-normal m-0">
                        Abastero es un e-commerce para la compra y venta a mayoreo de frutas y verduras mexicanas que ayuda a los agropecuarios a tener ventas directas con los clientes finales.
                      </h6>
                    </div>
                  </div>
                  <div style={{marginLeft:"35%",zIndex:3}} className="relative">
                    <img src="abastero.png" style={{maxWidth:"46rem",borderRadius: "8px",width: "100%"}}/>
                    <div className="absolute" style={{zIndex:-1,top:"0rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(118, 60, 172,0.50) 27px 20px 100px 35px"}}/>
                    <div className="absolute" style={{zIndex:-1,top:"0rem",right:"2rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(20, 78, 227,0.50) 27px 20px 100px 35px"}}/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
