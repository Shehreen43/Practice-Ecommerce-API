
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'

// const Products = ({ products }) => {
//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="border p-4 rounded-lg">
//             {product.image && (
//               <img
//                 src={urlFor(product.image).width(400).url()}
//                 alt={product.name}
//                 className="w-full h-64 object-cover rounded-md"
//               />
//             )}
//             <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="mt-2 text-lg font-bold">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // Fetch products from Sanity and pass them as props to the component
// export async function getStaticProps() {
//   const query = '*[_type == "product"]'
//   const products = await client.fetch(query)

//   return {
//     props: {
//       products,
//     },
//     revalidate: 60, // Optional: Regenerate the page every 60 seconds
//   }
// }

// export default Products
