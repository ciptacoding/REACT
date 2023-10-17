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

const ProductsPage = () => {
   return (
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
   );
};

export default ProductsPage;
