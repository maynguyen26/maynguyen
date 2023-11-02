import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Colors, NavItems } from './styling/common-elements';
import { Col, Row } from 'reactstrap';
import Icon from "../assets/Icon.png";
import NavLink from './styling/nav-link';

const Header = (props) => {

    const getNavLink = (item, i) =>  {

        let active = false;
        if (window.location.pathname === item.path) {
            active = true;
        }
        return (
            <NavLink item={item} linkActive={active} key={i} />
        )
    }
    
    return (
            <Navbar>
                <IconCol lg="auto" md="auto" sm="auto">
                    <NavLink item={
                        {   path: "/",
                            title: "MAY NGUYEN",
                        }}
                        style={
                            {
                                letterSpacing: "0.5em",
                            }}
                        />
                </IconCol>
                <NavRow>
                    
                    <CenterCol>
                        {NavItems && Object.values(NavItems).map((item, i) => {
                            return (
                                getNavLink(item, i)
                            )
                        })}
                    </CenterCol>
                </NavRow>
            </Navbar>
    )
}

export default Header;

const IconDiv = () => {
    return (
        <IconImage src={Icon} onClick={() => window.location = "/"}/>
    )
}

const NavRow = styled(Row)`
    align-items: center;
    width: 100%;
    margin-right: 0px;
`

const IconImage = styled.img`
    width: 40px;
    height: 40px;
    align-self: center;
    margin-right: 0px;
    &: hover{
        cursor: pointer;
    }
`

const Navbar = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: ${Colors.primaryLight};
    padding: 15px 30px;
    text-align: right;
    align-items: center;
    justify-content: right;
    -webkit-box-shadow: 0px 5px 5px -6px rgba(98,50,50,0.3); 
    box-shadow: 0px 5px 5px -6px rgba(98,50,50,0.3);
`

const CenterCol = styled(Col)`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 0px 15px;
    align-self: center;
`
const IconCol = styled(Col)`
    justify-content: left;
    align-items: left;
    padding: 0px 15px;
    align-self: left;
    margin-left: 0px;
`