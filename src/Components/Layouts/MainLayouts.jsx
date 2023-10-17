import { Link } from "react-router-dom";

const MainLayouts = (props) => {
   const { title, children } = props;

   return (
      <div className="min-h-screen max-w-7xl mx-auto">
         <h1 className="text-3xl font-bold text-gray-300 text-center mb-5 pt-5">
            {title}
         </h1>

         {children}
      </div>
   );
};

export default MainLayouts;
