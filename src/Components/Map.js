import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

        mapCenter:{
          lat:6.988198118217423 ,
          lng: 80.42841899723892
        }
       
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map
          const style = {{
              width: '66%',
              height: '50%'
              
          }}
           google={this.props.google}
           initialCenter={{
             lat: this.state.mapCenter.lat,
             lng: this.state.mapCenter.lng
           }}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
        
      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDQh7KFlCYd8sAHLNG-oMG8jKVoXLleNx4')
  })(MapContainer)