import { ErrorMessage, useField } from "formik"

interface SelectInputProps {
    label: string,
    name: string,
    placeholder?: string,
    [x: string]: any
}

export const SelectInput = ( { label, ...props }: SelectInputProps ) => {

    // const [ field, meta ] = useField(props)
    const [ field ] = useField(props)

  return (
    <>
        <label >{ label }</label>
        <select className='text-input' { ...field } { ...props } />
        <ErrorMessage name={ props.name } component='span' />
        {/* {
            meta.touched && meta.error && (
                <span className='error' >{ meta.error }</span>
            )
        } */}
    </>
  )
}