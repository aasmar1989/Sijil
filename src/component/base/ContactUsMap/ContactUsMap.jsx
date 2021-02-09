import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper } from 'google-maps-react';
import './style.css'

export const ContactUsMap = () => { 

  return (
      <div className="contact-us-map-wrap">
        <GoogleMapReact
          defaultCenter={{lat: 59.95, lng: 30.33}}
          defaultZoom={11}
          options={{ 
              fullscreenControl: false,
            }}
        />
      </div>
     )
}

const YOUR_GOOGLE_API_KEY_GOES_HERE = "test"

export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(ContactUsMap)