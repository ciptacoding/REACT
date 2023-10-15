import Button from "./Components/Elements/Button/Index";

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
