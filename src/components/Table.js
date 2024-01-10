export const Table = ({title,col1}) => {
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
                    <tr>
                        <th>hh</th>
                    </tr>
                        
                </tbody>
            </table>
        </div>
    )
}