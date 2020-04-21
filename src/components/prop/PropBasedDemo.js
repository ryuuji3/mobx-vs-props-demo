import React, { useState } from 'react';
import LocationPicker from './LocationPicker'

function PropBasedDemo({ locations }) {
    const [ location, setLocation ] = useState({
        city: null,
        province: null
    })
    const city = location.city ? <span>{`${location.city}, ${location.province?.code}`}</span> : null;

    return (
        <div>
            <h1>Prop based demo</h1>
            <p>Value: { city }</p>
            <LocationPicker name="location-prop" locations={locations} value={location} onChange={setLocation} />
        </div>
    );
}

export default PropBasedDemo;