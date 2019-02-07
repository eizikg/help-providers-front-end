import React, { Component } from 'react';
// import EachGroup from '../components/eachGroup.js'
import EventTop from '../components/membersEventTop.js'
import MembersSidebar from '../components/membersSidebar.js'
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


class memberPage extends Component{

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

    // <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    // <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    // <div class="slides">
    //   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //     <ol className="carousel-indicators">
    //       {this.state.eventData.map((g, index) => index == 0 ?  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>: <li data-target="#carouselExampleIndicators" data-slide-to={index.toString()}></li>)}
    //     </ol>
    //     <div className="carousel-inner">
    //       {this.state.eventData.map((g, index) => <EventTop groupData={g} key={g.id} index={index}/>)}
    //     </div>
    //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    // {this.state.eventData.map(g => <EventTop groupData={g} key={g.id}/>)}
        <div>

          <div className="slider slider1">
            <div className="slides">
            <script src='./pageTopFunctionality.js'></script>
            {this.state.eventData.map(g => <EventTop groupData={g} key={g.id}/>)}
            </div>
            </div>

          // </div>
          // <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation" >
          //   <div className="well sidebar-nav">
          //   <div className="container">
          // 	<div className="row">
          // 		<div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
          //             <div className="MultiCarousel-inner">
          //  {this.state.members.map(g => <MembersSidebar groupData={g} key={g.id}/>)}
          //   </div>
          // </div>
          // </div>
          // </div>
          // </div>
          // </div>


  )
}

}

export default memberPage
