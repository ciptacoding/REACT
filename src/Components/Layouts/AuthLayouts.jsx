const AuthLayouts = (props) => {
   const { title, children } = props;
   return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="max-w-md bg-slate-700 px-8 py-4 rounded-md shadow-slate-900 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-300 text-center mb-2">
               {title}
            </h1>
            <p className="text-gray-400 mb-6 font-medium">
               Welcome back!, please enter your details below 👇
            </p>
            {children}
         </div>
      </div>
   );
};

export default AuthLayouts;
