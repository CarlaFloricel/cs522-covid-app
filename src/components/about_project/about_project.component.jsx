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
import { propTypes } from 'react-bootstrap/esm/Image';

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
                        <Col md={8} className="subcomponent">
                            <p>In order to make our project useful, we needed to understand what people think and know about this pandemic.We conducted 6 interviews with different potential users consisting of 3 stages: </p>
                            <li> First, 3 hypothetical scenarios which were presented to users who were asked to describe how they would behave in those situations.</li>
                            <li>Then, we asked the users to explore 2-3 existing interfaces related to the pandemic and complete certain tasks using a think-aloud method.</li>
                            <li>Finally, we included a few open-ended questions to get further insight into their opinions</li>
                            <li> Our findings were then compiled into the following design requirements</li>
                        </Col>
                        <Col md={4} className="subcomponent">
                            <img src={reqImg} alt="Logo" />
                        </Col>
                        <Col md={12} className={"subcomponent"} style={{marginTop: "-3em"}}>
                            <h6>Functional Requirements</h6>
                            <ul>
                                <li>Show the state of the pandemic in different parts of the us</li>
                                <li>Show what areas enforce quarantine safety measures such as travel restrictions or mask requirements</li>
                                <li>Show risk-reduction methods for cases where social distancing isn't possible</li>
                                <li>Help decide if it is safe to attend events/social gatherings</li>
                                <li>Explain when a vaccine may be avaliable to different populations</li>
                                <li>Explain how different vaccines are made and if they'll be safe</li>
                                <li>Find other official resources about Coivd</li>
                                <li>Answer general concerns/questions about Covid-19</li>
                                <li>Share information with peers</li>
                            </ul>
                            <h6>Nonfunctional and Usability Requirements</h6>
                            <ul>
                                <li>Interface should be accessible at all times</li>
                                <li>Load times under 2 seconds</li>
                                <li>Only use publically avaliable data</li>
                                <li>Make any data visualizations friendly for layment with minimal use of legends</li>
                                <li>Limit use of panning/zooming when showing a map</li>
                                <li>Make interactions usable from a labtop with a mouse or trackpad</li>
                                <li>Use simple, memorable, color-blind friendly colors</li>
                                <li>Use a shallow navigation tree</li>
                                <li>Minimize scrolling needed to find information</li>
                                <li>Layout should be responsive for medium to large screens (e.g. laptops and desktops)</li>
                            </ul>
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
                        <Col md={6} sm={12} className="subcomponent second_sketches_row" >
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
                <p>
                    For Formative evaulation, we created our prototype in Adobe XD with basic example interactions.
                </p>
                    <Row>
                        <Col md={12} className="subcomponent">
                            <h4 className={"prtotypeDesign"}>Prototype Design</h4>
                        </Col>
                        <Col md={12} className="subcomponent">
                            <Row>
                                <Col md={12} >
                                    <img src={sk50} alt="sketch" className="sketches_prototype formative-image" width="400" height="200"/>
                                    <p className={"formative-para"}>
                                    The basic design is broken up into 4 parts that are broken up into “Exploring”,
                                     for open data visualization tasks, and “Learning”, for more question oriented tasks.
                                   The entry to the system is a single page that mirrors the navbar,
                                    largely for simplicity in creating the prototype flow.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <img src={sk51} alt="sketch" className="sketches_prototype formative-image" width="400" height="200"/>
                                    <p className={"formative-para"}>
                                    The “Safe Travel” page includes an example flow of a map with clickable 
                                    interaction for inputting a start/stop destination, adding a mask filter, 
                                    and examining more counties by clicking on the map, and adding a county to an 
                                    itinerary via a “add stop” button near details about a county.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <img src={sk52} alt="sketch" className="sketches_prototype formative-image" width="400" height="200"/>
                                    <p className={"formative-para"}>
                                    The “Race for a vaccine” or “Vaccine” tab has a timeline showing the size and start date 
                                    of all final stage (stage 3 or 2-3 combined) clinical trials, 
                                    color coded by vaccine type.  Clicking on a bar will bring up additional details
                                     of the vaccine.  The interaction was limited to “Moderna” and “Not Moderna”, 
                                     rather than all possible vaccines
                                    </p>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <img src={sk53} alt="sketch" className="sketches_prototype formative-image" width="400" height="200"/>
                                    <p className={"formative-para"}>
                                    The “Staying Safe” tab has a heatmap of activities and risks associated with each one,
                                     based on social distancing.  Two buttons toggles the map between “daily” and “social”
                                      activities.
                                    </p>
                                </Col>
                              
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <img src={sk54} alt="sketch" className="sketches_prototype formative-image" width="400" height="200"/>
                                    <p className={"formative-para"}>
                                    The FAQ tab has a list of questions and (fake) links to additional resources.
                                     Clicking on the box around the question will bring up the answer, 
                                     in line with the “drawer” design pattern.
                                    </p>
                                </Col>
                               
                            </Row>
                        </Col>
                        <Col md={12} className="subcomponent">
                            <Row>
                                <Col md={12}>
                                <h4 className={"prtotypeDesign"}>Cognitive Walkthrough</h4>
                                <p>For our cognitive walkthrough, 2 subjects were given 4 tasks based on each component of our system. 
                                    These tasks were broken down into multiple sub tasks, based around answering certain questions related to each component, 
                                    which were presented to the user in the order listed once the previous tasks were completed.</p>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <h5 className={"prtotypeDesign"}>Task 1</h5>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Scenario</h6>
                                            <p>You live in Cook County and you want to travel to a conference in Eat County. You want to have a safe journey to your destination, 
                                                so you are checking what areas are safe for traveling in order to plan your trip. 
                                                Find two places to stop that have a mask mandate and add the safer option to your travel plan.</p>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Ideal Steps</h6>
                                            <ul>
                                                <li>Select the “Safe Travel” tab.</li>
                                                <li>“Fill out” the start location and destination field (skipped during the evaluation) and click on the “find stops” button.</li>
                                                <li>Click on the “mask mandates” filter.  Skipping this step increases the number of counties shown before a good candidate is given.</li>
                                                <li>Click on part of the map to bring up details on a county.</li>
                                                <li>Click on the map again to bring up a comparison county</li>
                                                <li>Click on “add stop” under Saucier County (which has fewer covid cases and more safety requirements).</li>
                                            </ul>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Feedbacks</h6>
                                            <ul>
                                                <li>Add More filters</li>
                                                <li>Use Different filter names</li>
                                                <li>Make the screen updates more obvious (e.g. when only the filtered counties are shown, when the selected counties are shown down the screen, when a stop is added in the itinerary list)</li>
                                                <li>Create legends visible at all times</li>
                                                <li>Make it more obvious that the map is clickable</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <h5 className={"prtotypeDesign"}>Task 2</h5>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Scenario</h6>
                                            <p>
                                            It’s been a long time since the pandemic started and everyone thinks the only way for this to be over is to get a vaccine. 
                                            You are interested to see what vaccines are in trial at the moment and when they are going to be ready for public use.
                                             Use the interface to answer the following questions:
                                             <ul>
                                                 <li>What is the most popular type of vaccine in development?</li>
                                                 <li>When is the stage 3 trial of the Moderna vaccine expected to be completed?</li>
                                                 <li>How does the Moderna vaccine work?</li>
                                             </ul>
                                            </p>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Ideal Steps</h6>
                                            <ul>
                                                <li>Select the “Vaccines” or “Race for A Vaccine” Tab</li>
                                                <li>Looking at the graph, the user should be able to see that “Genetic” is the most common type of vaccine, as well as the type used by the largest trial (moderna).</li>
                                                <li>Click on the bar labeled “Moderna” in the tab.  The projection completion date is shown in the “Production Timeline” section.</li>
                                                <li>Detailed information on how the vaccine works is listed under the “Genetic” header in the top right box.</li>
                                            </ul>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Feedbacks</h6>
                                            <ul>
                                                <li>Make it more obvious the barchart is clickable.</li>
                                                <li>Add title to x axis</li>
                                                <li>Think of a different data distribution (especially for the x axis)</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <h5 className={"prtotypeDesign"}>Task 3</h5>                                        
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Scenario</h6>
                                            <p>
                                                Even if it's better to take all the precautions, you need to complete some daily activities regularly. 
                                                But you need to know what actions are safe and which ones are risky.  Use the interface to answer the following questions:
                                            <ul>
                                                <li>What would be a very risky daily activity?</li>
                                                <li>What is the lowest risk social activity if you’re in a group where social distancing isn’t possible?</li>
                                                <li>What can we do to be safer if we want to participate in a protest?</li>
                                            </ul>
                                            </p>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Ideal Steps</h6>
                                            <ul>
                                                <li>Click on the “Staying Safe” tab. From the table, “Exercise” and “Attend School” are visible as the highest risk daily activities</li>
                                                <li>Clicking on the “Social” Button will bring up a new heatmap. It should be evident that “Going to the Beach” is the lowest risk social activity when social distancing is impossible, with only “Moderate” risk.</li>
                                                <li>Since protests are in the “Social” tab, you can look at the area on the right of the heatmap to see that “Stay 6ft apart”, “Wear a mask”, and “Avoid sharing food” are ways to reduce risk while protesting.</li>
                                            </ul>
                                            
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Feedbacks</h6>
                                            <ul>
                                                <li>Add filters for listing activities</li>
                                                <li>Add more groups </li>
                                                <li>Rename the existing groups for better understnding</li>
                                            </ul>                                            
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <h5 className={"prtotypeDesign"}>Task 4</h5>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Scenario</h6>
                                            <p>You’ve recently heard some disturbing comments from your college friends about the pandemic and you sometimes disagree with their statements.
                                                For example, 2 days ago, your roommate suggested that the coronavirus is a hoax made up by the Chinese government.  
                                                Please see if you can use the website to answer the question: "Is the virus a Chinese hoax?"
                                            </p>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Ideal Steps</h6>
                                            <ul>
                                                <li>Click on the “FAQ” tab</li>
                                                <li>Click on “is the virus a Chinese hoax”.  Read the answer.</li>
                                            </ul>
                                        </Col>
                                        <Col md={12}>
                                            <h6 className={"prtotypeDesign"}>Feedbacks</h6>
                                            <ul>
                                                <li>Add resource links with the answers</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Row>
                                    <Col md={12}>
                                        <h5 className={"prtotypeDesign"}>Design Changes Made Based on the Feedbacks</h5>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <h6>Design challenge 1</h6>
                                            <p>For the interactive map, when a user will select their starting and destination city to plan for a trip, the result will be shown in the map by automatically zooming to relevant area. 
                                                No further interaction will be needed for the user, as participants complained that panning on maps would be difficult.
                                                The map will be color coded by the covid rates in different areas to give the user a general understanding of where covid cases are spiking across the country.
                                                Users will also be able filter areas depending on various safety measure such a mask mandates, as evaluators mentioned that they wanted to avoid areas where people don’t use masks.  
                                                Additionally, more detailed comparison between the cities will be provided to help plan trips. 
                                                Finally, users will be able to add the city to trip plan and export the trip details to share with their peers.
                                                </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <h6>Design challenge 2</h6>
                                            <p>For this particular part of the project, we plan to show, a timeline to inform people about the current state of vaccine development as well as future projected dates, 
                                                as people will want to know when a vaccine may be available.
                                                We will add addition details to help users address safety concerns by allowing them to be better informed about how each vaccine works.
                                                Addionally, timeline will be color-coded depending on the stages (i.e. trial, test, production) with a legend to understand the  meaning of the colors. 
                                                When users will hover on a timeline, the information of that timeline will be shown as an additional tooltip.
                                                </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <h6>Design challenge 3</h6>
                                            <p>In our design prototype, small lists of activities were shown.  However,based on the feedacks, we will add a wider range of activities
                                                All activities will be categorized into four general groups. Additionally, a simpler legend will be used to show the risk factor of each activity to minimize cognitive load.
                                                We will show the risk level when different situations of social distancing is available, to help people understand the benefit of using social distancing for risk reduction in different scenarios.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <h6>Design challenge 4</h6>
                                            <p>
                                                A search bar at top of the page will be added to allow user for easy navigation and search for their desired questions without scrolling through the page. 
                                                Addionally, we will include  reference links with each question, and additional external links to other resources.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

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
                    <Row>
                        <Col md={12} className={"subcomponent"}>
                            <h1>Conclusion and Future Work</h1>
                            <p> In conclusion, we designed and implemented an interface that we believe will help to persuade people to make safer decision during the pandemic. 
                                Our safe travel component will help the users to find a safe stop on a road trip.
                                Our activities component will assist them to complete different activities at a low risk.  
                                Our vaccines component will allow them to get insight about the vaccine development process. 
                                Finally, the FAQ component will guide them towards additional knowledge and official resources and data. 
                            </p>
                            <p>
                            Our future plan is to conduct a study to validate our interface and check whether or not it is able to create safety measures for the users.
                            
                            Additionally, we want to add more features such as:
                            <ul>
                                <li>County wise covid distribution.</li>
                                <li>Automatically suggest users the best route to choose for their trip.</li>
                                <li>Suggest activities based on the user’s surrounding environment.</li>
                                <li>Vaccine distribution plan across the US.</li>
                            </ul>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="container" >
                <h1>Contributions:</h1>
                    <Row>
                        <Col md={4} className="subcomponent profile_icons">
                            <div>
                                <img src={icon1} width="100" height="100"/>
                                <h6>Andrew Wentzel</h6>
                                <ul>
                                    <li>Participated in intial requirements gathering, design sketches, and formative evaluation</li>
                                    <li>Map Page</li>
                                    <li>External Links on FAQ page</li>
                                    <li>Edits to home page and nav bar</li>
                                    <li>Edited Final Writeup</li>
                                    <li>Initial draft of final presentation</li>
                                    <li>Recorded demo</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4} className="subcomponent profile_icons">
                            <div>
                                <img src={icon2} width="100" height="100"/>
                                <h6>Carla Floricel</h6>
                                <ul>
                                    <li>Participated in intial requirements gathering, design sketches, and formative evaluation</li>
                                    <li>Website skeleton</li>
                                    <li>Initial design of the homepage and nav bar</li>
                                    <li>Faq questions and search feature</li>
                                    <li>Made nav-bar responsive for mobile applications</li>
                                    <li>Initial draft of final writeup</li>
                                    <li>Recorded final presentation</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4} className="subcomponent profile_icons">
                            <div>
                                <img src={icon3} width="100" height="100"/>
                                <h6>Md Nafiul Nipu</h6>
                                <ul>
                                    <li>Participated in intial requirements gathering, design sketches, and formative evaluation</li>
                                    <li>Vaccines Page</li>
                                    <li>Formative Evalutation, Conclusion and Future Work sections of writeup</li>
                                    <li>Edited final writeup</li>
                                    <li>Script for final presentation</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutProject