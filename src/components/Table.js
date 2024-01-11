import { useState } from "react";
import { Modal } from "./Modal";

export const Table = ({title,col1,items=[],handleDelete,onsetDistricts,onsetCommunes,onsetVillages}) => {

    const [popUp,setPopUp] = useState(false)
    const [viewDetail,setViewDetail] = useState()

    const onEditView = (data) => {
        setPopUp(true)
        setViewDetail(data)
        console.log(data);
      };

      const handleUpdate = (updatedData) => {
        if (onsetDistricts) {
          onsetDistricts((prevDistricts) =>
            prevDistricts.map((district) =>
              district.id === viewDetail.id ? { ...district, ...updatedData } : district
            )
          );
        } else if (onsetCommunes) {
          onsetCommunes((prevCommunes) =>
            prevCommunes.map((commune) =>
              commune.id === viewDetail.id ? { ...commune, ...updatedData } : commune
            )
          );
        } else if (onsetVillages) {
          onsetVillages((prevVillages) =>
            prevVillages.map((village) =>
              village.id === viewDetail.id ? { ...village, ...updatedData } : village
            )
          );
        }
        setPopUp(false);
      };

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-10 py-5">
            <h1>{title}</h1>
            <table class="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            {col1} 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr>
                            <td scope="col" className="px-6 py-3">{item.name}</td>
                            <td scope="col" className="px-6 py-3">
                                <button onClick={() => onEditView(item)}>Edit / </button>
                                <button onClick={() => handleDelete(item)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal data={viewDetail} onChangePopUp={setPopUp} isVisible={popUp} onUpdate={handleUpdate}/>
        </div>
    )
}