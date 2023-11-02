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
                <Row style={{width: "60%"}}>
                    <Col style={{display: "flex", flexDirection: "column", alignItems: "center", width: "50%"}}>
                        <h3 style={{color: Colors.primaryAccent, fontWeight: "normal", letterSpacing: "0.2em"}}>
                            Overview 
                        </h3> 
                        
                        <p style={{color: Colors.primaryAccent}}>
                            Starting in May of 2023, I had my very first co-op work term with a company called Deleptual. 
                            Being apart of a small team at Deleptual as a Junior Programmer gave me the opportunity to learn 
                            in-depth about the process of completing a software project from start to finish. 
                            My role on the small team at Deleptual allowed me to really hone my skills for independent learning 
                            and front-end development. 
                        <br/>
                        <br/>
                            In this report, I will further detail my experience at Deleptual, including employer information, my position,
                             and finally reflect on my learning goals for the term.

                        </p>
                        <br/>
                        <h3 style={{color: Colors.primaryAccent, fontWeight: "normal", letterSpacing: "0.2em"}}>
                            Company
                        </h3>
                        
                        <p style={{color: Colors.primaryAccent}}>
                            Deleptual is a software consulting company based in Toronto, specializing in making virtual escape puzzle games. Founded in 2020 by Eric Blanchard,
                             Deleptual thrives in the era of virtual connection. 
                        </p>
                        <img src={Deleptual} width="25%"/>
                        <br/>
                        <h3 style={{color: Colors.primaryAccent, fontWeight: "normal", letterSpacing: "0.2em"}}>
                            Job Description
                        </h3>
                        <p style={{color: Colors.primaryAccent}}>
                            At Deleptual, I worked as a Junior Programmer. Since I wanted to focus on learning React and I had an aptitude for web design, my role quickly 
                            became the web-application developer on our small team. Prior to this, I had very little experience in Javascript or any other frameworks, so I 
                            had to start with tutorials and very small tasks. 
                        </p>
                        <br/>
                        <h3 style={{color: Colors.primaryAccent, fontWeight: "normal", letterSpacing: "0.2em"}}>
                            Goals
                        </h3>
                        <p style={{color: Colors.primaryAccent}}>
                            As my first work term, I found it most important for me to work hard to improve my technological literacy. 
                            With so much to learn, I found it very easy to develop my goals revolving my work tasks. I had three main learning goals for my work term. 

                            <br/>
                            <br/>
                            Most importantly, I wanted to learn about web application development using React, which helped me build valuable skills related to the programming field. 
                            As the second most popular framework of 2022, I was excited to learn React and develop very relevant skills for the modern programming landscape.
                             Even if my next work experience does not directly use React, I know I will greatly benefit from learning 
                            React during my work term - due to the independent learning skills I developed, as well as practice of core programming concepts. 
                             In addition, I strived to 
                             develop effective oral and written communication skills throughout my co-op term through various mediums - such as through the appropriate work 
                             channel on Discord, pull requests, commit messages and verbally during team meetings. Overall, I wanted to have a better understanding of the 
                             game and web development industry as a whole.
                             <br/>
                             <br/>
                             Being a part of small team, I was really lucky to have a strong relationship with my supervisor, and it was clear my learning goals and needs were 
                             made a priority. During my work term, I am grateful to have had the opportunity to have mentored coding sessions and I was 
                             given a lot of support when I had questions. The support I had accelerated my ability to learn greatly, and I was able to be trusted with an independent 
                             React project towards the second half of my work term. 
                        </p>
                        <br/>
                        <h3 style={{color: Colors.primaryAccent, fontWeight: "normal", letterSpacing: "0.2em"}}>
                            Conclusion
                        </h3>
                        <p style={{color: Colors.primaryAccent}}>
                            I learned so much from my work term at Deleptual as a Junior Programmer and I had a great experience there. 
                            I am proud to have been a part of such a welcoming and amazing company! 
                        </p>
                        <br/>
                        <h3 style={{color: Colors.primaryAccent, fontWeight: "normal", letterSpacing: "0.2em"}}>
                            Acknowledgements
                        </h3>
                        <p style={{color: Colors.primaryAccent}}>
                            Thank you to Eric for being a great mentor to me throughout my co-op. I always felt appreciated and recognized for my work,
                             and I am really grateful for how any preparation for my next co-op / role in a work place was always encouraged and supported! 
                        </p>
                        <br/>
                        <br/>
                        <br/>

                    </Col>
                </Row>
            </PageDiv>
        </HeightDiv>
        </>

    )
}

export default Experience;