import ProductList from "./component/productList";

export default async function Home() {
  try {
    // Fetch products from API
    const response = await fetch("https://fakestoreapi.com/products");

    console.log(response);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    // Parse the response as JSON
    const products = await response.json();

    return (
      <div className="flex w-full">
        <ProductList products={products} />
      </div>
    );
  } catch (error) {
    // Show an error message if something goes wrong
    console.error(error);
    return <div>Error loading products. Please try again later.</div>;
  }
}
