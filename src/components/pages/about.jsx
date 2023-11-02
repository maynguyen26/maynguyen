import React from 'react';
import styled from 'styled-components';
import { Row, Col, } from "reactstrap";
import { HeightDiv, PageDiv, Colors } from "../styling/common-elements";
import Deleptual from '../../assets/cropped-logo.png'

const Experience = ( ) => {

    return (
        <>
        <HeightDiv>
            <PageDiv style={{justifyContent: "center"}}>
                <Row style={{width: "80%"}}>
                    <Col style={{display: "flex", flexDirection: "column", alignItems: "center", width: "50%"}}>
                        <p style={{color: Colors.primaryAccentLight, textAlign: "center"}}>
                            This page is still being constructed! Come back on November 20th. :)
                        </p> 
                        

                    </Col>
                </Row>
            </PageDiv>
        </HeightDiv>
        </>

    )
}

export default Experience;