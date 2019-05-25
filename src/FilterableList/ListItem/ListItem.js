import React from 'react';

class ListItem extends React.Component {
  render() {

    return(
      <div>
        <h2>{this.props.title}</h2>
        <p>Author: {this.props.author}</p>
        <p>Price: {this.props.price}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }

  
}

export default ListItem