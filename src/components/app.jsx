import React, { Component } from 'react';
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      gifs: [],
      selectedGifId: "12rTjvF0ANQJsk"
    }
  };

  search = (query) => {
    giphy('qv3re1rd4ipe7UmD0yovD5CooXL5Hynr').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  };

  selectMyGif = (gif) => {
    this.setState({
      selectedGifId: gif
    });
  };

  render() { 
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} /> 
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectMyGif={this.selectMyGif} />
        </div>
      </div>
    );
  }
}

export default App;
