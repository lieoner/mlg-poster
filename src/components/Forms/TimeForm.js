import React from 'react';

const useFormField = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = React.useCallback((e) => setValue(e.target.value), []);
    return { value, onChange };
};

export const TimeForm = ({ time, onSubmit, title }) => {
    const timeField = useFormField(time.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(timeField.value);
    };
    return (
        <form className={'time'} onSubmit={handleSubmit}>
            <label htmlFor='time'>{title} </label>
            <div>
                <label htmlFor='time'>Время </label>
                <input type='time' id='time' name='time' {...timeField} />
            </div>

            <button>Изменить</button>
        </form>
    );
};
