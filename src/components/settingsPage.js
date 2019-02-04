import React, { Component } from 'react';
import EachGroup from './eachGroup.js'


class settingsPage extends Component {

state={
  groupData: []
}

componentDidMount(){
  this.group()
}

group = ()=>{
  fetch('http://localhost:3000/api/v1/groups')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      groupData: data
    })
  })
}


render (){
  return (<div> {this.state.groupData.map(g => <EachGroup groupData={g} key={g.id}/>)}</div>)
    // <EachGroup/>

}

}

export default settingsPage
