import React, { Component } from 'react';


export default class Catlist extends Component {

render() {
 return (
   <div>
     {this.props.breeds.Map(breeds => <li>{breeds}</li> )}
   </div>
 )
}
}
 

