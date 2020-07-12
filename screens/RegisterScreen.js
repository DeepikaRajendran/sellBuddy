import React from 'react';
import {
    StyleSheet
} from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/form';
import Screen from '../components/Screen';

export default function RegisterScreen() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(5).label("Password")
    });
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                <AppFormField
                    name="name"
                    placeholder="Name"
                    icon="account" />
                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email" />
                <AppFormField
                    name="password"
                    placeholder="Password"
                    icon="key"
                    secureTextEntry />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});