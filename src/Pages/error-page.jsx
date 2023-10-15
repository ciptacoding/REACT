import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();

   return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-3">
         <h1 className="text-3xl text-gray-300 font-bold">❌ Oops! ❌</h1>
         <p className="text-gray-400 font-semibold text-xl">
            💿 Sorry, an unexpected error has occured 💿
         </p>
         <p className="text-gray-400 font-semibold text-xl">
            {error.statusText || error.message}
         </p>
      </div>
   );
};

export default ErrorPage;
