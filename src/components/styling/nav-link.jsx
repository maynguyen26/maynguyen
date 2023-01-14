import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../styling/common-elements';

const NavLink = ({item, linkActive}) => {

    useEffect (( ) => {
        console.log(linkActive);
    })

    return (
        <>
            <StyledDiv onClick={() => window.location = item.path}
                        >
                <NavTitle active={linkActive}>
                    {item.title}
                </NavTitle>

            </StyledDiv>
        </>

    )

}

export default NavLink;

const StyledDiv = styled.div`
    padding: 0px 15px;
    &: hover {
        cursor: pointer;
    }
    position: relative;
   
`

const NavTitle = styled.p`
    color: ${Colors.primaryAccent};
    margin: 10px 0px;
    &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${Colors.primaryAccent};
        transform: scaleX(${props => props.active ? "0.75": "0"});
        transition: transform 0.5s ease;
    }
    &:hover::before {
        transform: scaleX(0.75);
    }
    font-family: Montserrat;
    font-weight: bold;
    
`