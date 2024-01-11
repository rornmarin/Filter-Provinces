import React, { Children, useState } from 'react';
import { Modal } from './Modal';
import { TextInput } from './input';

export const ProvinceData = ({ data=[],onDelete,onsetProvince}) => {

    const [popUp,setPopUp] = useState(false)

    const [viewDetail,setViewDetail] = useState()

    const onEditView = (data) => {
        setPopUp(true)
        setViewDetail(data)
        console.log(data);
    };

    const handleUpdate = (updatedData) => {

        onsetProvince((prevProvinces) => {
        return prevProvinces.map((province) =>
            province.id === viewDetail.id ? { ...province, ...updatedData } : province
        );
        });

        setPopUp(false);
    };

    return (
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-10">
            <h1>Data Province</h1>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Province 
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Distric
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Commune
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Village
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                        <tr >
                            <td scope="col" class="px-6 py-3">{item?.province?.name} / {item.province.name_km}</td>
                            <td scope="col" class="px-6 py-3">{item?.totalDistricts}</td>
                            <td scope="col" class="px-6 py-3">{item?.totalCommunes}</td>
                            <td scope="col" class="px-6 py-3">{item?.totalVillages}</td>
                            <td scope="col" class="px-6 py-3">
                                <button onClick={() => onEditView(item.province)}>Edit / </button>
                                <button onClick={() => onDelete(item)}> Delete</button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>


            <Modal data={viewDetail} onChangePopUp={setPopUp} isVisible={popUp} onUpdate={handleUpdate}/>
            
        </div>

    )
}