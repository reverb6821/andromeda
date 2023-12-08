
import { Formik, Form, FormikHelpers } from 'formik'
import * as React from 'react';

import InputTextField from '@/components/form/InputTextField/InputTextField';

// interface Props {
//     data: any[];
//     setData: (data: any[]) => void;
//   }

const TableSearch: React.FC = () => {

    interface Values {
        search: string;
    }

    const initialState = {
        search: '',
    }

    return (
        <React.Fragment>

            <Formik
                initialValues={initialState}
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
                <Form>
                    <InputTextField
                        model='search'
                        label=''
                        placeholder='Search...'
                        icon='ri-search-line'
                    />
                </Form>

            </Formik>
        </React.Fragment>
    )
}

export default TableSearch