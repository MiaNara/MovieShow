import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Icon, CardTitle, Carousel, Button } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function FilmsPresentation({ films }) {
    const [film, setFilm] = useState([])
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Container className="container1">
            <Carousel
                carouselId="Carousel-34"
                // images={[
                //     films[0].image, films[1].image,
                //     'https://picsum.photos/200/300?image=1',
                //     'https://picsum.photos/200/300?image=2',
                //     'https://picsum.photos/200/300?image=3',
                //     'https://picsum.photos/200/300?image=4'
                // ]}
                options={{
                    dist: -100,
                    duration: 200,
                    fullWidth: false,
                    indicators: false,
                    noWrap: false,
                    numVisible: 5,
                    onCycleTo: null,
                    padding: 0,
                    shift: 0
                }}
            >{films.map((film) => (
                <Card   style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={film.image} reveal waves="light" />}
                    reveal={ 
                        <div className="reveal_show">
                            <p>{film.year}</p>
                            <p>{film.nation}</p>
                            <p>{film.description}</p>
                        </div>}
                    // revealIcon={<Icon>more_vert</Icon>}
                    title={film.title}
                >
                    <p>
                        <Button  className="btn-small" onClick={() => { setFilm(film) }} style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
                            <Link to={`detail/${film.id}`} style={{textDecoration: "none" }} >Detail</Link>
                        </Button>

                    </p>
                </Card>

            ))}
            </Carousel>
            <Row>
                {films.map((film) => (
                    <Col m={4} s={6} > 
                        <Card className="card_below" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={film.image} reveal waves="light" />}
                            reveal={
                                <div className="reveal_show">
                                    <p>{film.year}</p>
                                    <p>{film.nation}</p>
                                    <p>{film.description}</p>
                                </div>}
                            title={film.title}
                        >
                            <p>
                                <Button className="btn-small" onClick={() => { setFilm(film) }} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                                    <Link to={`detail/${film.id}`} style={{ textDecoration: "none" }}>Detail</Link>
                                </Button>

                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
