import React, { useState } from "react";
import { TextInput } from './input';
import { Button } from "./Button";
import { SelectInput } from "./input";

export default function CommuneForm({onSave,provinces ,districts}) {

  const [form,setForm] = useState({district_id:'',name:'',name_km:'',province_id:'',})

  const [selectedProvince, setSelectedProvince] = useState('');

  const [districtData,setDistrictData] = useState([])

  
  const handleSelectProvince = (e) => {

    const province_id = e.target.value;

    setForm({ ...form, 
      district_id: '', 
      name: '', 
      name_km: '',
      province_id:'',
     }); 

    setSelectedProvince(province_id);

    const district = districts.filter(dis => dis.province_id === province_id)

    setDistrictData(district)
  }

  const handleDistrictSelect = (e) => {

    const districtId = e.target.value;

    setForm({
      ...form,
      district_id: districtId,
    });

  };

  const onChange = (e) => {

      const name = e.target.name
      const value = e.target.value

      setForm({
        ...form,
        [name]:value})
  }

  const onClickSave = () => {

      onSave(form)
      setDistrictData([])
      setForm({district_id:'',name:'',name_km:'',province_id:''})
      setSelectedProvince(''); 
  }

  return (
    <div className="px-10 py-2">
      <div className='text-xl'>CommuneForm</div>
      <div className='flex space-x-1 '>
        <TextInput label="Name latin" name={"name"} value={form.name} onChange={onChange} />
        <TextInput label="Name Khmer" name={"namekm"} value={form.name_km} onChange={onChange} />
      </div>

      <SelectInput 
        lable="Provinces"
        name="province_id"
        placeholder="Pleace Select provinces"
        options={provinces}
        onChange={handleSelectProvince}
        value={selectedProvince}
      />

      <SelectInput 
        lable="District:"
        name="distric_id"
        placeholder="Pleace Select District"
        value={form.district_id}
        options={districtData}
        onChange={handleDistrictSelect}
      />

      <div className="my-1">
        <Button lable={"Save"} onClick={onClickSave}/>
      </div>
    </div>
  );
}
