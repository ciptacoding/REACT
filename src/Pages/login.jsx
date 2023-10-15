import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
   return (
      <AuthLayouts title="Login">
         <FormLogin />
         <p className="text-center text-gray-300 mb-2">
            Don't have an account?{" "}
            <Link to="/register">
               <span className="text-sky-500">Sign up</span>
            </Link>
         </p>
      </AuthLayouts>
   );
};

export default LoginPage;
