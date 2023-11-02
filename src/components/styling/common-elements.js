import styled from 'styled-components';

export const Colors = {
    primaryAccent: "#574231",
    primaryAccentLight: "#b1947c",
    primaryFont: "#575757",
    primaryLightFont: "#F3EDE9",
    primaryLight: "#f0e8e3",
    primaryGrey: "#c7c7c7",
}

export const NavItems = {
    explore: {
        path: "/explore",
        title: "Explore",
    },
    about: {
        path: "/about",
        title: "About",
    },
    experience: {
        path: "/experience",
        title: "Experience",
    },
    connect: {
        path: "/connect",
        title: "Connect",
    },
}

export const HeightDiv = styled.div`
    min-height: 100vh;
    height: auto;
    display: flex;
`
export const PageDiv = styled.div`
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    padding: 130px 90px 45px 90px;
    display: flex;
    height: 100vh;
    min-height: 100% !important;
    width: 100%;
`