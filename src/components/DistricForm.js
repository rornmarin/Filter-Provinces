import React, { useState } from "react";
import { TextInput } from './input';
import { Button } from "./Button";
import { SelectInput } from "./input";

export default function DistricForm({onSave,provinces}) {

    const [form, setForm] = useState({province_id:"", name:"", name_km:""});

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name] : value
        })
        console.log(form)
    }

    const onClickSave = () =>{
        onSave(form)
        setForm({name:"", name_km:"", province_id:"" })

    }

  return (
    <div className="px-10 py-2">
      <div className='text-xl'>DistricForm</div>
      <div className='flex space-x-1 '>
        <TextInput label="Name latin" name={"name"} value={form.name} onChange={onChange} />
        <TextInput label="Name Khmer" name={"name_km"} value={form.name_km} onChange={onChange} />
      </div>

      <SelectInput 
        lable="Provinces:"
        onChange={onChange}
        name="province_id"
        placeholder="Pleace Select Province"
        value={form.province_id}
        options={provinces}
        />
      <div className="my-1">
        <Button lable={"Save"} onClick={onClickSave}/>
      </div>
    </div>
  );
}
