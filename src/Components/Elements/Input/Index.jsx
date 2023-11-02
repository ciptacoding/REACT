// Index.jsx
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const FormInput = forwardRef((props, ref) => {
   const { label, htmlFor, type, placeholder, name } = props;

   return (
      <div className="mb-6">
         <Label htmlFor={htmlFor}>{label}</Label>
         <Input
            type={type}
            id={htmlFor}
            placeholder={placeholder}
            name={name}
            ref={ref}
         />
      </div>
   );
});

export default FormInput;
