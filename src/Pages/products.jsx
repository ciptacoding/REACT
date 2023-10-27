import Button from "../Components/Elements/Button/Index";
import CardProduct from "../Components/Fragments/CardProduct";
import MainLayouts from "../Components/Layouts/MainLayouts";
import { useEffect, useState } from "react";

const products = [
   {
      id: 1,
      image: "./images/shoes1.jpg",
      name: "Sepatu Nike",
      location: "Jawa Barat",
      price: 2000000,
      sold: 700,
   },
   {
      id: 2,
      image: "./images/shoes2.jpg",
      name: "Sepatu Adidas",
      location: "Denpasar",
      price: 1500000,
      sold: 354,
   },
   {
      id: 3,
      image: "./images/shoes3.jpg",
      name: "Sepatu Ventela",
      location: "Jogjakarta",
      price: 700000,
      sold: 665,
   },
   {
      id: 4,
      image: "./images/shoes4.jpg",
      name: "Air Jordan",
      location: "Jawa Tengah",
      price: 1250000,
      sold: 406,
   },
   {
      id: 5,
      image: "./images/shoes5.jpg",
      name: "Sepatu Vans",
      location: "Jawa Timur",
      price: 850000,
      sold: 157,
   },
   {
      id: 6,
      image: "./images/shoes6.jpeg",
      name: "Sepatu Airmax",
      location: "Jawa Jakarta",
      price: 950000,
      sold: 454,
   },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
   const [cart, setCart] = useState([]);
   const [totalPrice, setTotalPrice] = useState([]);

   useEffect(() => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
   }, []);

   useEffect(() => {
      if (cart.length > 0) {
         const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
         }, 0);
         setTotalPrice(sum);
         localStorage.setItem("cart", JSON.stringify(cart));
      }
   }, [cart]);

   const handleAddToCart = (productId) => {
      if (cart.find((item) => item.id === productId)) {
         setCart(
            cart.map((item) =>
               item.id === productId ? { ...item, qty: item.qty + 1 } : item
            )
         );
      } else {
         setCart([...cart, { id: productId, qty: 1 }]);
      }
   };

   const handleLogout = () => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/login";
   };

   return (
      <>
         <MainLayouts title="Products">
            <div className="flex justify-end pt-5 items-center gap-5">
               <span className="text-gray-300 font-semibold">{email}</span>
               <Button
                  variant="bg-pink-600 text-gray-300"
                  onClick={handleLogout}
               >
                  Logout
               </Button>
            </div>

            <div className="flex mb-8 space-x-8 flex-col lg:flex-row">
               <div className="w-full lg:w-3/5">
                  <h1 className="text-3xl font-bold text-gray-300 text-center mb-8 pt-5">
                     Products
                  </h1>
                  <div className="flex flex-wrap gap-6">
                     {products.map((product) => (
                        <CardProduct key={product.id}>
                           <CardProduct.Header image={product.image} />
                           <CardProduct.Body
                              name={product.name}
                              location={product.location}
                              price={product.price}
                              sold={product.sold}
                           />
                           <CardProduct.Footer
                              handleAddToCart={handleAddToCart}
                              id={product.id}
                           />
                        </CardProduct>
                     ))}
                  </div>
               </div>
               <div className="w-full lg:w-2/5">
                  <h1 className="text-3xl font-bold text-gray-300 ml-5 mb-8 pt-5">
                     Carts
                  </h1>
                  <table className="text-left table-auto border-separate border-spacing-x-5 text-gray-300">
                     <thead>
                        <tr>
                           <th>Product</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        {cart.map((item) => {
                           const product = products.find(
                              (product) => product.id === item.id
                           );
                           return (
                              <tr key={item.id}>
                                 <td>{product.name}</td>
                                 <td>
                                    Rp.{" "}
                                    {product.price.toLocaleString("id-ID", {
                                       styles: "currency",
                                       currency: "IDR",
                                    })}
                                 </td>
                                 <td>{item.qty}</td>
                                 <td>
                                    Rp.{" "}
                                    {(item.qty * product.price).toLocaleString(
                                       "id-ID",
                                       {
                                          styles: "currency",
                                          currency: "IDR",
                                       }
                                    )}
                                 </td>
                              </tr>
                           );
                        })}

                        <tr>
                           <td colSpan={3}>
                              <b>Total Price</b>
                           </td>
                           <td>
                              <b>
                                 Rp.{" "}
                                 {totalPrice.toLocaleString("id-ID", {
                                    styles: "currency",
                                    currency: "IDR",
                                 })}
                              </b>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </MainLayouts>
      </>
   );
};

export default ProductsPage;
