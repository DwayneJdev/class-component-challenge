import React, { Component } from 'react';


export default class Catlist extends Component {

render() {
 return (
   <div>
     {this.props.breeds.Map(cat => <li>{cat}</li> )}
   </div>
 )
}
}
 

