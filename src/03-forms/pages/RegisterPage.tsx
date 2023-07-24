import { FormEvent } from "react"
import { userForm } from "../hooks/useForm"

export const RegisterPage = () => {

    const { onChange, resetForm, isValidEmail, name, email, password1, password2 } = userForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

  return (
    <div>
        <h1>RegisterPage</h1>
        <form noValidate onSubmit={ onSubmit } >
            <input 
                type="text"
                placeholder="Name"
                name="name"
                value={ name }
                onChange={ onChange }
                className={ `${ name.trim().length <= 0 && 'has-error' }` }
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span> }
            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onChange }
                className={ `${ !isValidEmail(email) && 'has-error' }` }
            /> 
            { !isValidEmail( email ) && <span>Email no valido</span> }
            <input 
                type="password"
                placeholder="Password"
                value={ password1 }
                name="password1"
                onChange={ onChange }
            />
             { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
             { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contrasena debe tener 6 caracteres</span> }
            <input 
                type="password"
                placeholder="Repeat password"
                name="password2"
                value={ password2 }
                onChange={ onChange }
            />
             { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
             { password2.trim().length > 0 && password1 !== password1 && <span>Las contrasenas no coinciden</span> }
            <button type="submit" >Create</button>
            <button type="button" onClick={ resetForm } >Reset Form</button>
        </form>
    </div>
  )
}
