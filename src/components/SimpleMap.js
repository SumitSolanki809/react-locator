import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SimpleMap extends React.Component {

    render() {
        const { location } = this.props
        console.log(location)
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={{width: '100%',height: '100%'}}
                    initialCenter={location}
                >
                    <Marker position={location} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCofCJ5g_m8hVKNirA6mNHrdPndlajr8YE'
  })(SimpleMap)