import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from './../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/form';

export default function LoginScreen() {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(5).label("Password")
    });
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}>
                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email" />
                <AppFormField
                    name="password"
                    placeholder="Password"
                    icon="key"
                    secureTextEntry />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
