import FormInput from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
   return (
      <form>
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
            placeholder="password@mail.com"
         />

         <Button variant="bg-sky-700 text-gray-300 w-full hover:bg-sky-800 hover:text-gray-400 mb-4">
            Sign In
         </Button>
      </form>
   );
};

export default FormLogin;
