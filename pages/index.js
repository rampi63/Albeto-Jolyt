import "/node_modules/primeflex/primeflex.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import Head from "next/head";
import Header from "@/components/Header";
import { CVStyle } from "@/styles/CVStyle.css";
import { useEffect, useState } from "react";
import Apollo_Icon from "@/assets/svgComponents/Apollo";
import S3_Icon from "@/assets/svgComponents/AWS_S3";
import AWX_Amplify from "@/assets/svgComponents/AWS_Amplify";
import Laravel_Icon from "@/assets/svgComponents/Laravel_icon";
import Javascript_Icon from "@/assets/svgComponents/Javascript_icon";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useForm, Controller } from "react-hook-form";


export default function Home() {

  const [isDark, setIsDark] = useState()
  const [readMore, setReadMore] = useState({
    mango: false,
    abastero: false,
    venn: false
  })

  useEffect(() => {
    setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
  }, [])

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     let sc = window.pageYOffset
  //     if (sc >= 4596) {
  //       document.getElementById("Form-Cont").className = "form-contact-active w-full"
  //     } else {
  //       document.getElementById("Form-Cont").className = "form-contact w-full"
  //     }
  //   });
  // }, [])

  const defaultValues = {
    nombre: "",
    email: "",
    phone: "",
    mensaje: ""
  }

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm(defaultValues);

  const submit = (data) => {
    // console.log("Data: ", data)

    // const serviceID = 'default_service';
    // const templateID = 'template_uvxk67s';

    // emailjs.send(serviceID, templateID, data).then(() => {
    //   btn.value = 'Send Email';
    //   alert('Sent!');
    // }, (err) => {
    //   btn.value = 'Send Email';
    //   alert(JSON.stringify(err));
    // });
  }

  return (
    <>
      <Head>
        <title>Alberto Jolyt Cárdenas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        {/* <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
        </script>
        <script type="text/javascript">
          emailjs.init('Mn39zD7EpoNEUi7i1')
        </script> */}
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
      <div className={CVStyle(isDark)}>
        <div className="bgAll">
          <div className="banner">
            <Header isDark={isDark} setIsDark={setIsDark} />
            <div className="flex lg:flex-row flex-column-reverse justify-content-center align-items-center pt-8 pb-4 lg:mx-0 mx-4">
              <div className="lg:w-6 w-full flex lg:justify-content-end justify-content-center xl:pr-8 pr-0">
                <img className="sm:w-auto w-12" src="Saly-13.png" />
              </div>
              <div className="flex flex-column lg:align-items-start align-items-center gap-5 lg:w-6 w-full">
                <div className="flex flex-column gap-5">
                  <div className="font-25 font-bold flex gap-2">
                    <div>
                      Hola! mi nombre es <span style={{ color: "#00BFFF !important" }}>Alberto Jolyt Cárdenas </span>
                    </div>
                  </div>
                  <h2 className="m-0">
                    <span className="font-bold" style={{ color: "#00CAB1 !important" }}>
                      Web developer
                    </span>
                    <br />
                  </h2>
                  <h6 className="m-0 font-light xl:w-7 w-full">
                    Destaco por mis habilidades de liderazgo en los proyectos y mi capacidad para conectar con los clientes para entender mejor sus necesidades.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <scroll-container>
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

              <scroll-page className="hidden" id="tech" />

              <div className="tech-section">
                <h2 className="text-center font-bold m-0 pb-2">
                  Tecnologías
                </h2>
                <h6 className="text-center font-normal m-0">
                  A lo largo de mi trayectoria he trabajado con diversas herramientas que han aumentado mis habilidades.
                </h6>
                <div className="flex md:gap-6 gap-3 pt-8 justify-content-center flex-wrap">
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <Apollo_Icon />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ paddingRight: "2px", width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <S3_Icon />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ paddingBottom: "4px", width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <AWX_Amplify />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="awsLamda.png" style={{ paddingLeft: 2, paddingRight: 2, width: "44.77px", height: "43.77px", filter: "invert(100%)" }} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="dbs_mongodb.png" style={{ width: "53.77px", height: "53.77px", filter: "invert(100%)" }} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="graphql-icon.png" style={{ paddingLeft: 2, paddingRight: 2, width: "46.77px", height: "50.77px", filter: "invert(100%)" }} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ paddingLeft: 3, paddingTop: 2, width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <Laravel_Icon />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <Javascript_Icon />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="mysql-logo.png" style={{ paddingLeft: 2, paddingRight: 2, width: "46.77px", height: "50.77px", filter: "invert(100%)" }} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="next-js.png" style={{ paddingLeft: 2, paddingRight: 2, width: "57.77px", height: "34.77px", filter: "invert(100%)" }} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="php-logo.png" style={{ paddingLeft: 2, paddingRight: 2, width: "57.77px", height: "56.77px", filter: "invert(100%)" }} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{ width: "73.77px", height: "73.77px", backgroundColor: "#3D1768", borderRadius: "50px", minWidth: "73.77px" }}>
                    <img src="react.png" style={{ paddingLeft: 2, paddingRight: 2, width: "53.77px", height: "52.77px", filter: "invert(100%)" }} />
                  </div>
                </div>
                <div className="flex justify-content-center pt-4">
                  <img className="md:flex hidden w-10" src={isDark ? "ArbolDark.png" : "ArbolLight.png"} />
                  <img className="md:hidden flex pt-4 w-full" src={isDark ? "ArbolDark_Mo.png" : "ArbolLight_M.png"} />
                </div>
              </div>

              <scroll-page className="hidden" id="projects" />

              <div className="projects-section">
                <h2 className="text-center font-bold m-0">
                  Mis proyectos
                </h2>
                <div className="flex flex-column justify-content-center littleUp" style={{ paddingTop: "12rem", gap: "25rem" }}>

                  <div className={`${readMore.mango ? "marginInXL" : ""}` + " flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6"}>
                    <div className="mt-6 xl:absolute card-left" style={{ zIndex: "4" }}>
                      <div className="font-semibold" style={{ color: "#00BFFF !important" }}>
                        Full Stack Developer
                      </div>
                      <h3 className="font-bold m-0">
                        Mango pase
                      </h3>
                      <div className="card-project mt-4">
                        {
                          readMore.mango &&
                          <>
                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Tecnologías utilizadas: </span>React, Laravel, Docker, AWS Amplify,  AWS S3,  AWS Lambda, MercadoPago, React Router, postgreSQL.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Duración del proyecto: </span>11 meses.
                            </h6>
                          </>
                        }
                        <h6 className="font-normal m-0">
                          <span className={readMore.mango ? "" : "hidden"} style={{ color: "#00BFFF !important" }}>Descripción del proyecto: </span>Mango Pase es una solución innovadora para la compra y venta de boletos en línea para cualquier tipo de evento social. Ya sean eventos deportivos, conciertos, conferencias, festivales, etc.
                        </h6>
                        {
                          readMore.mango &&
                          <>
                            <h6 className="font-normal m-0 my-3">
                              <span style={{ color: "#00BFFF" }}>Objetivos del proyecto: </span>Crear una plataforma web altamente personalizable para la creación y gestión de eventos sociales. Con un enfoque en la flexibilidad, ofreciendo una variedad de opciones de boletos, cupones de descuento, venta de productos relacionados al evento y personalización del formulario de registro para adaptarse a las necesidades únicas de los organizadores de eventos. Además de implementar un sistema de gestión de transacciones y boletos fácil de usar, así como un checkout optimizado mediante la integración de tecnologías de Mercado Pago para un proceso de compra rápido y sencillo.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Desafios y soluciones: </span>En este proyecto, enfrenté desafíos significativos en el desarrollo web. El principal desafío fue implementar la aplicación en un servicio de nube escalable como AWS, lo que me obligó a aprender y resolver problemas al mismo tiempo. Además, tuve que superar la complejidad de crear PDFs personalizados para los boletos mediante la implementación de React PDF. La creación de un checkout optimizado mediante tecnologías de Mercado Pago también presentó desafíos debido a la escasa documentación disponible. También tuve que desarrollar la capacidad de imprimir boletos en impresoras de calor para la instanciación de una taquilla física en los recintos de eventos. Además de esto, me tocó liderar y gestionar el proyecto desde principio a fin, a su vez, comunicarme con el cliente y mis superiores para alcanzar los resultados esperados.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Resultados obtenidos: </span>Una página totalmente competitiva e intuitiva para la compra y venta de boletos para eventos sociales con un constante flujo de usuarios diarios y una cantidad de emisiones de boletos diarios considerables a través de todos los eventos actuales en cuestión.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Habilidades demostradas: </span>Habilidades de liderazgo, desarrollo en React con diferentes librerías como React Router o React PDF, desarrollo en Laravel,  organización y planificación de tareas y entregables, diseño y usabilidad.
                            </h6>
                          </>
                        }
                        <h6 className={"font-normal m-0 mt-6 cursor-pointer"} onClick={() => setReadMore({ ...readMore, mango: !readMore.mango })} style={{ color: "#00CAB1 !important;" }}>
                          {!readMore.mango ? "Leer más..." : "Ocultar"}
                        </h6>
                      </div>
                    </div>
                    <div style={{ zIndex: 3 }} className="relative card-right">
                      <img className="imageProject" src="mango.png" style={{ borderRadius: "8px", width: "100%" }} />
                      <div className="absolute" style={{ zIndex: -1, top: "0rem", maxWidth: "46rem", borderRadius: "500px", width: "60%", height: "95%", boxShadow: "rgb(118, 60, 172,0.50) 27px 20px 100px 35px" }} />
                      <div className="absolute" style={{ zIndex: -1, top: "0rem", right: "2rem", maxWidth: "46rem", borderRadius: "500px", width: "60%", height: "95%", boxShadow: "rgb(20, 78, 227,0.50) 27px 20px 100px 35px" }} />
                    </div>
                  </div>

                  <div className={`${readMore.venn ? "marginInXL" : ""}` + " flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6"}>
                    <div className="mt-6 card-right xl:absolute" style={{ zIndex: "4" }}>
                      <div className="font-semibold text-right" style={{ color: "#00BFFF !important" }}>
                        Front End Developer
                      </div>
                      <h3 className="font-bold m-0 text-right">
                        Venntor
                      </h3>
                      <div className="card-project mt-4">
                        {
                          readMore.venn &&
                          <>
                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Tecnologías utilizadas: </span>React, WordPress con PHP y mySQL.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Tiempo de contribución: </span>De Marzo 2022 a Agosto 2022.
                            </h6>
                          </>
                        }
                        <h6 className="font-normal m-0">
                          <span className={readMore.venn ? "" : "hidden"} style={{ color: "#00BFFF !important" }}>Descripción del proyecto: </span>Venn es una plataforma revolucionaria para maestros y profesores que ofrece una amplia variedad de opciones para brindar servicios educativos personalizados. Con Venn, los maestros pueden ofrecer Consultorías 1:1, Sesiones Live y Cursos Online Pre-Grabados, lo que permite a los estudiantes acceder a una amplia variedad de contenido educativo y desarrollarse profesionalmente de manera eficiente y efectiva.
                        </h6>
                        {
                          readMore.venn &&
                          <>
                            <h6 className="font-normal m-0 my-3">
                              <span style={{ color: "#00BFFF" }}>Objetivos del proyecto: </span>Este proyecto buscaba revolucionar la experiencia educativa al crear un ecosistema amigable tanto para profesores como para estudiantes ofreciendo una variedad de herramientas avanzadas para que los profesores puedan crear y gestionar su contenido de manera eficiente, además de proporcionar métricas de rendimiento para tener una mejor comprensión del alcance de su contenido. Los estudiantes por su lado, requerían una interfaz intuitiva para gestionar su contenido adquirido y un seguimiento de sus progresos, todo con el objetivo de mejorar la experiencia educativa en su totalidad.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Desafios y soluciones: </span>Enfrentamos desafíos significativos al trabajar con Wordpress en este proyecto debido al tamaño y complejidad del mismo. Sin embargo, fuimos capaces de optimizar y mejorar su rendimiento mediante la implementación de soluciones avanzadas. Además, la tarea de integrar métricas y gráficos en la plataforma fue desafiante, pero logramos superarlo con éxito. También tuvimos que enfrentar el reto de desarrollar un sistema de gestión de pagos y cuentas de administrador para facilitar la gestión del proyecto. Por último, Reestructuramos y rediseñamos las vistas existentes con React para una mejor experiencia de usuario.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Resultados obtenidos: </span>Mi colaboración en este proyecto fue breve pero impactante. En solo 8 meses, logré grandes avances en el proyecto. Me enorgullece haber contribuido en la creación de una interfaz de usuario amigable y en la integración de gráficos y métricas para una mejor comprensión del rendimiento del proyecto. También fui crucial en la depuración de bugs y errores en la plataforma, lo que llevó a una experiencia de usuario superior.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Habilidades demostradas: </span> Desarrollo en React, depuración de múltiples bugs, diseño y usabilidad
                            </h6>
                          </>
                        }
                        <h6 className={"font-normal m-0 mt-6 cursor-pointer"} onClick={() => setReadMore({ ...readMore, venn: !readMore.venn })} style={{ color: "#00CAB1 !important;" }}>
                          {!readMore.venn ? "Leer más..." : "Ocultar"}
                        </h6>
                      </div>
                    </div>
                    <div style={{ zIndex: 3 }} className="relative card-left">
                      <img src="venn.png" className="imageProject" style={{ borderRadius: "8px", width: "100%" }} />
                      <div className="absolute" style={{ zIndex: -1, top: "0rem", maxWidth: "46rem", borderRadius: "500px", width: "60%", height: "95%", boxShadow: "rgb(20, 78, 227,0.50) 27px 20px 100px 35px" }} />
                      <div className="absolute" style={{ zIndex: -1, top: "0rem", right: "2rem", maxWidth: "46rem", borderRadius: "500px", width: "60%", height: "95%", boxShadow: "rgb(118, 60, 172,0.50) 27px 20px 100px 35px" }} />
                    </div>
                  </div>

                  <div className={`${readMore.abastero ? "marginInXL" : ""}` + " flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6"}>
                    <div className="mt-6 xl:absolute card-left" style={{ zIndex: "4" }}>
                      <div className="font-semibold" style={{ color: "#00BFFF !important" }}>
                        Front End Developer
                      </div>
                      <h3 className="font-bold m-0">
                        Abastero
                      </h3>
                      <div className="card-project mt-4">
                        {
                          readMore.abastero &&
                          <>
                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Tecnologías utilizadas: </span>React, WordPress con PHP y mySQL.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Duración del proyecto: </span>5 meses.
                            </h6>
                          </>
                        }
                        <h6 className="font-normal m-0">
                          <span className={readMore.abastero ? "" : "hidden"} style={{ color: "#00BFFF !important" }}>Descripción del proyecto: </span>Abastero es un e-commerce para la compra y venta a mayoreo de frutas y verduras mexicanas que ayuda a los agropecuarios a tener ventas directas con los clientes finales.
                        </h6>
                        {
                          readMore.abastero &&
                          <>
                            <h6 className="font-normal m-0 my-3">
                              <span style={{ color: "#00BFFF" }}>Objetivos del proyecto: </span>Crear una plataforma web altamente personalizable para la creación y gestión de eventos sociales. Con un enfoque en la flexibilidad, ofreciendo una variedad de opciones de boletos, cupones de descuento, venta de productos relacionados al evento y personalización del formulario de registro para adaptarse a las necesidades únicas de los organizadores de eventos. Además de implementar un sistema de gestión de transacciones y boletos fácil de usar, así como un checkout optimizado mediante la integración de tecnologías de Mercado Pago para un proceso de compra rápido y sencillo.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Desafios y soluciones: </span>Tuve que retomar el proyecto debido a que los antiguos desarrolladores ya no colaboraban en el proyecto y el tiempo de entrega ya estaba por cumplirse, por lo que tuve que lidiar con los clientes y organizar el proyecto para entregarlo lo antes posible. El mayor reto fue implementar los estados de la compra para los clientes y los productores debido a que hay varios pasos desde que compras el producto hasta que llega a tu domicilio. Gracias al esfuerzo de mi equipo y a la organización implementada pudimos entregar la página a los clientes.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Resultados obtenidos: </span>Un e-commerce totalmente funcional e intuitivo y un par de clientes satisfechos con el resultado de su página web.
                            </h6>

                            <h6 className="font-normal m-0 mb-3">
                              <span style={{ color: "#00BFFF" }}>Habilidades demostradas: </span>Habilidades de liderazgo, desarrollo en React, organización y planificación de tareas y entregables, diseño y usabilidad.
                            </h6>
                          </>
                        }
                        <h6 className={"font-normal m-0 mt-6 cursor-pointer"} onClick={() => setReadMore({ ...readMore, abastero: !readMore.abastero })} style={{ color: "#00CAB1 !important;" }}>
                          {!readMore.abastero ? "Leer más..." : "Ocultar"}
                        </h6>
                      </div>
                    </div>
                    <div style={{ zIndex: 3 }} className="relative card-right">
                      <img src="abastero.png" className="imageProject" style={{ borderRadius: "8px", width: "100%" }} />
                      <div className="absolute" style={{ zIndex: -1, top: "0rem", maxWidth: "46rem", borderRadius: "500px", width: "60%", height: "95%", boxShadow: "rgb(118, 60, 172,0.50) 27px 20px 100px 35px" }} />
                      <div className="absolute" style={{ zIndex: -1, top: "0rem", right: "2rem", maxWidth: "46rem", borderRadius: "500px", width: "60%", height: "95%", boxShadow: "rgb(20, 78, 227,0.50) 27px 20px 100px 35px" }} />
                    </div>
                  </div>

                </div>
              </div>

              {/* <div className="flex flex-column mt-8" style={{ marginBottom: "5rem" }}>
                <div className="flex justify-content-center relative">
                  <div id="Form-Cont" className="form-contact">
                    <form onSubmit={handleSubmit(submit)} className="grid gap-6 justify-content-between form-inputs">
                      <div className="col-12 flex justify-content-center">
                        <img id="Contact" className="contact md:w-6 w-full mb-6" src={isDark ? "Contacto_Dark.png" : "Contacto_Light.png"} />
                      </div>
                      <Controller name={"nombre"} control={control} rules={{ required: true, pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g }} render={({ field, fieldState }) =>
                        <InputText
                          value={field.value}
                          onInput={(e) => { field.onChange(e.target.value) }}
                          placeholder="Nombre*"
                          className={"sm:col-5 col-12" + `${errors.nombre ? " p-invalid" : ""}`}
                        />
                      } />
                      <Controller name={"email"} control={control} rules={{ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z\s]{2,}))$/ }} render={({ field, fieldState }) =>
                        <InputText
                          value={field.value}
                          onInput={(e) => { field.onChange(e.target.value) }}
                          placeholder="Email*"
                          className={"sm:col-5 col-12" + `${errors.email ? " p-invalid" : ""}`}
                        />
                      } />
                      <Controller name={"phone"} control={control} rules={{ required: true, pattern: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?[\d{1,9}\s]$/ }} render={({ field, fieldState }) =>
                        <InputText
                          value={field.value}
                          onInput={(e) => { field.onChange(e.target.value) }}
                          placeholder="Teléfono*"
                          className={"col-12" + `${errors.phone ? " p-invalid" : ""}`}
                        />
                      } />
                      <Controller name={"mensaje"} control={control} rules={{ required: true, pattern: /^[^|<>]*$/ }} render={({ field, fieldState }) =>
                        <InputTextarea
                          value={field.value}
                          onInput={(e) => { field.onChange(e.target.value) }}
                          placeholder="Mensaje*"
                          autoResize
                          rows={5}
                          cols={150}
                          className={"col-12" + `${errors.mensaje ? " p-invalid" : ""}`}
                        />
                      } />
                      <Button
                        label="Enviar"
                      />
                    </form>
                  </div>
                </div>
              </div> */}

            </div>
          </scroll-container>
        </div>

        {/* CV IN PFD */}

        <div className="CV w-full">
          <div className="cardProfile mt-4 flex align-items-center justify-content-around">
            <div className="w-6 ml-6">
              <img src="Profile.jpg" className="" style={{ borderRadius: "50%", width: "13rem" }} />
            </div>
            <div className="w-6">
              <h1 style={{ color: "#AD50FF !important;" }}>
                Alberto Jolyt Cárdenas
              </h1>
            </div>
          </div>
          <div className="mx-8 px-2 pb-4">
            <h3>
              Sobre mi
            </h3>
            <p>
              Con una experiencia de 3 años en desarrollo web, habilidades en React y Laravel, destaco por mi capacidad de liderazgo en proyectos, habilidad para conectar con clientes y entender sus necesidades, habilidades técnicas en desarrollo web.
            </p>
            <p>
              Mi ágil aprendizaje me permite adaptarme rápidamente a nuevas tecnologías y tendencias en la industria, lo que me hace estar siempre actualizado y ofrecer soluciones innovadoras.  Me entusiasma aprender y especializarme en liderazgo de proyectos para contribuir al crecimiento y éxito de un equipo y una empresa.
            </p>
          </div>
          <div className="grid px-5 w-11">
            <div className="col-6 grid">
              <div className="col-12 flex flex-column pr-4">
                <div className="flex align-items-center">
                  <div className="w-6" style={{ background: "#693B93", borderRadius: "5px" }}>
                    <h4 style={{ color: "white", margin: "unset", padding: "0.5rem" }}>
                      FORMACIÓN
                    </h4>
                  </div>
                  <div className="w-6" style={{ background: "#693B93", height: "1px" }} />
                </div>
                <div className="my-4 pl-2">
                  <p style={{ fontWeight: "bold", margin: "unset", padding: "unset" }}>
                    Instituto Politécnico Nacional<br />
                    Ing. Sistemas Computacionales
                  </p>
                  <br />
                  <p style={{ fontWeight: "bold", margin: "unset", padding: "unset" }}>
                    INGLES <br />
                    Intermedio
                  </p>
                </div>
              </div>

              <div className="col-12 flex flex-column pr-4">
                <div className="flex align-items-center">
                  <div className="w-6" style={{ background: "#693B93", borderRadius: "5px" }}>
                    <h4 style={{ color: "white", margin: "unset", padding: "0.5rem" }}>
                      CONTACTO
                    </h4>
                  </div>
                  <div className="w-6" style={{ background: "#693B93", height: "1px" }} />
                </div>
                <div className="mt-4 pl-2">
                  <div className="flex align-items-center gap-2">
                    <i className="pi pi-phone" style={{ fontSize: '1rem' }}></i>
                    <p>
                      56-2635-0614
                    </p>
                  </div>
                  <div className="flex align-items-center gap-2">
                    <i className="pi pi-map-marker" style={{ fontSize: '1rem' }}></i>
                    <p>
                      Azcapotzalco, CDMX.
                    </p>
                  </div>
                  <div className="flex align-items-center gap-2">
                    <i className="pi pi-inbox" style={{ fontSize: '1rem' }}></i>
                    <p>
                      rampi63@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 grid">
              <div className="col-12 flex flex-column pl-4">
                <div className="flex align-items-center">
                  <div className="w-6" style={{ background: "#693B93", borderRadius: "5px" }}>
                    <h4 style={{ color: "white", margin: "unset", padding: "0.5rem" }}>
                      SKILLS
                    </h4>
                  </div>
                  <div className="w-6" style={{ background: "#693B93", height: "1px" }} />
                </div>
                <div className="py-4 flex flex-column gap-3">

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "95%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          Javascript
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          95%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "95%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          CSS 3 / SASS
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          95%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "95%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          React JS
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          95%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "75%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          Next JS
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          75%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "55%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          GraphQL
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          55%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "65%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          AWS
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          65%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "85%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          Laravel
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          85%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "85%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          SQL
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          85%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full" style={{ height: "1.5rem", background: "transparent", border: "1px solid #3BD388", borderRadius: "50px" }}>
                    <div className="" style={{ width: "55%", background: "#3BD388", height: "1.5rem", borderRadius: "50px" }}>
                      <div className="flex w-full justify-content-between">
                        <div className="pl-2" style={{ color: "black", fontWeight: "700" }}>
                          MongoDB
                        </div>
                        <div className="pr-2" style={{ color: "black", fontWeight: "700" }}>
                          55%
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CV w-full">
          <h3 className="text-center font-bold pt-1">
            Mis proyectos
          </h3>
          <div className="flex flex-column justify-content-center px-4" style={{ paddingTop: "0rem", gap: "25rem" }}>
            <div className={" flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6"}>
              <div className="xl:absolute card-left" style={{ zIndex: "4" }}>
                <div className="font-semibold" style={{ color: "#00BFFF !important" }}>
                  Full Stack Developer
                </div>
                <h3 className="font-bold m-0">
                  Mango pase
                </h3>
                <div className="card-project mt-4">
                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Tecnologías utilizadas: </span>React, Laravel, Docker, AWS Amplify,  AWS S3,  AWS Lambda, MercadoPago, React Router, postgreSQL.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Duración del proyecto: </span>2 años.
                  </h6>
                  <h6 className="font-normal m-0">
                    <span style={{ color: "#00BFFF !important" }}>Descripción del proyecto: </span>Mango Pase es una solución innovadora para la compra y venta de boletos en línea para cualquier tipo de evento social. Ya sean eventos deportivos, conciertos, conferencias, festivales, etc.
                  </h6>
                  <h6 className="font-normal m-0 my-3">
                    <span style={{ color: "#00BFFF" }}>Objetivos del proyecto: </span>Crear una plataforma web altamente personalizable para la creación y gestión de eventos sociales. Con un enfoque en la flexibilidad, ofreciendo una variedad de opciones de boletos, cupones de descuento, venta de productos relacionados al evento y personalización del formulario de registro para adaptarse a las necesidades únicas de los organizadores de eventos. Además de implementar un sistema de gestión de transacciones y boletos fácil de usar, así como un checkout optimizado mediante la integración de tecnologías de Mercado Pago para un proceso de compra rápido y sencillo.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Desafios y soluciones: </span>En este proyecto, enfrenté desafíos significativos en el desarrollo web. El principal desafío fue implementar la aplicación en un servicio de nube escalable como AWS, lo que me obligó a aprender y resolver problemas al mismo tiempo. Además, tuve que superar la complejidad de crear PDFs personalizados para los boletos mediante la implementación de React PDF. La creación de un checkout optimizado mediante tecnologías de Mercado Pago también presentó desafíos debido a la escasa documentación disponible. También tuve que desarrollar la capacidad de imprimir boletos en impresoras de calor para la instanciación de una taquilla física en los recintos de eventos. Además de esto, me tocó liderar y gestionar el proyecto desde principio a fin, a su vez, comunicarme con el cliente y mis superiores para alcanzar los resultados esperados.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Resultados obtenidos: </span>Una página totalmente competitiva e intuitiva para la compra y venta de boletos para eventos sociales con un constante flujo de usuarios diarios y una cantidad de emisiones de boletos diarios considerables a través de todos los eventos actuales en cuestión.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Habilidades demostradas: </span>Habilidades de liderazgo, desarrollo en React con diferentes librerías como React Router o React PDF, desarrollo en Laravel,  organización y planificación de tareas y entregables, diseño y usabilidad.
                  </h6>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="CV w-full">
          <div className="flex flex-column justify-content-center px-4" style={{ paddingTop: "0rem", gap: "25rem" }}>
            <div className={" flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6"}>
              <div className="mt-6 card-right xl:absolute" style={{ zIndex: "4" }}>
                <div className="font-semibold text-left" style={{ color: "#00BFFF !important" }}>
                  Front End Developer
                </div>
                <h3 className="font-bold m-0 text-left">
                  Venntor
                </h3>
                <div className="card-project mt-4">
                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Tecnologías utilizadas: </span>React, WordPress con PHP y mySQL.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Tiempo de contribución: </span>6 meses.
                  </h6>
                  <h6 className="font-normal m-0">
                    <span style={{ color: "#00BFFF !important" }}>Descripción del proyecto: </span>Venn es una plataforma revolucionaria para maestros y profesores que ofrece una amplia variedad de opciones para brindar servicios educativos personalizados. Con Venn, los maestros pueden ofrecer Consultorías 1:1, Sesiones Live y Cursos Online Pre-Grabados, lo que permite a los estudiantes acceder a una amplia variedad de contenido educativo y desarrollarse profesionalmente de manera eficiente y efectiva.
                  </h6>
                  <h6 className="font-normal m-0 my-3">
                    <span style={{ color: "#00BFFF" }}>Objetivos del proyecto: </span>Este proyecto buscaba revolucionar la experiencia educativa al crear un ecosistema amigable tanto para profesores como para estudiantes ofreciendo una variedad de herramientas avanzadas para que los profesores puedan crear y gestionar su contenido de manera eficiente, además de proporcionar métricas de rendimiento para tener una mejor comprensión del alcance de su contenido. Los estudiantes por su lado, requerían una interfaz intuitiva para gestionar su contenido adquirido y un seguimiento de sus progresos, todo con el objetivo de mejorar la experiencia educativa en su totalidad.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Desafios y soluciones: </span>Enfrentamos desafíos significativos al trabajar con Wordpress en este proyecto debido al tamaño y complejidad del mismo. Sin embargo, fuimos capaces de optimizar y mejorar su rendimiento mediante la implementación de soluciones avanzadas. Además, la tarea de integrar métricas y gráficos en la plataforma fue desafiante, pero logramos superarlo con éxito. También tuvimos que enfrentar el reto de desarrollar un sistema de gestión de pagos y cuentas de administrador para facilitar la gestión del proyecto. Por último, Reestructuramos y rediseñamos las vistas existentes con React para una mejor experiencia de usuario.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Resultados obtenidos: </span>Mi colaboración en este proyecto fue breve pero impactante. En solo 8 meses, logré grandes avances en el proyecto. Me enorgullece haber contribuido en la creación de una interfaz de usuario amigable y en la integración de gráficos y métricas para una mejor comprensión del rendimiento del proyecto. También fui crucial en la depuración de bugs y errores en la plataforma, lo que llevó a una experiencia de usuario superior.
                  </h6>

                  <h6 className="font-normal m-0 mb-3">
                    <span style={{ color: "#00BFFF" }}>Habilidades demostradas: </span> Desarrollo en React, depuración de múltiples bugs, diseño y usabilidad
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CV w-full">
          <div className="flex flex-column justify-content-center px-4" style={{ paddingTop: "0rem", gap: "25rem" }}>
            <div className="mt-6 xl:absolute card-left" style={{ zIndex: "4" }}>
              <div className="font-semibold" style={{ color: "#00BFFF !important" }}>
                Front End Developer
              </div>
              <h3 className="font-bold m-0">
                Abastero
              </h3>
              <div className="card-project mt-4">
                <h6 className="font-normal m-0 mb-3">
                  <span style={{ color: "#00BFFF" }}>Tecnologías utilizadas: </span>React, WordPress con PHP y mySQL.
                </h6>

                <h6 className="font-normal m-0 mb-3">
                  <span style={{ color: "#00BFFF" }}>Duración del proyecto: </span>5 meses.
                </h6>
                <h6 className="font-normal m-0">
                  <span style={{ color: "#00BFFF !important" }}>Descripción del proyecto: </span>Abastero es un e-commerce para la compra y venta a mayoreo de frutas y verduras mexicanas que ayuda a los agropecuarios a tener ventas directas con los clientes finales.
                </h6>
                <h6 className="font-normal m-0 my-3">
                  <span style={{ color: "#00BFFF" }}>Objetivos del proyecto: </span>Crear una plataforma web altamente personalizable para la creación y gestión de eventos sociales. Con un enfoque en la flexibilidad, ofreciendo una variedad de opciones de boletos, cupones de descuento, venta de productos relacionados al evento y personalización del formulario de registro para adaptarse a las necesidades únicas de los organizadores de eventos. Además de implementar un sistema de gestión de transacciones y boletos fácil de usar, así como un checkout optimizado mediante la integración de tecnologías de Mercado Pago para un proceso de compra rápido y sencillo.
                </h6>

                <h6 className="font-normal m-0 mb-3">
                  <span style={{ color: "#00BFFF" }}>Desafios y soluciones: </span>Tuve que retomar el proyecto debido a que los antiguos desarrolladores ya no colaboraban en el proyecto y el tiempo de entrega ya estaba por cumplirse, por lo que tuve que lidiar con los clientes y organizar el proyecto para entregarlo lo antes posible. El mayor reto fue implementar los estados de la compra para los clientes y los productores debido a que hay varios pasos desde que compras el producto hasta que llega a tu domicilio. Gracias al esfuerzo de mi equipo y a la organización implementada pudimos entregar la página a los clientes.
                </h6>

                <h6 className="font-normal m-0 mb-3">
                  <span style={{ color: "#00BFFF" }}>Resultados obtenidos: </span>Un e-commerce totalmente funcional e intuitivo y un par de clientes satisfechos con el resultado de su página web.
                </h6>

                <h6 className="font-normal m-0 mb-3">
                  <span style={{ color: "#00BFFF" }}>Habilidades demostradas: </span>Habilidades de liderazgo, desarrollo en React, organización y planificación de tareas y entregables, diseño y usabilidad.
                </h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
