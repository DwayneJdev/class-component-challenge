import React, { Component } from 'react';
import CatList from './CatList';
 
export default class CatIndex extends Component {
 constructor(props){
   super(props)
  this.state = {
    breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }

  // const cats = breeds.map((breeds) => {breeds})


  
  
 }

//  breeds() {
//    this.setState(
//      {breeds: this.state.breeds}
//    )
//  }
  render() {
   return (
     <div>
      <CatList breeds={this.state.breeds} />
     </div>
   );
   
   }
}


