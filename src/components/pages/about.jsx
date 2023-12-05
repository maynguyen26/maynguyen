import React from 'react';
import styled from 'styled-components';
import { Row, Col, } from "reactstrap";
import { HeightDiv, PageDiv, Colors } from "../styling/common-elements";
import { Entries } from "../../assets/project-entries";

const About = ( ) => {

    return (
        <>
        <HeightDiv>
            <PageDiv style={{justifyContent: "center"}}>
                <Row style={{width: "80%"}}>
                    <Col style={{display: "flex", flexDirection: "column", alignItems: "center", width: "50%"}}>
                        <p style={{color: Colors.primaryAccentLight, textAlign: "center", marginBottom: "20px"}}>
                            This page is still being constructed! Come back later :)
                        </p> 
                        <p style={{color: Colors.primaryAccent, textAlign: "center", fontSize: "14px", marginBottom: "0px"}}>
                            <b><ul style={{padding: "0px", marginBottom: "0px"}}>{Entries[0].project}</ul></b>
                        </p>
                        <p style={{color: Colors.primaryAccent, textAlign: "center", fontSize: "14px", marginBottom: "25px"}}>
                            <i>{Entries[0].date}</i>
                        </p>
                        <p style={{color: Colors.primaryAccent, textAlign: "center", fontSize: "14px"}}>
                            {Entries[0].description}
                        </p>
                    </Col>
                </Row>
            </PageDiv>
        </HeightDiv>
        </>

    )
}

export default About;