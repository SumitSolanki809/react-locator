import React from 'react';
import SimpleMap from './components/SimpleMap'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      delhi: {query: 'bangalore', coordinates: {lat: 12.9716, lng: 77.5946} },
      bombay: {query: 'bombay', coordinates: { lat: 19.0760, lng: 72.8777} },
      agra: {query: 'agra', coordinates: { lat: 27.176670, lng: 78.008072} },
      location: { lat: 27.176670, lng: 78.008072 },
    }
  }

  handleSearch = () => {
    let searchValue = this.element.value
    const { delhi, bombay, agra } = this.state
    if (searchValue === delhi.query) {
      this.setState({
        location: delhi.coordinates
      })
    } else if (searchValue === bombay.query) {
      this.setState({
        location: bombay.coordinates
      })
    } else if (searchValue === agra.query) {
      this.setState({
        location: agra.coordinates
      })
    }
  }

  render() {
    const { location } = this.state
    return (
      <div className="App">
        <input type="text" placeholder="search location" ref={el => {this.element = el}}/>
        <button onClick={this.handleSearch}>Search</button>
        <SimpleMap location={location}/>
      </div>
    )
  }
}

export default App;
