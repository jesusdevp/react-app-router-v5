import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css';
import { TextInput } from '../components';

export const RegisterFormikPage = () => {


  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                .min(2, 'El nombre deber ser 3 caracteres o mas')
                                .max(15, 'El nombre debe de ser menor de 15 caracteres')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('Formato invalido')
                                .required('Requerido'),
                    password1: Yup.string()
                                .min(6, 'La contrasena debe de ser de 6 caracteres o mas')
                                .required('Requerido'),
                    password2: Yup.string()
                                .oneOf([ Yup.ref('password1') ], 'Las contrasenas no son iguales')
                                .required('Requerido')   
                })
            }
        >
            {
                ({ handleReset }) => (
                    <Form noValidate >
                        <TextInput 
                            label='Nombre'
                            name='name'
                            placeholder='Ingresa tu nombre'
                        />

                        <TextInput 
                            label='Correo electronico'
                            name='email'
                            placeholder='Ingresa tu correo'
                        />

                        <TextInput 
                            label='Contrasena'
                            name='password1'
                            placeholder='Ingresa una contrasena'
                        />

                        <TextInput 
                            label='Repetir contrasena'
                            name='password2'
                            placeholder='Repite la contrasena'
                        />

                        <button type="submit" >Create</button>
                        <button type="button" onClick={ handleReset } >Reset Form</button>
                    </Form>
                )
            }
            
        </Formik>
        
    </div>
  )
}
