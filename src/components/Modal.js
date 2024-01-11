import { useState } from "react";
import { TextInput } from "./input";

export const Modal = ({data,onChangePopUp,isVisible,onUpdate}) => {

    if(!isVisible){
        return null
    }

    const protectModal = (e) => {
        e.stopPropagation()
    }

    const [form,setForm] = useState({name:data.name,name_km:data.name_km})

    const onChange = (e) => {

        const field = e.target.name
        const value = e.target.value

        setForm({...form,[field]:value})
    }

    return(

        <div onClick={() => onChangePopUp(false)} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

            <div onClick={protectModal} className="bg-gray-600 p-8 text-center rounded-lg">
                
                <h4 className="text-white font-bold text-[30px]">Modify</h4>

                <div>

                    <TextInput label='Name' value={form.name} name='name' onChange={onChange}/> 
                    <TextInput label='Name Km' value={form.name_km} name='name_km' onChange={onChange}/> 
                    
                    <button onClick={() => onUpdate(form)} className="bg-black mt-4 p-4 rounded-lg font-bold">Save</button>     

                </div>

            </div>

        </div>

    )

}