import { css } from "@emotion/css";
import bg from "../assets/imgNext/Background.png"

export const CVStyle = (isDark = true) => {

    let fontFamily = "font-family: 'Montserrat', sans-serif !important;"
    let fontGeneralColor = isDark ? "color: #FFFFFF !important;" : "color: #000000 !important;"
    let bgColor = isDark ? "#1E1C29;" : "#EAEAEE;"
    let banner = isDark ? "linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(30, 28, 41)), url(Background.png);" : "linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(234, 234, 238)), url(Background.png);"

    return css`

        ${fontFamily}
        ${fontGeneralColor}

        transition: all 0.4s ease;

        .p-inputtext.p-invalid.p-component {
            border-color: #e24c4c !important;
        }

        .p-button {
            color: #ffffff;
            background: unset !important;
            border: unset !important;
            padding: 0.75rem 1.25rem;
            transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
            border-radius: 6px;
        }

        .p-inputtext{
            ${fontFamily}
            ${fontGeneralColor}
            font-size: 25px !important;
            background-color: rgba(173, 80, 255, 0.1) !important;
            border-color: transparent !important;
            border-radius: 19px !important;
        }

        .p-component{
            ${fontFamily}
            ${fontGeneralColor}
            font-size: calc(1.1rem + 0.4vw) !important;
        }

        .p-button-label {
            font-weight: 400 !important;
        }

        .p-inputtext::placeholder{
            ${fontFamily}
            ${fontGeneralColor}
            font-size: calc(1.1rem + 0.4vw) !important;
        }

        .p-inputtext:enabled:focus {
            outline: 0 none;
            outline-offset: 0;
            box-shadow: 0px 0px 44px 1px rgb(20 78 227 / 60%);
            border-color: #6366F1;
        }

        .bgAll{
            background-color: ${bgColor}
            transition: unset !important;
        }

        h1{
            font-size: calc(1.8rem + 1.5vw);
        }

        h2{
            font-size: calc(2.3rem + 1vw);
        }

        h3{
            font-size: calc(1.8rem + 0.4vw);
        }

        h6{
            font-size: calc(1.1rem + 0.3vw);
        }

        .sidebarMenu{
            font-size: 20px;
            color: #FFFFFF !important;
        }

        .sidebarMenuCV{
            font-size: 20px;
            color: #00BFFF !important;
        }

        .font-25{
            font-size: calc(1.1rem + 0.4vw);
        }

        .font-18{
            font-size: 18px;
        }

        .banner{
            background-image: ${banner}
            background-size: cover;
        }

        .container{
            padding: 0rem 10rem;
            padding-top: 5rem;

            .first-section-title{
                padding: 0rem 10rem;
            }

            .card-first-section{
                border-radius: 14px;
                background-color: ${isDark ? "#262639" : "#EAEAEE"};
                padding: 1.5rem;
                filter: drop-shadow(22px 17px 25px rgba(20, 78, 227, 0.2));
                background-image: linear-gradient(315deg, #144ee30a 35%, #763cac2e 100%);
            }

            .tech-section{
                padding-top: 15rem;
            }

            .projects-section{
                padding-top: 20rem;
                padding-bottom: 15rem;
            }

            .card-project {
                max-width: 46rem;
                height: auto;
                padding: 2.5rem 2rem;
                border-radius: 14px;
                font-size: 1rem;
                background: ${isDark ? "#262639e0" : "#EAEAEEe0"};
                -webkit-backdrop-filter: blur(5px);
                backdrop-filter: blur(5px);
                background-image: linear-gradient(315deg, #144ee30a 35%, #763cac2e 100%);
            }
        }

        .contact-active{
            transform: scale(0);
            transition: all 0.4s ease;
        }

        .contact{
            
            transition: all 0.4s ease;
        }

        .form-contact-active{
            transition: all 0.4s ease;
        }

        .form-contact{
            opacity: 0;
            transition: all 0.4s ease;
        }

        .form-inputs{
            max-width: 1108px;
            width: 100%;
            margin: 0 auto;

        }

        .card-left{
            margin-right: 35%;
        }

        .card-right{
            margin-left: 35%;
        }

        .imageProject{
            max-width: 46rem;
        }

        .marginInXL{
            margin-bottom: 85rem;
        }
        
        @media(max-width: 1200px){

            .marginInXL{
                margin-bottom: unset !important;
            }
            
            .imageProject{
                max-width: unset;
            }

            .first-section-title{
                padding: 0 !important;
            }

            .container{
                padding: 0rem 1.5rem;
                padding-top: 5rem;

                .card-project{
                    max-width: unset !important;
                }
            }

            .card-left{
                margin-right: unset;
            }
    
            .card-right{
                margin-left: unset;
            }
        }

        @media(max-width: 576px){
            .container{
                .tech-section{
                    padding-top: 10rem;
                }

                .projects-section{
                    padding-top: 10rem;

                    .littleUp{
                        padding-top: 5rem !important;
                        gap: 10rem !important;
                    }
                }
            }  
        }

        //Para descargar el PDF

        .CV{
            display: none;

            .cardProfile {
                max-width: 46rem;
                height: auto;
                padding: 2.5rem 2rem;
                border-radius: 14px;
                font-size: 1rem;
                background: ${isDark ? "#262639e0" : "#EAEAEEe0"};
                -webkit-backdrop-filter: blur(5px);
                backdrop-filter: blur(5px);
                background-image: linear-gradient(315deg, #144ee30a 35%, #763cac2e 100%);
            }
        }

        @media print {
            .bgAll{
                display: none !important;
            }

            .CV{
                display: flex;
                flex-direction: column;
                align-items: center;
                
                .cardProfile {
                    width: 100%;
                    height: auto;
                    padding: 2rem;
                    border-radius: 14px;
                    font-size: 1rem;
                    background: ${isDark ? "#262639e0" : "#EAEAEEe0"};
                    -webkit-backdrop-filter: blur(5px);
                    backdrop-filter: blur(5px);
                    background-image: linear-gradient(315deg, #144ee30a 35%, #763cac2e 100%);
                }
            }
        }

    `
}