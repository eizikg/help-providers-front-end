import React, { Component } from 'react';
// import EachGroup from '../components/eachGroup.js'
import EventTop from '../components/membersEventTop.js'
import MembersSidebar from '../components/membersSidebar.js'
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


class memberPage1 extends Component{

  state={
    eventData: [],
    members: []
  }

  event = () => {
    console.log(this.props.user.groups[0].id)
    fetch(`http://localhost:3000/api/v1/groups/${this.props.user.groups[0].id}`, {
      headers: {"Content-Type": "application/json", Authorization: localStorage.token}
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        eventData: data[0].events,
        members: data[0].volounteers
      })
      console.log(data[0].events)
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
    {this.state.eventData.map(g => <EventTop groupData={g} key={g.id}/>)}
  </div>
  </div>
  <ul class="list-unstyled">
    {this.state.members.map(g => <MembersSidebar  memberData={g} key={g.id}/>)}
  </ul>
</div>
  )
}

}

export default memberPage1
