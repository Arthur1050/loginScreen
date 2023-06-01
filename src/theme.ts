import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const theme: ThemeConfig = extendTheme({
    colors: {
        primary: "#242424",
    },
    styles: {
        global: {
            bg: "gray.900",
            color: "white"
        }
    }
})

export default theme