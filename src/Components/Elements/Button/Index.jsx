// Component Button
const Button = (props) => {
   // destructuring obj, dan set default value pada setiap property.
   // property children menangkap semua element yang ada didalam parentnya.
   const {
      children = "....",
      variant = "bg-gray-400",
      type = "button",
      onClick = () => {},
   } = props;
   return (
      <button
         className={`px-6 py-2 font-semibold rounded-md ${variant}`}
         type={type}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
