import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps'

const Maps = (props) => {

    return(
        <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -17.775594, lng: -63.183489 }} >
        
        <Marker 
            position={{ lat: -17.775594, lng: -63.183489 }}
        />
        </GoogleMap>
    )
    
}
export default withScriptjs(
    withGoogleMap(
        Maps
    )
)