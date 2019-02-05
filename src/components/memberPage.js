import React, { Component } from 'react';
import EventTop from './eventTop.js'
import MembersSidebar from './membersSidebar.js'
class memberPage extends Component{

  state={
    eventData: [],
    members: []
  }

  event = () => {
    fetch('http://localhost:3000/api/v1/groups')
    .then(res => res.json())
    .then(data => {
      console.log(data[0].volounteers)
      this.setState({
        eventData: data[0].events,
        members: data[0].volounteers
      })
    })
  }


  componentDidMount(){
    this.event()
  }

render(){
  return(
    <div>
    <div className="container">
  	<div className="row">
  		<div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
              <div className="MultiCarousel-inner">
            {this.state.eventData.map(g => <EventTop groupData={g} key={g.id}/>)}
            </div>
            <button className="btn btn-primary leftLst"></button>
            <button className="btn btn-primary rightLst"></button>
            </div>
            </div>
            </div>
            <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation" >
              <div className="well sidebar-nav">
              <div className="container">
            	<div className="row">
            		<div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                        <div className="MultiCarousel-inner">
             {this.state.members.map(g => <MembersSidebar groupData={g} key={g.id}/>)}
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

  )
}

}

export default memberPage
