import React, { useState } from "react";
import { TextInput } from './input';
import { Button } from "./Button";
import { SelectInput } from "./input";

export default function VillagesForm({onSave,provinces,districts,communes}) {

    const [form, setForm] = useState({

      commune_id: "",
      name:"", 
      name_km:"",
      
    });

    const [selectedProvince, setSelectedProvince] = useState('');

    const [districtData,setDistrictData] = useState([]);

    const [communesData,setCommunesData] = useState([]);

    const handleSelectProvince = (e) => {

    const province_id = e.target.value;

    setForm({ ...form, district_id: '', name: '', name_km: '' }); 
    setSelectedProvince(province_id);
    const district = districts.filter(dis => dis.province_id === province_id)
    setDistrictData(district)
    setCommunesData([])
  }
  
    const handleDistrictSelect = (e) => {
      const districtId = e.target.value;
      setForm({
        ...form,
        district_id: districtId,
        communeId : ''
      });
      const commune = communes.filter(com => com.district_id === districtId);
      setCommunesData(commune);
    };

    // const handleCommuneSelect = (e) => {
    //   const communeId = e.target.value;
    //   setForm({
    //     ...form,
    //     commune_id: communeId,
    //   });
    // };

    const onChangeCommune = (e) => {
      const name = e.target.name
      const value = e.target.value

      setForm({...form,[name]:value})
  }

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
        setCommunesData([])
        setForm({village_id:'',name:'',name_km:'', province_id: '', district_id: '', commune_id: '' })
        setSelectedProvince(''); 

        // console.log("Saving village data:", formData);
    }

  return (
    <div className="px-10 py-2">
      <div className='text-xl'>VillagesForm</div>
      <div className='flex space-x-1 '>
        <TextInput label="Name latin" name={"name"} value={form.name} onChange={onChange} />
        <TextInput label="Name Khmer" name={"name_km"} value={form.name_km} onChange={onChange} />
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

        <SelectInput 
        lable="commune:"
        name="commune_id"
        placeholder="Pleace Select commune"
        value={form.commune_id}
        options={communesData}
        onchange={onChangeCommune}
        />

      <div className="my-1">
        <Button lable={"Save"} onClick={onClickSave}/>
      </div>
    </div>
  );
}
