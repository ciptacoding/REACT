import Button from "../Elements/Button/Index";

const CardProduct = (props) => {
   const { children } = props;
   return (
      <div className="text-gray-300 max-w-[200px] bg-slate-700 rounded-md shadow-slate-900 shadow-md">
         {children}
      </div>
   );
};

const CardHeader = (props) => {
   const { image } = props;
   return (
      <div className="mb-4">
         <img
            src={image}
            alt="products"
            className="object-cover h-44 w-full rounded-t-md"
         />
      </div>
   );
};

const CardBody = (props) => {
   const { name, location, price, sold } = props;
   return (
      <div>
         <div className="px-3 text-sm pb-2">
            <a href="#">{name}</a>
            <p className="text-xs text-gray-400 pt-1">{location}</p>
         </div>
         <div className="px-3 pb-2 flex justify-between items-center gap-2">
            <span className="text-base font-semibold">
               Rp.{" "}
               {price.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
               })}
            </span>
            <span className="text-xs text-gray-400">Terjual {sold}</span>
         </div>
      </div>
   );
};

const CardFooter = (props) => {
   const { handleAddToCart, id } = props;

   return (
      <div className="px-3 pb-4">
         <Button
            variant="bg-emerald-500 w-full hover:bg-emerald-600"
            onClick={() => handleAddToCart(id)}
         >
            Add To Cart
         </Button>
      </div>
   );
};

// Ini akan memudahkan kita ketika menemukan case nested components.
// Tiga Component ini akan dipanggil dibagian children dari CardProduct
CardProduct.Header = CardHeader;
CardProduct.Body = CardBody;
CardProduct.Footer = CardFooter;

export default CardProduct;
