import { useState, useEffect } from 'react';


function useLocationPicker(locations, initialValue, onChange) {
    const [ value, setValue ] = useState(initialValue)

    const cityOptions = value.province
        ? locations.filter(location => location.province.id === value.province.id)
            .map(location => ({ value: location.city, id: location.id, label: location.city }))
        : locations.map(location => ({ value: location.city, id: location.id, label: location.city }));
    const provinceOptions = locations.map(location => ({ value: location.province.code, id: location.province.id, label: location.province.code }))

    function setCity(city) {
        if (!city) {
            return;
        }

        setValue({
            id: city.id,
            city: city.value,
            province: locations.find(l => l.id === city.id)?.province,
        })
    }

    function setProvince(province) {
        if (!province) {
            return;
        }

        setValue({
            city: value.province?.id === province.id ? value.city : null,
            province: {
                id: province.id,
                code: province.value,
            },
        })
    }

    useEffect(() => {
        if (value.city && value.province) {
            onChange(value);
        }
    }, [ value, value.city, value.province, onChange ])

    const city = {
        id: value.id,
        city: value.city,
    };

    const province = {
        id: value.province?.id,
        code: value.province?.code,
    }

    return {
        cityOptions,
        provinceOptions,
        setCity,
        setProvince,
        city,
        province,
    }
}

export default useLocationPicker;