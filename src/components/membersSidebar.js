import React, { Component } from 'react';


class membersSidebar extends Component{
  render(){
    return (
      <div className="item">
        <div className="pad15">
     <p>{this.props.groupData.first_name}</p>
     </div>
     </div>
    )
  }
}

export default membersSidebar
