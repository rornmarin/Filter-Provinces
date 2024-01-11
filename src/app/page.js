"use client"
import ProvinceForm from "@/components/ProvinceForm"
import { useMemo, useState } from "react";
import { uuidv4 } from "@/util/inext";
import DistricForm from "@/components/DistricForm";
import CommuneForm from "@/components/CommuneForm";
import VillagesForm from "@/components/VillagesForm";
import { ProvinceData } from "@/components/ProvinceData";
import { Table } from "@/components/Table";
import { Modal } from "@/components/Modal";

export default function Home() {

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [villages, setVillages] = useState([]);


  const data = useMemo(() => {

    const id = uuidv4();

    return provinces.map((province) => {

      const districtResults = districts.filter(
        (district) => district.province_id === province.id
      );

      const communeResults = communes.filter((commune) =>
        districtResults.filter(
          (district) => district.id === commune.district_id
        )
      );
      // console.log(communeResults)

      const villageResults = villages.filter((vil) =>
        communeResults.find((com) => com.id === vil.commune_id)
      );
      console.log(villageResults)

      const result = {
        id: id,
        province,
        totalDistricts: districtResults.length,
        totalCommunes: communeResults.length,
        totalVillages: villageResults.length,
      };

      return result;

    });

  }, [provinces, districts, communes, villages]);

  const onSaveProvince = (param) => {
    const id = uuidv4();
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
    const id = uuidv4();
    setVillages((pre) => {

      return [
        ...pre,
        pre.push({
          ...param,
          id:id,
          
        })
      ]
    })
    setVillages([...villages])

  }

  function onDelete(param) {
    const provinceId = param?.province?.id;

    // console.log(param)

    setProvinces((pre) => {
      return pre.filter((province) => province.id !== provinceId);
    });

    setDistricts((pre) => {
      return pre.filter((district) => district.province_id !== provinceId);
    });

    setCommunes(
      communes.filter((commune) => commune.province_id !== provinceId)
    );

    setVillages((pre) => {
      return pre.filter((village) => village.province_id !== provinceId);
    });
  }

  function onDeleteDistrict(param) {
    console.log(param);

    const districtId = param?.id;

    setDistricts((pre) => {
      return pre.filter((district) => district.id !== param?.id);
    });
    setCommunes(
      communes.filter((commune) => commune.district_id !== districtId)
    );

    setVillages(
      villages.filter((village) => village.district_id !== districtId)
    );
  }

  function onDeleteCommune (param) {

    const communeId = param?.id;
    setCommunes((pre) => {
      return pre.filter((commune) => commune.id != param?.id);
    });

    setVillages(villages.filte((village) => village.commune != communeId))
  }

  function onDeleteVillage (param) {

    const villageId = param?.id;
    setVillages((pre) => {
      return pre.filter((village) => village.id != villageId)
    })
  }

  return (
    <div>
      
        <ProvinceForm onSave={onSaveProvince}/>
        <DistricForm onSave={onSaveDistric} provinces={provinces}/>
        <CommuneForm onSave={onSaveCommune} provinces={provinces} districts={districts} />
        <VillagesForm onSave={onSaveVillages} provinces={provinces} districts={districts} communes={communes} />
        <ProvinceData data={data} onDelete={onDelete} onsetProvince={setProvinces}/>
        <Table title={"District"} col1={"distric"} items={districts} handleDelete={onDeleteDistrict} onsetDistricts={setDistricts} />
        <Table title={"Commune"} col1={"commune"} items={communes} handleDelete={onDeleteCommune} onsetCommunes={setCommunes}/>
        <Table title={"Village"} col1={"Village"} items={villages} handleDelete={onDeleteVillage} onsetVillages={setVillages}/>

    </div>
  )
}

