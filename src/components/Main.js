import React, { Component } from 'react'
import { Films } from '../information/FilmsList';
import FilmsPresentation from './FilmsPresentation';
import {useState} from 'react'
export class Main extends Component {
    constructor(){
        super();
        this.state ={
            films: Films
        };
    }
  render() {
    return <FilmsPresentation films={this.state.films}/>
  }
}
export default Main