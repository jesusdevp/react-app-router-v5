import { ErrorMessage, useField } from "formik"

interface TextInputProps {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password',
    placeholder?: string,
    [x: string]: any
}

export const TextInput = ( { label, ...props }: TextInputProps ) => {

    // const [ field, meta ] = useField(props)

    const [ field ] = useField(props)

  return (
    <>
        <label htmlFor={ props.id || props.name } >{ label }</label>
        <input className='text-input' { ...field } { ...props } />
        <ErrorMessage name={ props.name } component='span' />
        {/* {
            meta.touched && meta.error && (
                <span className='error' >{ meta.error }</span>
            )
        } */}
    </>
  )
}
