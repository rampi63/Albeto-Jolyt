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
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';                
import { useForm, Controller } from "react-hook-form";
        

export default function Home() {
  
  const [isDark,setIsDark] = useState()

  useEffect(() => {
    setIsDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
  },[])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sc = window.pageYOffset
      //console.log(sc)
      if(sc >= 4596){
        //document.getElementById("Contact").className = "contact-active absolute"
        document.getElementById("Form-Cont").className = "form-contact-active w-full"

        // setTimeout(() => {
        //   document.getElementById("Contact").className = "contact-active absolute hidden"
        // },400)

        //console.log("Me muestro")
      }else{
        //document.getElementById("Contact").className = "contact absolute flex w-full"
        document.getElementById("Form-Cont").className = "form-contact w-full"
        //console.log("No me muestro")
      }
    });
  },[])

  const defaultValues = {
    nombre: "",
    email: "",
    phone: "",
    mensaje: ""
  }

  const { register, handleSubmit, watch, control,formState: { errors } } = useForm(defaultValues);

  const submit = (data) => {
    console.log("Data: ",data)

    const serviceID = 'default_service';
    const templateID = 'template_uvxk67s';

    emailjs.send(serviceID, templateID, data).then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  }
  
  return (
    <>
      <Head>
        <title>Alberto Jolyt Cárdenas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
        </script>
        <script type="text/javascript">
          emailjs.init('Mn39zD7EpoNEUi7i1')
        </script>
      </Head>
      <style global jsx>
        {`
          body{
            background-color: ${isDark? "#1E1C29 !important;" : "#EAEAEE !important;"};
          }

          .sidebarMenuSB{
            font-size: 20px;
            color: ${isDark? "#FFFFFF !important;" : "#000000 !important;"};
            font-family: 'Montserrat', sans-serif !important;
          }
          
          .sidebarMenuCVSB{
            font-size: 20px;
            color: #00BFFF !important;
            font-family: 'Montserrat', sans-serif !important;
          }
          
          .p-sidebar {
            background: ${isDark? "#1E1C29 !important;" : "#EAEAEE !important;"};
            color: #495057;
            border: 0 none;
            box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
          }

        `}
      </style>
      <div className={FontStyle(isDark)}>
        <div className="bgAll">
          <div className="banner">
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <div className="flex lg:flex-row flex-column-reverse justify-content-center align-items-center pt-8 pb-4 lg:mx-0 mx-4">
              <div className="lg:w-6 w-full flex lg:justify-content-end justify-content-center xl:pr-8 pr-0">
                <img className="sm:w-auto w-12" src="Saly-13.png"/>
              </div>
              <div className="flex flex-column lg:align-items-start align-items-center gap-5 lg:w-6 w-full">
                <div className="flex flex-column gap-5">
                  <div className="font-25 font-bold flex gap-2">
                    <div>
                      Hola! mi nombre es <span style={{color:"#00BFFF !important"}}>Alberto Jolyt Cárdenas </span> 
                    </div>
                  </div>
                  <h2 className="m-0">
                    <span className="font-bold" style={{color: "#00CAB1 !important"}}>
                      Web developer
                    </span>
                    <br/>
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

              <scroll-page className="hidden" id="tech"/>

              <div className="tech-section">
                <h2 className="text-center font-bold m-0 pb-2">
                  Tecnologías
                </h2>
                <h6 className="text-center font-normal m-0">
                  A lo largo de mi trayectoria he trabajado con diversas herramientas que han aumentado mis habilidades.
                </h6>
                <div className="flex md:gap-6 gap-3 pt-8 justify-content-center flex-wrap">
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <Apollo_Icon/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{paddingRight: "2px",width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <S3_Icon/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{paddingBottom: "4px", width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <AWX_Amplify/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="awsLamda.png" style={{paddingLeft:2, paddingRight: 2,width:"44.77px",height:"43.77px",filter: "invert(100%)"}}/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="dbs_mongodb.png" style={{width:"53.77px",height:"53.77px",filter: "invert(100%)"}} />
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="graphql-icon.png" style={{paddingLeft:2, paddingRight: 2,width:"46.77px",height:"50.77px",filter: "invert(100%)"}}/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{paddingLeft:3, paddingTop: 2,width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <Laravel_Icon/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <Javascript_Icon/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="mysql-logo.png" style={{paddingLeft:2, paddingRight: 2,width:"46.77px",height:"50.77px",filter: "invert(100%)"}}/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="next-js.png" style={{paddingLeft:2, paddingRight: 2,width:"57.77px",height:"34.77px",filter: "invert(100%)"}}/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="php-logo.png" style={{paddingLeft:2, paddingRight: 2,width:"57.77px",height:"56.77px",filter: "invert(100%)"}}/>
                  </div>
                  <div className="flex align-items-center justify-content-center" style={{width:"73.77px",height:"73.77px", backgroundColor:"#3D1768",borderRadius:"50px", minWidth:"73.77px"}}>
                    <img src="react.png" style={{paddingLeft:2, paddingRight: 2,width:"53.77px",height:"52.77px",filter: "invert(100%)"}}/>
                  </div>
                </div>
                <div className="flex justify-content-center pt-4">
                  <img className="md:flex hidden w-10" src={isDark ? "ArbolDark.png" : "ArbolLight.png"} />
                  <img className="md:hidden flex pt-4 w-full" src={isDark ? "ArbolDark_Mo.png" : "ArbolLight_M.png"} />
                </div>
              </div>

              <scroll-page className="hidden" id="projects"/>

              <div className="projects-section">
                <h2 className="text-center font-bold m-0">
                  Mis proyectos
                </h2>
                <div className="flex flex-column justify-content-center littleUp" style={{paddingTop: "12rem", gap: "25rem"}}>
                  
                  <div className="flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6">
                    <div className="mt-6 xl:absolute card-left" style={{zIndex:"4"}}>
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
                    <div style={{zIndex:3}} className="relative card-right">
                      <img className="imageProject" src="mango.png" style={{borderRadius: "8px",width: "100%"}}/>
                      <div className="absolute" style={{zIndex:-1,top:"0rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(118, 60, 172,0.50) 27px 20px 100px 35px"}}/>
                      <div className="absolute" style={{zIndex:-1,top:"0rem",right:"2rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(20, 78, 227,0.50) 27px 20px 100px 35px"}}/>
                    </div>
                  </div>

                  <div className="flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6">
                    <div className="mt-6 card-right xl:absolute" style={{zIndex:"4"}}>
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
                    <div style={{zIndex:3}} className="relative card-left">
                      <img src="venn.png" className="imageProject" style={{borderRadius: "8px",width: "100%"}}/>
                      <div className="absolute" style={{zIndex:-1,top:"0rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(20, 78, 227,0.50) 27px 20px 100px 35px"}}/>
                      <div className="absolute" style={{zIndex:-1,top:"0rem",right:"2rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(118, 60, 172,0.50) 27px 20px 100px 35px"}}/>
                    </div>
                  </div>

                  <div className="flex xl:flex-row flex-column w-full relative justify-content-center xl:gap-0 gap-6">
                    <div className="mt-6 xl:absolute card-left" style={{zIndex:"4"}}>
                      <div className="font-semibold" style={{color:"#00BFFF !important"}}>
                        Front End Developer
                      </div>
                      <h3 className="font-bold m-0" onClick={() => scrollToTop()}>
                        Abastero
                      </h3>
                      <div className="card-project mt-4">
                        <h6 className="font-normal m-0">
                          Abastero es un e-commerce para la compra y venta a mayoreo de frutas y verduras mexicanas que ayuda a los agropecuarios a tener ventas directas con los clientes finales.
                        </h6>
                      </div>
                    </div>
                    <div style={{zIndex:3}} className="relative card-right">
                      <img src="abastero.png" className="imageProject" style={{borderRadius: "8px",width: "100%"}}/>
                      <div className="absolute" style={{zIndex:-1,top:"0rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(118, 60, 172,0.50) 27px 20px 100px 35px"}}/>
                      <div className="absolute" style={{zIndex:-1,top:"0rem",right:"2rem",maxWidth:"46rem",borderRadius: "500px",width: "60%",height:"95%",boxShadow:"rgb(20, 78, 227,0.50) 27px 20px 100px 35px"}}/>
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex flex-column mt-8" style={{marginBottom:"5rem"}}>
                <div className="flex justify-content-center relative">
                    {/* <img id="Contact" className="contact-active" src={isDark? "Contacto_Dark.png" : "Contacto_Light.png"}/> */}
                    <div id="Form-Cont" className="form-contact">
                      <form onSubmit={handleSubmit(submit)} className="grid gap-6 justify-content-between form-inputs">
                        <div className="col-12 flex justify-content-center">
                          <img id="Contact" className="contact md:w-6 w-full mb-6" src={isDark? "Contacto_Dark.png" : "Contacto_Light.png"}/>
                        </div>
                        <Controller name={"nombre"} control={control} rules={{required: true, pattern:/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/g}} render={({field,fieldState}) =>
                          <InputText
                            value={field.value}
                            onInput={(e) => { field.onChange(e.target.value) }}
                            placeholder="Nombre*"
                            className={"sm:col-5 col-12" + `${errors.nombre ? " p-invalid" : ""}`}
                          />
                        }/>
                        <Controller name={"email"} control={control} rules={{required: true, pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z\s]{2,}))$/}} render={({field,fieldState}) =>
                          <InputText
                            value={field.value}
                            onInput={(e) => { field.onChange(e.target.value) }}
                            placeholder="Email*"
                            className={"sm:col-5 col-12" + `${errors.email ? " p-invalid" : ""}`}
                          />
                        }/>
                        <Controller name={"phone"} control={control} rules={{required: true, pattern:/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?[\d{1,9}\s]$/}} render={({field,fieldState}) =>
                          <InputText
                            value={field.value}
                            onInput={(e) => { field.onChange(e.target.value) }}
                            placeholder="Teléfono*"
                            className={"col-12" + `${errors.phone ? " p-invalid" : ""}`}
                          />
                        }/>
                        <Controller name={"mensaje"} control={control} rules={{required: true, pattern:/^[^|<>]*$/}} render={({field,fieldState}) =>
                          <InputTextarea
                            value={field.value}
                            onInput={(e) => { field.onChange(e.target.value) }}
                            placeholder="Mensaje*"
                            autoResize
                            rows={5} 
                            cols={150}
                            className={"col-12" + `${errors.mensaje ? " p-invalid" : ""}`}
                          />
                        }/>
                        <Button
                          label="Enviar"
                        />
                      </form>
                    </div>
                </div>
              </div>

            </div>
          </scroll-container>
        </div>
      </div>
    </>
  )
}
