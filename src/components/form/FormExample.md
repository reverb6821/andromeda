### example of form usage


for validators check all validators inside ```src/utils/forms/validator.ts``` and use inside Yup schema.
```
import { Formik, Form } from 'formik'
import * as React from 'react'

import Grid from '@/components/ui/Grid';
import Button from '@/components/button/Button';
import InputTextField from '@/components/form/InputTextField/InputTextField';

const FormExample: React.FC =()=> {

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    });
    return (
        <React.Fragment>
           <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid direction='row'>
                            <InputTextField
                                model='username'
                                label="username"
                                type="text"
                            />
                            <InputTextField
                                model='password'
                                label="password"
                                type="text"
                                icon="ri-user-line"
                                helper="surname"
                            />
                            </Grid>
                            <Grid direction="row" classNames='justify-center'>
                                <Button
                                    onBtnClick={() => {
                                    alert('You clicked that button!');
                                    }}
                                    primary
                                    disabled={isSubmitting}
                                    isLoading={isSubmitting}
                                    label='CONFIRM'
                                />
                                <Button
                                    onBtnClick={() => {
                                    alert('You clicked that button!');
                                    }}
                                    secondary
                                    label='RESET'
                                />
                            </Grid>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

```