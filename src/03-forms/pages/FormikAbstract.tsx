import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { CheckboxInput, SelectInput, TextInput } from '../components'

export const FormikAbstract = () => {


  return (
    <div>
        <h1>Formik Abstraction Page</h1>

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
                <TextInput 
                    label='First Name'
                    name='firstName'
                    placeholder='Jesus'
                />

                <TextInput 
                    label='Last Name'
                    name='lastName'
                    placeholder='Ramirez'
                />

                <TextInput 
                    label='Email'
                    name='email'
                    placeholder='example@example.com'
                    type='email'
                />

                <SelectInput name='jobType' label='Job Type'  >
                    <option value=''>Pick something</option>
                    <option value='developer'>Developer</option>
                    <option value='designer'>Designer</option>
                    <option value='marketing'>Marketing</option>
                    <option value='support'>Support</option>
                    <option value='rh'>Resorces Human</option>
                </SelectInput>
                
               <CheckboxInput label='Terms & Conditions' name='terms'  />
                
                <button type='submit' >Submit</button>
            </Form>
        )}
        </Formik>
    </div>
  )
}
