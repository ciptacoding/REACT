// Input.jsx
const Input = (props) => {
   const { type, placeholder, id, name } = props;
   return (
      <input
         type={type}
         className="w-full bg-slate-900 py-2 px-4 text-gray-400 rounded-md placeholder:opacity-40"
         placeholder={placeholder}
         id={id}
         name={name}
      />
   );
};

export default Input;
