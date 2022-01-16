import React, {Component} from 'react';

export default class CornDogs extends Component {
     constructor(props) {
         super(props);
         this.state = {dog: {}, dogPic: ""}
     }
    //  componentDidMount() {
    //     this.randomImg()
    // }

     randomImg () {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {this.setState({dog: data, dogPic: data.message})})
     }

     componentDidMount() {
         this.randomImg()
     }



    render() {
    return(
        <div className='main Dogs'>
            <button onClick={() => this.randomImg()}>random pup</button>
            <br />
            
            <img src={this.state.dogPic} height={"400 px"} width={"400px"} alt="bark bark"></img>
        </div>
    );
    }
 }


