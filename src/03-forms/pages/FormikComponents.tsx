import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {


  return (
    <div>
        <h1>Formik Components Page</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe contener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(10, 'Debe contener 10 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Formato invalido')
                                    .required('Requerido'),
                    terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar los terminos y condiciones'),
                    jobType: Yup.string()
                                    .notOneOf(['rh'], 'Esta opcion no es permitida')
                                    .required('Requerido')
                })
            }
        >
        { () => (
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name='firstName' type='text' />
                <ErrorMessage name='firstName' component='span' />
                
                <label htmlFor="lastName">Last Name</label>
                <Field name='lastName' type='text' />
                <ErrorMessage name='lastName' component='span' />
                
                <label htmlFor="email">Email address</label>
                <Field name='email' type='email' />
                <ErrorMessage name='email' component='span' />

                <label htmlFor="jobType">Job type</label>
                <Field name='jobType' as='select' >
                    <option value=''>Pick something</option>
                    <option value='developer'>Developer</option>
                    <option value='designer'>Designer</option>
                    <option value='marketing'>Marketing</option>
                    <option value='support'>Support</option>
                    <option value='rh'>Resorces Human</option>
                </Field>
                <ErrorMessage name='jobType' component='span' />
                
                <label>
                    <Field name='terms' type='checkbox' />
                    Terms and conditional
                </label>
                <ErrorMessage name='terms' component='span' />
                
                <button type='submit' >Submit</button>
            </Form>
        )}
        </Formik>
    </div>
  )
}
