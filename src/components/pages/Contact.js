import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLable, FormInput, FormButton, Text } from '../SignIn/SignInElements';

const Contact = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>dolla</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in</FormH1>
                        <FormLable htmlFor='for'>Email</FormLable>
                        <FormInput type='email' required />
                        <FormLable htmlFor='for'>Phone</FormLable>
                        <FormInput type='number' required />
                        <FormLable htmlFor='for'>Remark</FormLable>
                        <FormInput type='textarea' required />
                        <FormButton type='submit'>Continue</FormButton>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact