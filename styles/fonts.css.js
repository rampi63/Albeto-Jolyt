import { css } from "@emotion/css";
import bg from "../assets/imgNext/Background.png"

export const FontStyle = (isDark=true) => {

    let fontFamily = "font-family: 'Montserrat', sans-serif;"
    let fontGeneralColor = isDark? "color: #FFFFFF !important;" : "color: #000000 !important;"
    let bgColor = isDark? "#1E1C29;" : "#EAEAEE;"
    let banner = isDark? "linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(30, 28, 41)), url(Background.png);" : "linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(234, 234, 238)), url(Background.png);"

    return css`

        ${fontFamily}
        ${fontGeneralColor}

        transition: all 0.4s ease;

        .bgAll{
            background-color: ${bgColor}
            transition: unset !important;
            padding-bottom: 10rem;
        }

        h1{
            font-size: 60px;
        }

        h2{
            font-size: 55px;
        }

        h3{
            font-size: 40px;
        }

        h6{
            font-size: 24px;
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
            font-size: 25px;
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
    `
}