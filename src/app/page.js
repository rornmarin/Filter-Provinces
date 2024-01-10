"use client"
import ProvinceForm from "@/components/ProvinceForm"
import { useState } from "react";
import { uuidv4 } from "@/util/inext";
import DistricForm from "@/components/DistricForm";
import CommuneForm from "@/components/CommuneForm";
import VillagesForm from "@/components/VillagesForm";
import { ProvinceData } from "@/components/ProvinceData";
import { Table } from "@/components/Table";


export default function Home() {

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [Villages, setVillages] = useState([]);

  const onSaveProvince = (param) => {
    const id = uuidv4();
    console.log(id);
    setProvinces((pre) => {

      pre.push({
        id: id,
        ...param,
      });
      return pre

    });

    setProvinces([...provinces])
  };

  const onSaveDistric = (param) => {
    const id = uuidv4();
    console.log(param)
    setDistricts((pre) => {

      return [
        ...pre,
        pre.push({
          id:id,
          ...param
        })   
      ]
    })
    setDistricts([...districts])
  };

  const onSaveCommune = (param) => {
    const id = uuidv4();
    setCommunes((pre) => {

      return [
        ...pre,
        pre.push({
          id:id,
          ...param
        })   
      ]
    })
    setCommunes([...communes])
  }

  const onSaveVillages = (param) =>{
    console.log(param)
    const id = uuidv4();
    setVillages((pre) => {

      return [
        ...pre,
        pre.push({
          id:id
        })
      ]
    })
    setVillages([...Villages])

  }

  const getData = () => {

    console.log(provinces);
    console.log(districts);

  }

  return (
    <div>
      
        <ProvinceForm onSave={onSaveProvince}/>
        <DistricForm onSave={onSaveDistric} provinces={provinces}/>
        <CommuneForm onSave={onSaveCommune} provinces={provinces} districts={districts} />
        <VillagesForm onSave={onSaveVillages} provinces={provinces} districts={districts} communes={communes} Villages={Villages}/>
        <ProvinceData />
        <Table title={"District"} col1={"distric"} />
        <Table title={"Commune"} col1={"commune"} />
        <Table title={"Village"} col1={"Village"} />


        <button onClick={getData}>Test</button>
        {/* <pre>{JSON.stringify(provinces)}</pre>
        <pre>{JSON.stringify(districs)}</pre> */}

    </div>
  )
}

