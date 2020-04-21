import React from 'react';
import { useLocalStore, observer } from 'mobx-react';
import LocationPicker from './LocationPicker';

function ObservableDemo({ locations }) {
    const location = useLocalStore(() => ({
        locations,
        city: null,
        province: null,
        setCity(city) {
            const found = locations.find(l => l.id === city.id);

            location.city = found;
            location.province = found.province;
        },
        setProvince(province) {
            location.province = locations.find(l => l.province.id === province.id)?.province;
        },
        get cities() {
            const filteredCities = location.province ? locations.filter(l => l.province.id === location.province.id) : locations;

            return filteredCities.map(l => ({
                id: l.id,
                value: l.city,
                label: l.city,
            }))
        },
        get provinces() {
            const provinces = locations.map(l => ({
                id: l.province.id,
                value: l.province.code,
                label: l.province.code,
            }))

            return provinces.filter((option, index) => provinces.findIndex(o => o.id === option.id) === index)
        }
    }))
    const city = location.city ? <span>{`${location.city.city}, ${location.province?.code}`}</span> : null;

    return (
        <div>
            <h1>Observer demo</h1>
            <p>Value: { city }</p>
            <LocationPicker name="location-observer" model={location} />
        </div>
    );
}

export default observer(ObservableDemo);