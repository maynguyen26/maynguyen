import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import { Colors } from '../styling/common-elements';
import PageDiv from './pagediv';
import Smile from '../../assets/background-images/smile-background.jpg';
import Ary from '../../assets/background-images/ary-background.jpg';
import Eek from '../../assets/background-images/eek-background.jpeg';
import Devon from '../../assets/background-images/devon-background.jpg';

const Home = () => { 
    const [photo, setPhoto] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            change();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [photo]);
  
    const change = () => {
        if (photo === 4) {
            setPhoto(1);
            return;
        }
        setPhoto((prev) => prev + 1);
    };
  
    const returnPhotoURL = () => {
        switch (photo) {
            case 1:
                return Smile;
            case 2:
                return Devon;
            case 3:
                return Eek;
            case 4: 
                return Ary;
            default:
                return Smile;
        }
    };

    return (
        <>
        <HeightDiv>
            <PageDiv>
                <CenterRow>
                    <Col lg="12">
                        <Title>
                            MAY
                        </Title>
                        <Title style={{marginBottom: "50px"}}>
                            NGUYEN
                        </Title>
                    </Col>
                    <Col lg="12">
                        <Subtitle>
                            University of Guelph, Computer Science Major
                        </Subtitle>
                        <Subtitle>
                            Gryphons Varsity Ultimate Captain
                        </Subtitle>
                        <Subtitle style={{marginBottom: "50px"}}>
                            Aspiring Software Developer
                        </Subtitle>
                    </Col>
                    <Col lg="12">
                       <Row>
                           <PrimaryButton onClick={() => { window.location="/explore"}}>
                                <ButtonP style={{color: "${Colors.primaryAccent}"}}>
                                    Explore
                                </ButtonP>
                           </PrimaryButton>
                       </Row>
                    </Col>
                </CenterRow>
            </PageDiv>
            <BackGroundImg image={returnPhotoURL()}/>
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
const CenterRow = styled(Row)`
    display: flex;
    flex-direction: column;
    padding: 130px 5% 0px 150px;
    margin: 0px 50% 0px auto;
    backdrop-filter: blur(6px);
    mask: linear-gradient(90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 99%
  );

`

const Title = styled.h1`
    font-weight: bold;
    font-size: 60px;
    font-family: Arimo;
    color: white;
    margin-bottom: 0px;
    letter-spacing: 0.4em;
`

const Subtitle = styled.p`
    font-size: 16px;
    font-family: Helvetica;
    font-weight: normal;
    color: ${Colors.primaryLightFont};
    margin-bottom: 0.2em;
    letter-spacing: 0.2em;
`

const ButtonP = styled.p`
    font-weight: lighter;
    font-size: 13px;
    font-family: Helvetica;
    color: ${Colors.primaryFont};
    margin: 5px;
`

const PrimaryButton = styled(Button)`
    background-color: ${Colors.primaryLightFont};
    border-style: solid;
    border-width: 2px;
    border-color: ${Colors.primaryLightFont};
    border-radius: 0px;
    display: inline;
    max-width: 160px;
    margin: 15px 15px 15px 15px;
    padding: 3px 25px;
    &:hover {
        background-color: transparent;
        border-style: solid;
        border-width: 2px;
        border-color: ${Colors.primaryLightFont};
    }
    &:hover ${ButtonP}{
        color: ${Colors.primaryLightFont};
    }
`
const breatheAnimation = keyframes`
    0% { -webkit-transform: scale(1); }
    50% { -webkit-transform: scale(1.02); 
    100% { -webkit-transform: scale(1); }
`
const BackGroundImg = styled.div`
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    position: absolute;
    display: flex;
    height: 100vh;
    min-height: 100% !important;
    width: 100%;
    z-index: -1;

    -webkit-transition: background 1s ease-in-out;
    transition: background 1s ease-in-out;
    background-image: url(${props=> props.image});
    background-color: ${Colors.primaryAccent};
    background-position: center top;
    background-size: cover;

    animation-name: ${breatheAnimation};
    animation-duration: 9s;
    animation-iteration-count: infinite;
`
