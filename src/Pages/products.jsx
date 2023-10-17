import CardProduct from "../Components/Fragments/CardProduct";
import MainLayouts from "../Components/Layouts/MainLayouts";

const ProductsPage = () => {
   return (
      <MainLayouts title="Products">
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
      </MainLayouts>
   );
};

export default ProductsPage;
