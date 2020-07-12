import React from 'react';
import { Formik } from 'formik';

function AppForm({ children, initialValues, validationSchema, onSubmit }) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}
export default AppForm;