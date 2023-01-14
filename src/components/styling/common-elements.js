import styled from 'styled-components';

export const Colors = {
    primaryAccent: "#FF8181",
    primaryAccentLight: "#FAECEC",
    primaryFont: "#575757",
}

export const NavItems = {
    home: {
        path: "/",
        title: "Home",
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