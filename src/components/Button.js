export const Button = ({lable,onClick,type="text"}) => {

    return (
        <div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
             type={type} onClick={onClick}>{lable}</button>
        </div>
    )

} 