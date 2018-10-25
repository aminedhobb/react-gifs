import React, { Component } from 'react';

class Gif extends Component {

  constructor(props) {
    super(props);
  }

  changeSelectedGif = () => {
    this.props.selectMyGif(this.props.id)
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`;
    return(
        <img src={src} alt="gif" className="gif"  onClick={this.changeSelectedGif} />
    );
  }
}

export default Gif;
