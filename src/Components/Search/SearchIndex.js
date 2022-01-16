 import React, {Component} from 'react';
import {Button, Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
   this.state = {
     searchTerm : "",
     filterArray: [],
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
   }

   search = (e) => {
     this.setState({searchTerm: e.target.value})
   }
 

  searchFunction =() => {
    const filterArray = this.state.things.filter(thing => thing.includes(this.state.searchTerm) )
    this.setState({filterArray})
 }

 render() {
   return (
     <div>
       <Input type="text" value={this.state.searchTerm} onChange={this.search} />
       <Button onClick={this.searchFunction}>search</Button>
<h3>Results:</h3>
       <div>
         {this.state.filterArray.map((thing, idx) => {
           return (<li key={idx}>{thing}</li>)
         })}
       </div>
       
     </div>
   )
 }
}