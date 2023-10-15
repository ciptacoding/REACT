// Component Button
const Button = (props) => {
   // destructuring obj, dan set default value pada setiap property.
   // property children menangkap semua element yang ada didalam parentnya.
   const { children = "....", variant = "bg-gray-400" } = props;
   return (
      <button className={`px-6 h-10 font-semibold rounded-md ${variant}`}>
         {children}
      </button>
   );
};

function App() {
   return (
      <>
         <div className="flex flex-col gap-y-3 justify-center bg-slate-700 min-h-screen items-center">
            <h1 className="text-white">
               Hello World, This is my first react app
            </h1>
            <div className="flex gap-x-2">
               <Button variant="bg-sky-700 text-white">Login</Button>
               <Button variant="bg-green-700 text-white">Register</Button>
               <Button variant="bg-pink-700 text-white">Logout</Button>
               <Button></Button> {/* Display default value */}
            </div>
         </div>
      </>
   );
}

export default App;
