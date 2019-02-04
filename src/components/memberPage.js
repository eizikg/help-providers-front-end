import React, { Component } from 'react';
import EventTop from './eventTop.js'

class memberPage extends Component{

  state={
    eventData: []
  }

  event = () => {
    fetch('http://localhost:3000/api/v1/groups')
    .then(res => res.json())
    .then(data => {
      console.log(data[0].events)
      this.setState({
        eventData: data[0].events
      })
    })
  }


  componentDidMount(){
    this.event()
  }

render(){
  return(

    <div class="container">
  	<div class="row">
  		<div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
              <div class="MultiCarousel-inner">
            {this.state.eventData.map(g => <EventTop groupData={g} key={g.id}/>)}
            </div>
            <button className="btn btn-primary leftLst"></button>
            <button className="btn btn-primary rightLst"></button>
            </div>
            </div>
            </div>
  )
}

}

export default memberPage
