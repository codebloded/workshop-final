import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLable, FormInput, FormButton, Text } from '../SignIn/SignInElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>dolla</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in</FormH1>
                        <FormLable htmlFor='for'>Email</FormLable>
                        <FormInput type='email' required />
                        <FormLable htmlFor='for'>password</FormLable>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>forgot pass</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn