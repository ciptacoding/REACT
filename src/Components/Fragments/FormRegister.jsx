import FormInput from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
   return (
      <form>
         <FormInput
            label="Username"
            htmlFor="username"
            type="text"
            placeholder="input your username..."
         />
         <FormInput
            label="Email"
            htmlFor="email"
            type="email"
            placeholder="example@mail.com"
         />
         <FormInput
            label="Password"
            htmlFor="password"
            type="password"
            placeholder="********"
         />

         <FormInput
            label="Confirm Password"
            htmlFor="confirm-password"
            type="password"
            placeholder="********"
         />

         <Button variant="bg-sky-700 text-gray-300 w-full hover:bg-sky-800 hover:text-gray-400 mb-4">
            Sign Up
         </Button>
      </form>
   );
};

export default FormRegister;
