import Button from "../Components/Elements/Button/Index";
import CardProduct from "../Components/Fragments/CardProduct";
import MainLayouts from "../Components/Layouts/MainLayouts";

const products = [
   {
      id: 1,
      image: "./images/shoes2.jpg",
      name: "Sepatu keren banget 2023",
      location: "Jawa Barat",
      price: "1.500.000",
      sold: 700,
   },
   {
      id: 2,
      image: "./images/shoes2.jpg",
      name: "Sepatu keren sedunia",
      location: "Denpasar",
      price: "1.200.000",
      sold: 354,
   },
   {
      id: 3,
      image: "./images/shoes2.jpg",
      name: "Sepatu keren sedunia",
      location: "Denpasar",
      price: "1.200.000",
      sold: 354,
   },
   {
      id: 4,
      image: "./images/shoes2.jpg",
      name: "Sepatu keren sedunia",
      location: "Denpasar",
      price: "1.200.000",
      sold: 354,
   },
   {
      id: 5,
      image: "./images/shoes2.jpg",
      name: "Sepatu keren sedunia",
      location: "Denpasar",
      price: "1.200.000",
      sold: 354,
   },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
   const handleLogout = () => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/login";
   };

   return (
      <>
         <div className="flex justify-end pt-5 pr-10 items-center gap-5">
            <span className="text-gray-300 font-semibold">{email}</span>
            <Button variant="bg-pink-600 text-gray-300" onClick={handleLogout}>
               Logout
            </Button>
         </div>
         <MainLayouts title="Products">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-4">
               {products.map((product) => (
                  <CardProduct key={product.id}>
                     <CardProduct.Header image={product.image} />
                     <CardProduct.Body
                        name={product.name}
                        location={product.location}
                        price={product.price}
                        sold={product.sold}
                     />
                     <CardProduct.Footer />
                  </CardProduct>
               ))}
            </div>
         </MainLayouts>
      </>
   );
};

export default ProductsPage;
