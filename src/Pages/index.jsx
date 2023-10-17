import Button from "../Components/Elements/Button/Index";
import { Link } from "react-router-dom";

const IndexPage = () => {
   return (
      <div className="flex flex-col gap-y-4 items-center justify-center min-h-screen">
         <h1 className="text-gray-300 font-bold text-4xl">
            👏🏼 Hello React World👋🏼
         </h1>
         <div className="flex gap-x-3">
            <Link to="/login">
               <Button variant="bg-sky-700 text-gray-300 hover:bg-sky-800 hover:text-gray-400">
                  Sign In
               </Button>
            </Link>
            <Link to="/products">
               <Button variant="bg-emerald-500 text-gray-300 hover:bg-emerald-600 hover:text-gray-400">
                  Products
               </Button>
            </Link>
            <Link to="/register">
               <Button variant="bg-pink-700 text-gray-300 hover:bg-pink-700 hover:text-gray-400">
                  Sign Up
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default IndexPage;
