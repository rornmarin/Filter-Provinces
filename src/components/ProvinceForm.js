import React, { useState } from "react";
import { TextInput } from './input';
import { Button } from "./Button";

export default function ProvinceForm({onSave}) {

    const [form, setForm] = useState({name:"", name_km:""});

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name] : value
        })
    }

    const onClickSave = () =>{
        onSave(form)
        setForm({name:"", name_km:"" })

    }

  return (
    <div className="px-10 py-2">
      <div className='text-xl'>ProvinceForm</div>
      <div className='flex space-x-1 '>
        <TextInput label="Name latin" name={"name"} value={form.name} onChange={onChange} />
        <TextInput label="Name Khmer" name={"name_km"} value={form.name_km} onChange={onChange} />
      </div>
      <div className="my-1">
        <Button lable={"Save"} onClick={onClickSave}/>
      </div>
    </div>
  );
}
