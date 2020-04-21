import React from 'react';
import Select from './Select'
import useLocationPicker from './useLocationPicker'

function LocationPicker({ name, value, locations, onChange }) {
    const {
        cityOptions,
        provinceOptions,
        setCity,
        setProvince,
        city,
        province,
    } = useLocationPicker(locations, value, onChange);

    return (
        <>
            <Select name={`${name}-city`} value={city} options={cityOptions} onChange={setCity} />
            <Select name={`${name}-province`} value={province} options={provinceOptions} onChange={setProvince} />
        </>
    )
}

export default LocationPicker;