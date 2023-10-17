import CardProduct from "../Components/Fragments/CardProduct";
import MainLayouts from "../Components/Layouts/MainLayouts";

const ProductsPage = () => {
   return (
      <MainLayouts title="Products">
         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-4">
            <CardProduct>
               <CardProduct.Header image="./images/shoes2.jpg" />
               <CardProduct.Body
                  title="Sepatu paling keren sedunia"
                  location="Denpasar"
                  price="950.000"
                  sold="500"
               />
               <CardProduct.Footer />
            </CardProduct>

            <CardProduct>
               <CardProduct.Header image="./images/shoes2.jpg" />
               <CardProduct.Body
                  title="Sepatu paling keren sedunia"
                  location="Denpasar"
                  price="950.000"
                  sold="500"
               />
               <CardProduct.Footer />
            </CardProduct>
         </div>
      </MainLayouts>
   );
};

export default ProductsPage;
