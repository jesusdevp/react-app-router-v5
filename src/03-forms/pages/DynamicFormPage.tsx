import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { SelectInput, TextInput } from '../components'
import * as Yup from 'yup';

const initialValues: {[key: string]: any} = {}
const requiredFields: {[key: string]: any} = {}

for (const input of formJson) {
    initialValues[ input.name ] = input.value
    
    if( !input.validations) continue;

    let schema = Yup.string()

    for (const rule of input?.validations) {
        if( rule.type === 'required' ) {
            schema = schema.required('This field is required')
        }

        if( rule.type === 'maxLength' ) {
            schema = schema.max( (rule as any).value || 10, `Max of ${ (rule as any).value || 10 } characters` )
        }

        if( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Min of ${ (rule as any).value || 2 } characters` )
        }

        if( rule.type === 'email' ) {
            schema = schema.email('This format email no valid')
        }
    }

    requiredFields[ input.name ] = schema

}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form Page</h1>
        <Formik
            initialValues={ initialValues }
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={ validationSchema }
        >
            {
                () => (
                    <Form>

                        {
                            formJson.map(({ type, name, placeholder, label, options }) => {

                                if( type === 'input' || type === 'password' || type === 'email' ) {
                                    return <TextInput
                                           key={ name }
                                           type={( type as any )}
                                           name={ name }
                                           label={ label }
                                           placeholder={ placeholder }
                                        />
                                } else if( type === 'select' ) {
                                    return (
                                        <SelectInput
                                            key={ name }
                                            name={ name }
                                            label={ label }
                                        >
                                            <option value=''>Select an option</option>
                                            {
                                                options?.map( ({ id, label }) => (
                                                    <option key={ id } value={ id }>{ label }</option>
                                                ))
                                            }
                                        </SelectInput>
                                    )
                                }

                                throw new Error(`El type ${ type } no es soportado`)
                            })
                        }
                        <button type='submit' >Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
