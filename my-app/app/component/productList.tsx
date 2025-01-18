"use client";
import Image from "next/image";
import IProduct from "@/types/product";

const ProductList = ({products}:{products:IProduct[]}) => { //json.stringify  json.pars
  const handleClicked = (product:IProduct) => {

    const cart = JSON.parse(localStorage.getItem('cart') || "{}") //
    if (cart[product.name]) {
        cart[product.name] = {...cart[product.name], quantity: cart[product.name].quantity + 1,
        }
    }else{
        cart[product.name] = {...products, quantity: 1}
    }
    
    // const jsonProduct= JSON.stringify(product) //change any value in string
   
    // localStorage.setItem('cart', jsonProduct);
    localStorage.setItem('cart',JSON.stringify(cart));
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product, index) => (
          <div key={product.id || `${product.name}-${index}`} className="border p-4 rounded">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded"
            />
            <div className="mt-2 text-center">
              <p>{product.name}</p>
              <button
                onClick={() => handleClicked(product)}
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
