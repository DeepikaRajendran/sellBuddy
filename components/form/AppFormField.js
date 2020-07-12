import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {
    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps} />
            {touched[name] && <ErrorMessage error={errors[name]} />}
        </>
    );
}

export default AppFormField;