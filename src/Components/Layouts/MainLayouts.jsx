import { Link } from "react-router-dom";

const MainLayouts = (props) => {
   const { children } = props;

   return (
      <div className="min-h-screen px-8 xl:px-4 max-w-7xl mx-auto">
         {children}
      </div>
   );
};

export default MainLayouts;
