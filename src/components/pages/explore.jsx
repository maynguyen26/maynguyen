import React from 'react';
import styled from 'styled-components';
import { Colors } from '../styling/common-elements';
import { Col, Row } from 'reactstrap';
import AboutImage from '../../assets/about-image.JPG';
import Resume from '../../assets/MayNguyenResumeF23.pdf';

const Explore = () => {

    return (
        <PageDiv>
            <TableRow>
                <LeftCol lg="12">
                    <FeatureImg src={AboutImage}/>
                </LeftCol>
                <FloatBox> 
                    <ContentBox>
                        <Title>
                            Take a look
                        </Title>
                        <AccentTitle>
                            Learn more about me below
                        </AccentTitle>
                        <ButtonRow>
                            <StyledLink href={Resume} target="_blank">
                                Resume
                            </StyledLink>
                            <StyledLink href="https://github.com/maynguyen26/" target="_blank">
                                Github
                            </StyledLink>
                            <StyledLink href="https://www.linkedin.com/in/mnguye/" target="_blank">
                                LinkedIn
                            </StyledLink>
                        </ButtonRow>
                    </ContentBox>
                    <CreditsRow>
                        <CenterCol>
                            <StyledP>
                                Wesbite made by May Nguyen - very amateur web developer
                            </StyledP>
                            <StyledP>
                                If you have any tips on how to make my website better, let me know!
                            </StyledP>
                        </CenterCol>
                    </CreditsRow>
                </FloatBox>
                <RightCol lg="12">
                        <Subtitle>
                            Explore
                        </Subtitle>
                </RightCol>
            </TableRow>
        </PageDiv>
    )
}

export default Explore;

const StyledP = styled.p`
    text-align: right;
    color: ${Colors.primaryAccent};
    font-size: 10px;
    margin-bottom: 0px;
`

const CenterCol = styled(Col)`

    display: inline-block;
    justify-content: right;
`

const ButtonRow = styled(Row)`
    display: inline-block;
    margin-top: 20%;
`
const CreditsRow = styled(Row)`
    display: flex;
    text-align: right;
    justify-content: right;
    margin-top: 10px;
`
const StyledLink = styled.a`
    font-size: 14px;
    color: ${Colors.primaryAccent};
    letter-spacing: 0.1em;
`

const PageDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    display: flex;
`
const TableRow = styled(Row)`
    display: flex;
    height:100%;
    width: 100%;
`
const Subtitle = styled.p`
    font-size: 16px;
    font-family: Helvetica;
    font-weight: normal;
    color: ${Colors.primaryAccent};
    margin-bottom: 0.2em;
    letter-spacing: 0.2em;
`
const Title = styled.p`
    font-size: 28px;
    font-family: Helvetica;
    font-weight: lighter;
    color: ${Colors.primaryAccent};
    margin-bottom: 0.2em;
    letter-spacing: 0.2em;
`
const AccentTitle = styled.p`
    font-size: 18px;
    font-family: Helvetica;
    font-weight: lighter;
    color: ${Colors.primaryAccentLight};
    margin-bottom: 0.2em;
    letter-spacing: 0.2em;
`

const LeftCol = styled(Col)`
    width: 60%;
    height: 100%;
    padding-top: 80px;
    background-color: ${Colors.primaryGrey};
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightCol = styled(Col)`
    width: 40%;
    height: 100%;
    margin: 0px;
    padding: 120px 40px;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: top;
`

const FeatureImg = styled.img`
    height: 80%;
    object-fit: cover;
    max-width: 100%;
    box-shadow: 0px 0px 0px 0px #888888;

`
const FloatBox = styled.div`
    height: 50%;
    width: 40%;
    display: inline-block;
    position: absolute;
    margin-left: calc(60% - 80px);
    margin-top: calc(5% + 120px);
    float: center;
`
const ContentBox = styled.div`
    padding: 40px 40px 40px 100px;
    height: 80%;
    width: 100%;
    background-color: ${Colors.primaryLight};
`