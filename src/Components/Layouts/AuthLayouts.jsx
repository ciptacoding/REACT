import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
   const { title, children, type } = props;
   return (
      <div className="flex min-h-screen w-full justify-center items-center">
         <div className="max-w-md bg-slate-700 px-8 py-4 rounded-md shadow-slate-900 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-300 text-center mb-2">
               {title}
            </h1>
            <p className="text-gray-400 mb-6 font-medium">
               Welcome back!, please enter your details below 👇🏼
            </p>
            {children}

            {/* contidional rendering navigation auth links */}
            <p className="text-center text-gray-300 mb-2">
               {type === "login"
                  ? "Don't have an account? "
                  : "Already have an account? "}

               {type === "login" && (
                  <Link to="/login">
                     <span className="text-sky-500">Sign in</span>
                  </Link>
               )}

               {type === "register" && (
                  <Link to="/register">
                     <span className="text-sky-500">Sign up</span>
                  </Link>
               )}
               {/* navigation rendering auth links */}
            </p>
         </div>
      </div>
   );
};

export default AuthLayouts;
