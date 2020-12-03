import React from 'react';
import ReactPlayer from "react-player";
import './about_project.styles.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projImg from './covid_project.JPG'
import reqImg from './interview.jpg'
import sk11 from './sketches/11.JPG'
import sk12 from './sketches/12.JPG'
import sk13 from './sketches/13.JPG'
import sk21 from './sketches/21.JPG'
import sk22 from './sketches/22.JPG'
import sk23 from './sketches/23.JPG'
import sk31 from './sketches/31.JPG'
import sk32 from './sketches/32.JPG'
import sk33 from './sketches/33.JPG'
import sk41 from './sketches/41.JPG'
import sk42 from './sketches/42.JPG'
import sk43 from './sketches/43.JPG'
import sk50 from './sketches/50.JPG'
import sk51 from './sketches/51.JPG'
import sk52 from './sketches/52.JPG'
import sk53 from './sketches/53.JPG'
import sk54 from './sketches/54.JPG'
import icon1 from './icon1.png'
import icon2 from './icon5.png'
import icon3 from './icon4.png'

class AboutProject extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }


    render(){
        return(
            <div>
                <Container className="container">
                <h1>Our Goal</h1>
                    <Row>
                        <Col md={6} className="subcomponent">
                        <img src={projImg} alt="Logo" width="500" height="250"/>
                        </Col>
                        <Col md={6} className="subcomponent">
                        <p>The COVID-19 pandemic is having a profound impact on everybody’s lives. When we started this project, covid cases were decreasing, but now we are experiencing a second wave with thousands of new infections every day.</p>
                        <p>According to the World Health Organization, a large cohort of people who are in the 20’s and 30’s are the main group of spreaders. We built an interface to persuade this cohort of people by providing the resources to help make informed and safe choices regarding COVID.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="container" style={{backgroundColor:"#f0f8ff"}}>
                <h1>Requirements Gathering</h1>
                    <Row>
                        <Col md={6} className="subcomponent">
                            <p>In order to make our project useful, we needed to understand what people think and know about this pandemic.We conducted 6 interviews with different potential users consisting of 3 stages: </p>
                            <p> - First, 3 hypothetical scenarios which were presented to users who were asked to describe how they would behave in those situations.</p>
                            <p> - Then, we asked the users to explore 2-3 existing interfaces related to the pandemic and complete certain tasks using a think-aloud method. </p>
                            <p> - Finally, we included a few open-ended questions to get further insight into their opinions</p>
                            <p> Our findings were then compiled into the following design requirements</p>
                        </Col>
                        <Col md={6} className="subcomponent">
                            <img src={reqImg} alt="Logo" />
                        </Col>
                    </Row>
                </Container>

                <Container className="container">
                <h1>Design Sketches</h1>
                    <Row>
                        
                            <h5>Based on our user requirements, we identified 4 design challenges that we based our project on</h5>
                      
                    </Row>
                    <Row>
                        
                        <Col md={6} className="subcomponent" >
                        <h4>Where?</h4>
                        <p>
                            We found that people felt that there may be situations where traveling was necessary, such as for work trips. People were interested in both determining the risk of going to a certain area, as well as figuring out what areas are safest to stop at when traveling.
                            We distilled this requirement into our first design challenged: 
                        </p>
                        <h6>Find a safe travel route between areas that considers travel restrictions and find out how safe a certain area is.</h6>
                        <img src={sk11} alt="sketch"  className="sketches"/>
                        <img src={sk12} alt="sketch" className="sketches" />
                        <img src={sk13} alt="sketch" className="sketches"/>
                        </Col>
                        <Col md={6} className="subcomponent">
                        <h4>What?</h4>
                        <p>
                            While people had different amount of risk-aversion, some people expressed a need to break quarantine for activities deemed as necessary, such as attending religious services or seeing
                            family over the holidays.  However, people had a poor idea of the relative risks of these activities.  In order to mitigate harm, we decided that our interface should focus on conveying risks and showing safe alternatives when acceptable.  We distilled this into our second design challenge:
                        </p>
                        <h6>See how safe certain activities are such as: eating out, sending children to school, hosting a private party, and the most effective risk reduction strategies.</h6>
                        <img src={sk21} alt="sketch" className="sketches"/>
                        <img src={sk22} alt="sketch" className="sketches" />
                        <img src={sk23} alt="sketch" className="sketches" />
                        </Col>
                        <Col md={6} className="subcomponent second_sketches_row" >
                        <h4>When?</h4>
                        <p>
                            Many interviewees expressed interest in knowing when vaccines are going to be avaliable, as well as additional information such as the safety of these vaccines and how they work.  We distilled these questions into our third design challenge:
                        </p>
                        <h6>Learn about the current state of vaccine development as well as when one might be available and how safe it is.</h6>
                        <img src={sk31} alt="sketch"  className="sketches"/>
                        <img src={sk32} alt="sketch" className="sketches" />
                        <img src={sk33} alt="sketch" className="sketches"/>
                        </Col>
                        <Col md={6} className="subcomponent second_sketches_row" >
                        <h4>How?</h4>
                        <p>
                            Outside of specific questions, there were a number of general safety questions.  People also mentioned that they wanted the links to the sources of our data to help ensure trust in our system.  We summarized these into our fourth design goal: 
                        </p>
                        <h6>Find resources to learn about commonly asked questions.</h6>
                        <img src={sk41} alt="sketch" className="sketches"/>
                        <img src={sk42} alt="sketch" className="sketches" />
                        <img src={sk43} alt="sketch" className="sketches" />
                        </Col>
                    </Row>
                </Container>

                <Container className="container" style={{backgroundColor:"#f0f8ff"}}>
                <h1>Formative Evaluation</h1>
                    <Row>
                        <Col md={6} className="subcomponent">
                        <img src={sk50} alt="sketch" className="sketches_prototype" width="400" height="200"/>
                        <img src={sk51} alt="sketch" className="sketches_prototype" width="400" height="200"/>
                        <img src={sk52} alt="sketch" className="sketches_prototype" width="400" height="200"/>
                        <img src={sk53} alt="sketch" className="sketches_prototype" width="400" height="200"/>
                        <img src={sk54} alt="sketch" className="sketches_prototype" width="400" height="200"/>
                        </Col>
                        <Col md={6} className="subcomponent">

                        </Col>
                    </Row>
                </Container>
                <Container className="container" >
                <h1>Presentation Video</h1>
                    <Row>
                        <Col md={8} className="subcomponent">
                        <ReactPlayer className="video_component"
                            url="https://www.youtube.com/watch?v=tNnQfgRUM-c&feature=emb_logo"/>
                        </Col>
                    </Row>
                </Container>
                <Container className="container" style={{backgroundColor:"#f0f8ff"}}>
                <h1>Future Work</h1>
                    <Row>
                        <p> Something</p>
                    </Row>
                </Container>
                <Container className="container" >
                <h1>Contributors:</h1>
                    <Row>
                        <Col md={12} className="subcomponent profile_icons">
                            <div>
                                <h6>Andrew Wendtzel</h6>
                                <img src={icon1} width="100" height="100"/>
                            </div>
                            <div>
                                <h6>Carla Floricel</h6>
                                <img src={icon2} width="100" height="100"/>
                            </div>
                            <div>
                                <h6>Md Nafiul Nipu</h6>
                                <img src={icon3} width="100" height="100"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutProject