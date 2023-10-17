import Button from "../Elements/Button/Index";

const CardProduct = () => {
   return (
      <div className="text-gray-300 max-w-[200px] bg-slate-700 rounded-md shadow-slate-900 shadow-md">
         <div className="mb-4">
            <img
               src="./images/shoes2.jpg"
               alt="products"
               className="object-cover h-44 w-full rounded-t-md"
            />
         </div>
         <div className="px-3 text-sm pb-2">
            <a href="#">Sepatu paling keren sedunia</a>
            <p className="text-xs text-gray-400 pt-1">Denpasar</p>
         </div>
         <div className="px-3 pb-2 flex justify-between items-center gap-2">
            <span className="text-lg font-semibold">Rp. 900.000</span>
            <span className="text-xs text-gray-500">Terjual 500+</span>
         </div>
         <div className="px-3 pb-4">
            <Button variant="bg-emerald-500 w-full">Add To Cart</Button>
         </div>
      </div>
   );
};

export default CardProduct;
