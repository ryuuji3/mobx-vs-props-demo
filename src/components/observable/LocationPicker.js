import React from 'react';
import { observer } from 'mobx-react';
import Select from './Select'

function LocationPicker({ name, model }) {
    return (
        <>
            <Select name={`${name}-city`} value={model.city} options={model.cities} onChange={model.setCity} />
            <Select name={`${name}-province`} value={model.province} options={model.provinces} onChange={model.setProvince} />
        </>
    )
}

export default observer(LocationPicker);