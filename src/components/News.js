import React from 'react'
import { Container, Row, Col, Card, Icon, CardTitle, Carousel, Button, Tabs, Tab, Parallax } from 'react-materialize'
import { news } from '../information/MovieNews'
import { adwards } from '../information/AdwardNews'
export default function News() {
    return (
        <div className="new">

            <Tabs
                className="tab-demo z-depth-1"
                scope="tabs-22"
            >
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Daily News"
                >

                    <Container>
                        {news.map((anew) => (
                            <section>
                                <h3>{anew.title}</h3>
                                <p>{anew.time}</p>
                                <img src={anew.image} alt="nothing" />
                                <p>{anew.description}</p>
                            </section>

                        ))}

                    </Container>

                </Tab>
                <Tab
                    active
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Adwards"
                >
                    <div>
                    <div className="parallax"></div>
                    <Container >
                  
                        {adwards.map((adward) => (
                            <Row>
                                
                                <h4>{adward.title}</h4>
                                {adward.list.map((adw) =>(
                                    <div>
                                        <h5>{adw.heading}</h5>
                                        
                                    <p>{adw.winner}</p>
                                    {adw.nominees.map((nominee) =>(
                                        <p> &#x2022; {nominee}</p>
                                    ))}
                                    </div>
                                    
                                ))}
                             </Row>
                        ))}

                  
                    </Container>
                    </div>
                    
                    
                </Tab>
            </Tabs>
        </div>
    )
}
