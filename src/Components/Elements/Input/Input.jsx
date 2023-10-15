const Input = (props) => {
   const { type, placeholder, id } = props;
   return (
      <input
         type={type}
         className="w-full bg-slate-900 py-2 px-4 text-gray-400 rounded-md placeholder:opacity-40"
         placeholder={placeholder}
         id={id}
      />
   );
};

export default Input;
