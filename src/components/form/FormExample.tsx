import { Formik, Form, FormikHelpers } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'

import Button from '@/components/button/Button';
import InputTextField from '@/components/form/InputTextField/InputTextField';
import Grid from '@/components/ui/Grid/Grid';

import Checkbox from './CheckboxField/CheckboxField';
import PasswordField from './PasswordTextField/PasswordField';
import CustomSelect from './SelectField/SelectField';
import ToggleField from './ToggleField/ToggleField';

const FormExample: React.FC = () => {

    interface Values {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        country: string,
        work: string,
        termsAndConditions: boolean
        active: boolean

      }
    const initialState={
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        work: '',
        termsAndConditions: false,
        active: false,

    }

    const countryOptions = [
        {label:'Italy', value: 'IT'},
        {label:'France', value: 'FR'},
        {label:'Spain', value: 'SP'},
        {label:'Germany', value: 'DE'},
      ]

      const options = [
        { value: "Developer", label: "dev" },
        { value: "Painter", label: "painter" },
        { value: "vanilla", label: "Vanilla" },
      ];

      const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        email: Yup.string()
        .matches(/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email format')
        .required('Required'),
        work:  Yup.object().nullable().required('work is required'),
        country:  Yup.array().required('work is required'),
        password: Yup.string()
        .required('Please Enter your password')
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Must match "password" field value')
        .required('Please Enter your password'),
        termsAndConditions: Yup.bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
        active: Yup.bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
    });

    return(
        <React.Fragment>
             <Formik
                initialValues={initialState}
                validationSchema={SignupSchema}
                onSubmit={(
                    values: Values, 
                    { setSubmitting, resetForm }: FormikHelpers<Values>
                  ) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                      resetForm();
                    }, 500);
                  }}
            >
                 {({ isSubmitting, isValid, resetForm }) => (
                  
                <Form>
                    <Grid direction='column'>
                        <Grid direction='row'>
                            <InputTextField
                                model='name'
                                label="Name"
                            />
                            <InputTextField
                                model='email'
                                label="E-mail"
                            />
                        </Grid>
                        <Grid direction='row'>
                            <PasswordField
                                model='password'
                                label="Password"
                            />
                            <PasswordField
                                model='confirmPassword'
                                label="Confirm Password"
                            />
                        </Grid>
                        <Grid direction='row'>
                            <CustomSelect
                                label='work'
                                name="work"
                                isMulti={false}
                                options={options}
                            />
                             <CustomSelect
                                label='country'
                                name="country"
                                isMulti={true}
                                options={countryOptions}
                            />
                        </Grid>
                        <Grid direction='row'>
                            <Checkbox 
                                model='termsAndConditions'
                                label='Terms and conditions'
                                disabled={false}
                                value={false}
                                tooltipText='ciao'
                            />
                             <ToggleField
                                model='active'
                                label='active'
                                disabled={false}
                                value={false}
                                tooltipText='ciao'

                            />
                        </Grid>
                    </Grid>
                 
                    <Grid direction="row" classNames='justify-center'>
                        <Button
                            onBtnClick={() => {}}
                            btnStyle='primary'
                            type="submit"
                            label='CONFIRM'
                            icon="ri-mail-send-line"
                            disabled={isSubmitting || !isValid}
                            isLoading={isSubmitting}
                        />
                        <Button
                            onBtnClick={() => resetForm()}
                            btnStyle='secondary'
                            type="button"
                            label='RESET'
                        />
                    </Grid>
                </Form>
                )}

            </Formik>
        </React.Fragment>
    )
}
    
export default FormExample