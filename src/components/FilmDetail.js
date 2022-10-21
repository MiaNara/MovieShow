import React, { Component } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Films } from '../information/FilmsList'
import ModalCase from './ModalCase';
import { Container, Row, Col, Card, Icon, CardTitle, Carousel, Button } from 'react-materialize'
export default function FilmDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const filmName = useParams();
  const film = Films.find(obj => {
    return obj.id == filmName.id;
  })

  return (
    
    <Container  className="fullscreen">
      
      <div class="split-screen">

        <div class="split-screen__half">
          <div className="left">
            <img src={`../${film.image}`} />
          </div>
        </div>
        <div className="bg">
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
      <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
              <Icon>ondemand_video</Icon></a>
      </div>

        <div class="split-screen__half">
          <div className="right">
            <h5>{film.title}</h5>
            <p>{film.description}</p>
            <div className="photos">
            {film.photo.map((p) => (
              <img src={p}></img>
            ))}
            </div>
            
           
          </div>
        </div>
      </div>
     
    </Container>
  )
}