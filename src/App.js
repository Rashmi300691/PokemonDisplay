import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Pokemon from './Pokemon';
import Prev from './PreviousButton';
import Next from './NextButton';
import title from './pokemontitle.PNG';



class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      id: [],
      value: "",
      name: [],
      picFront:[],
      index:1,
      disabledNext: false,
      disabledPrev: true,
      count:0
    };

  }
  
  togglePrev(e) {
    let newindex = parseInt(this.state.index)- 3;
    let disabledPrev = (newindex === 1) || newindex <=0;
    this.setState({ index: newindex, disabledPrev: disabledPrev, disabledNext: false ,picFront:[],name:[],id:[]})
    this.loadpokemon(newindex);
  }

   toggleNext(e) {
     let newIndex = parseInt(this.state.index)+ 3;
     let disabledNext = newIndex === (this.state.count - 1) || newIndex >= this.state.count ;
     this.setState({ index: newIndex, disabledNext: disabledNext, disabledPrev: false ,picFront:[],name:[],id:[]})
     this.loadpokemon(newIndex);
    }

  componentDidMount() {
    this.loadpokemon(this.state.index);
  }

  loadpokemon=(startindex)=> {
    axios({
      url:"https://pokeapi.co/api/v2/pokemon/?limit=964",
      method: "GET",
      datatype: "json"
    }).then((response1) => {
    //  alert( response1.data.count);
      let pokemons=response1.data.results;
      this.setState({count:response1.data.count})
      for(let i =parseInt(startindex)-1 ; i <parseInt(startindex)+2 &&  i < this.state.count; i++)
      {
        let urlpokemon= pokemons[i].url;
       
          axios({
          url:urlpokemon,
          method: "GET",
          datatype: "json"
        }).then((response) => {
            this.setState({
            id:[...this.state.id,urlpokemon.split('/')[urlpokemon.split('/').length-2]],
            name: [...this.state.name,response.data.name],
            picFront:[...this.state.picFront, response.data.sprites.front_default],
             });
        });
      }

    });
   // this.setState({index:parseInt(this.state.index)+3});

  }

  render() {

    return (
      <div >
          <div className="App">
          <h1 > <img src={title}/> </h1>
      </div >
      <div  className="Appmain" >
         <Pokemon  image={this.state.picFront[0]} id={this.state.id[0]} pokename={ this.state.name[0]} />
         <Pokemon image={this.state.picFront[1]} id={this.state.id[1]} pokename={ this.state.name[1]} />
         <Pokemon image={this.state.picFront[2]} id={this.state.id[2]} pokename={ this.state.name[2]} />
         </div>
     <div  className="Appmain" >
        <Prev toggle={(e) => this.togglePrev(e)} active={this.state.disabledPrev}></Prev>
 
        <Next  toggle={(e) => this.toggleNext(e)} active={this.state.disabledNext}></Next>
        </div>
    </div>

    );
  }
};


export default App;