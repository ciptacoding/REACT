import FormInput from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
   const handleLogin = (event) => {
      event.preventDefault();
      localStorage.setItem("email", event.target.email.value);
      localStorage.setItem("password", event.target.password.value);
      window.location.href = "/products";
   };

   return (
      <form onSubmit={handleLogin} method="POST">
         <FormInput
            label="Email"
            htmlFor="email"
            type="email"
            placeholder="example@mail.com"
            name="email"
         />

         <FormInput
            label="Password"
            htmlFor="password"
            type="password"
            placeholder="password@mail.com"
            name="password"
         />

         <Button
            variant="bg-sky-700 text-gray-300 w-full hover:bg-sky-800 hover:text-gray-400 mb-4"
            type="submit"
         >
            Sign In
         </Button>
      </form>
   );
};

export default FormLogin;
