import React, { useState } from 'react';
import './style.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



export const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  console.log(props)
  const [ lat, setLat ] = useState(55.64233320580574)
  const [ lng, setLng ] = useState(12.089922851562505)

  const onMarkerDragEnd = (coord) => {
    console.log('coord', coord)
    if(coord && coord.latLng) {
      const { latLng } = coord;
      // console.log('latLng')
      // const lat = latLng.lat('-34.397');
      // const lng = latLng.lng('150.644');
      setLat(latLng.lat())
      setLng(latLng.lng())
    }
  }

  return (
    <>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat, lng }}
      onClick={e => console.log(e)}
      >
      {props.isMarkerShown && (
        <Marker 
          position={{ lat, lng }} 
          draggable 
          onDragEnd={e => onMarkerDragEnd(e)} 
        />
      )}
    </GoogleMap>
    </>
  )
}))
