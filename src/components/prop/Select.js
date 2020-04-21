import React from 'react';

function Select({ name, options, value, onChange }) {
    const renderedOptions = options
        .filter((option, index) => options.findIndex(o => o.id === option.id) === index)
        .map(option => (
            <option
                key={`${name}-${option.id}`}
                value={option.value}
                selected={option.id === value?.id ? true : undefined}
                data-id={option.id}
            >
                { option.label }
            </option>
        ))

    function handleChange({ target }) {
        const selectedElement = target.options[target.selectedIndex];
        const selectedId = selectedElement?.getAttribute("data-id");
        const selected = options.find(o => o.id.toString() === selectedId);

        onChange(selected);
    }

    return (
        <select name={name} onChange={handleChange}>
            <option>-</option>
            { renderedOptions }
        </select>
    )
}

export default Select;