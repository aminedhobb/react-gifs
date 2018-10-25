import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {

  constructor(props) {
    super(props);
  }

  renderList = () => {
    return (
      this.props.gifs.map((gif) => {
        return(
          <Gif id={gif.id} selectMyGif={this.props.selectMyGif} />
        )}
      )
    )
  }

  render() {    
    return (
      <div className="gif-list" >
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;

