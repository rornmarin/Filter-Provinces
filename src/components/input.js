export const TextInput = ({ label, type, value, name, onChange }) => {
  return (
      <div>
          <label className="flex flex-col mx-5 my-1">{label}</label>
          <input
              className="text-black"
              type={type}
              value={value}
              name={name}
              onChange={onChange}
          />
      </div>
  );
};

export const SelectInput = ({
        label,
        placeholder,
        options = [],
        name,
        value,
        onChange
    }) => {
  return (
      <div className="mt-4">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
        </label>

        <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value="" >{placeholder}</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
      </div>
  );
};