const Label = (props) => {
   const { htmlFor, children } = props;

   return (
      <label
         htmlFor={htmlFor}
         className="block text-gray-400 text-sm font-medium mb-1"
      >
         {children}
      </label>
   );
};

export default Label;
