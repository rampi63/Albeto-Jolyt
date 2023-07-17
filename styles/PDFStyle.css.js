import { css } from "@emotion/css";
import bg from "../assets/imgNext/Background.png"

export const PDFStyle = (isDark = true) => {

    let fontFamily = "font-family: 'Montserrat', sans-serif !important;"
    let fontGeneralColor = isDark ? "color: #FFFFFF !important;" : "color: #000000 !important;"
    let bgColor = isDark ? "#1E1C29;" : "#EAEAEE;"

    return css`

        ${fontFamily}
        ${fontGeneralColor}

        transition: all 0.4s ease;

        .sidebarMenu{
            font-size: 20px;
            color: #FFFFFF !important;
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

        .font-25{
            font-size: calc(1.1rem + 0.4vw);
        }

        .font-18{
            font-size: 18px;
        }

    `
}