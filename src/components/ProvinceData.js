export const ProvinceData = ({data}) => {

    console.log(data);

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
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.province.name}</td>
                            <td>{item?.totalDistricts}</td>
                            <td>{item?.totalCommunes}</td>
                            <td>{item?.totalVillages}</td>
                            <td>Action</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}