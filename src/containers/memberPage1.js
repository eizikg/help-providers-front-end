import React, { Component } from 'react';
// import EachGroup from '../components/eachGroup.js'
import EventTop from '../components/membersEventTop.js'
import MembersSidebar from '../components/membersSidebar.js'
import ReactDOM from 'react-dom';
import NewEvent from '../components/newEvent'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


class memberPage1 extends Component{

  state={
    eventData: [],
    members: []
  }


  joinEvent = (event_id) => {
    fetch('http://localhost:3000/api/v1/event_volounteers', {
      method: "POST",
      headers: {"Content-Type": "application/json", Authorization: localStorage.token},
      body: JSON.stringify({
        volounteer_id: this.state.user.id,
        group_id: this.state.group.id,
        event_id: event_id
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  event = () => {
    console.log(this.props.user.groups[0].id)
    fetch(`http://localhost:3000/api/v1/groups/${this.props.user.groups[0].id}`, {
      headers: {"Content-Type": "application/json", Authorization: localStorage.token}
    })
    .then(res => res.json())
    .then(data => {
      let user = data[0].volounteers.filter(volounteer =>
        volounteer.id == this.props.user.id
      )
      this.setState({
        eventData: data[0].events,
        members: data[0].volounteers,
        user: user[0],
        group: data[0]
      })
      console.log(data)
      console.log(this.state.members);
      console.log(this.state.user);
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
    {this.state.eventData.map(g => <EventTop groupData={g} key={g.id} joinEvent={this.joinEvent}/>)}
  </div>
  </div>
  <ul class="list-unstyled">
    {this.state.members.map(g => <MembersSidebar  memberData={g} key={g.id}/>)}
  </ul>
  if (this.state.user && this.state.user.is_admin){
  <NewEvent/>
  }
</div>
  )
}

}

export default memberPage1
