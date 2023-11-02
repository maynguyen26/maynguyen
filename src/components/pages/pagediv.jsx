import React from 'react';
import styled from 'styled-components';

const PageDiv = ({children}) => {

  
    /*return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={500}>
            {state => (
                <StyledDiv image = {returnPhotoURL()} 
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    style = {{...defaultStyle,
                    ...transitionStyles[state]
                    }}
                >
                {children}
                
                </StyledDiv>
            )}
        </Transition>
    );*/

    return (
        <>
            <StyledDiv>
                {children}
            </StyledDiv>
        </>
    )

}

export default PageDiv;

const StyledDiv = styled.div`
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    display: flex;
    height: 100vh;
    min-height: 100% !important;
    width: 100%;
    z-index: 0;
    background: linear-gradient(90deg, 
            rgba(0,0,0, 0.3),
            rgba(0,0,0, 0.4) 10%, 
            rgba(0,0,0, 0.3) 40%,
            rgba(0,0,0, 0.05) 52%,
            rgba(0, 0, 0, 0.0) 60%);
    background-position: center top;
    background-size: cover;
`
