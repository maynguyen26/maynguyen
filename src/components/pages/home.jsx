import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import { Colors } from '../styling/common-elements';
import Icon from '../../assets/Icon.png';
import Resume from '../../assets/MayNguyenResume.pdf'

const Home = () => { 

    return (
        <>
        <HeightDiv>
            <PageDiv>
                <CenterRow>
                    <Col lg="12">
                        <Title>
                            I'm May Nguyen
                        </Title>
                    </Col>
                    <Col lg="12">
                        <Subtitle>
                            University of Guelph Computer Science Student, and Aspiring Software Developer. 
                        </Subtitle>
                    </Col>
                    <Col lg="12">
                       <Row>
                           <PrimaryButton>
                                <ButtonP style={{color: "white"}} onClick={() => { window.open(Resume, '_blank')}}>
                                    Resume
                                </ButtonP>
                           </PrimaryButton>
                           <PrimaryButton>
                                <ButtonP style={{color: "white"}} onClick={() => { window.open("", '_blank')}}>
                                    GitHub
                                </ButtonP>
                           </PrimaryButton>
                           <PrimaryButton>
                                <ButtonP style={{color: "white"}} onClick={() => { window.open("https://www.linkedin.com/in/mnguye/", '_blank')}}>
                                    Linkedin
                                </ButtonP>
                           </PrimaryButton>
                       </Row>
                    </Col>
                </CenterRow>
                <CenterRow style={{width: "50%"}}>
                    <img src={Icon}/>
                </CenterRow>
            </PageDiv>
        </HeightDiv>
        </>
    )
}

export default Home;

const HeightDiv = styled.div`
    min-height: 100vh;
    height: auto;
    display: flex;
`
const PageDiv = styled.div`
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    padding: 130px 90px 45px 90px;
    display: flex;
    height: 100vh;
    min-height: 100% !important;
    width: 100%;
`

const CenterCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterRow = styled(Row)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 85px;
`

const Title = styled.h1`
    font-weight: normal;
    font-size: 48px;
    font-family: Arbutus Slab;
    color: ${Colors.primaryFont};
    margin-bottom: 30px;
`

const Subtitle = styled.p`
    font-weight: normal;
    font-size: 20px;
    font-family: "Arbutus Slab";
    color: ${Colors.primaryFont};
    margin-bottom: 30px;
`

const ButtonP = styled.p`
    font-weight: bold;
    font-size: 16px;
    font-family: ArbutusSlab;
    color: ${Colors.primaryFont};
    margin: 5px;
`

const PrimaryButton = styled(Button)`
    background-color: ${Colors.primaryAccent};
    border: none;
    border-radius: 50px;
    display: inline;
    max-width: 120px;
    margin: 15px 15px 15px 0px;
`