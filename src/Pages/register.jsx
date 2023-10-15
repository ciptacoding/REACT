import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
   return (
      <AuthLayouts title="Register">
         <FormRegister />
         <p className="text-center text-gray-300 mb-2">
            Have an account?{" "}
            <Link to="/login">
               <span className="text-sky-500">Sign in</span>
            </Link>
         </p>
      </AuthLayouts>
   );
};

export default RegisterPage;
