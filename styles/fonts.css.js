import { css } from "@emotion/css";

export const FontStyle = (isDark=true) => {

    let fontFamily = "font-family: 'Montserrat', sans-serif;"
    let fontGeneralColor = isDark? "color: #FFFFFF;" : "color: #000000;"

    return css`

        ${fontFamily}
        ${fontGeneralColor}

        h2{
            font-size: 55px;
        }

        h6{
            font-size: 24px;
        }

        .sidebarMenu{
            font-size: 20px;
        }

        .sidebarMenuCV{
            font-size: 20px;
            color: #00BFFF !important;
        }

        .font-25{
            font-size: 25px;
        }
    `
}