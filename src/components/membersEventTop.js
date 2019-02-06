import React, { Component } from 'react';


class eventTop extends Component {
  render(){
    return (
      <div className="item">
        <div className="pad15">
            <p className="lead">{this.props.groupData.description}</p>
            <p>{this.props.groupData.active ? "active": "not-active" }</p>
            <p>{this.props.groupData.volounteers_required}</p>
        </div>
     </div>
    )
  }
}

export default eventTop
