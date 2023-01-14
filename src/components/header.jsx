import React, { useEffect } from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import { Colors, NavItems } from './styling/common-elements';
import { Col, Row } from 'reactstrap';
import Icon from "../assets/Icon.png";
import NavLink from './styling/nav-link';

const Header = () => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Montserrat']
          }
        });
       }, []);

    const getNavLink = (item, i) =>  {

        let active = false;
        console.log(window.location.pathname);
        if (window.location.pathname === item.path) {
            console.log(window.location);
            active = true;
        }
        return (
            <NavLink item={item} linkActive={active} key={i} />
        )
    }

    return (
        <Navbar>
            <NavRow>
                <CenterCol lg="auto" md="auto" sm="auto">
                    <IconImage src={Icon} onClick={() => window.location = "/"}/>
                </CenterCol>
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

const NavRow = styled(Row)`
    display: flex;
    align-items: center;
`

const IconImage = styled.img`
    width: 70px;
    height: 70px;
    align-self: center;
    &: hover{
        cursor: pointer;
    }
`

const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: ${Colors.primaryAccentLight};
    padding: 15px 30px;
    display: flex;
    -webkit-box-shadow: 0px 5px 5px -6px rgba(98,50,50,0.3); 
    box-shadow: 0px 5px 5px -6px rgba(98,50,50,0.3);
`

const CenterCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
`