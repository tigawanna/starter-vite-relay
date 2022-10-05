import React from 'react'
import TheForm from '../Shared/form/TheForm';
import { useLocalStoreValues } from './../../store';
import { Navigate } from "@tanstack/react-location";
interface LoginProps {

}
export interface FormOptions {
    field_name: string;
    field_type: string;
    default_value: string | number
    options?: { name: string; value: string }[]
}
interface Validate {
    input:{token:string|null};
    setError: (error: { name: string; message: string }) => void;
}

export const Login: React.FC<LoginProps> = ({}) => {
const token = useLocalStoreValues(state => state?.localValues?.token)  
const updateToken=useLocalStoreValues(state=>state.updateToken)

const handleSubmit = async (data: any) => {
  updateToken(data.token)

};

const validate = ({ input, setError }: Validate) => {
  return true
}

const form_input: FormOptions[] = [{ field_name: "token", field_type: "text", default_value: "" },]
return (
 <div className='w-full min-h-screen h-full flex-center'>
   <TheForm
     header={"SIGN-IN"}
     fields={form_input}
    submitFn={handleSubmit}
    validate={validate}
    />
 </div>
);
}
