// import { useState } from "react";
// import { v4 } from "uuid";

// /**
//  * 1. Add new tags to the product
//  * 2. Remove existing tags from the product
//  * 3. Edit existing tag name from the product
//  */
// const EditNestedTags = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Apple iPhone 16 Pro Max 256 GB",
//       price: 135000,
//       tags: [
//         { id: 1, label: "Apple" },
//         { id: 2, label: "Smartphone" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Apple iPhone 16 Pro 256 GB",
//       price: 115000,
//       tags: [
//         { id: 1, label: "Apple" },
//         { id: 2, label: "Device" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Apple iPhone 16 256 GB",
//       price: 75000,
//       tags: [
//         { id: 1, label: "Smartphone" },
//         { id: 2, label: "Device" },
//       ],
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 16 128 GB",
//       tags: [
//         { id: 1, label: "New Gen Phone" },
//         { id: 2, label: "Device" },
//       ],
//       price: 65000,
//     },
//     {
//       id: 5,
//       name: "Kurkure",
//       tags: [],
//       price: 65000,
//     },
//   ]);
//   const [editing, setEditing] = useState({});

//   const addNewTagToProduct = (productId) => {
//     setProducts((product) => {
//       return product.map((p) => {
//         if (p.id === productId) {
//           p.tags = [...p.tags, { id: v4(), label: editing[productId] }];
//         }
//         return p;
//       });
//     });
//     setEditing((prev) => ({ ...prev, [productId]: "" }));
//   };

//   const removeTagFromProduct = (productId, tagId) => {
//     console.log({ productId, tagId });
//     setProducts((product) => {
//       return product.map((p) => {
//         if (p.id !== productId) {
//           return p;
//         }

//         // const tags = p.tags.filter((t) => t.id !== tagId);
//         // p.tags = tags;

//         p.tags = p.tags.filter((t) => t.id !== tagId);
//         return p;
//       });
//     });
//   };

//   const removeTagFromProductV2 = (productId, tagId) => {
//     console.log({ productId, tagId });
//     setProducts((product) => {
//       return product.map((p) => {
//         if (p.id === productId) {
//           p.tags = p.tags.filter((t) => t.id !== tagId);
//         }
//         return p;
//       });
//     });
//   };

//   const editTagFromProduct = () => {};

//   const onAddNewTodoTitleChange = (e) => {
//     const { name, value } = e.target;
//     //console.log({ name, value });
//     setEditing((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value, // {1 : 10, 2:15}
//     }));
//   };

//   console.log("Products: ", products);
//   return (
//     <div>
//       <h1>My Products</h1>
//       {products.map((product) => {
//         return (
//           <div key={product.id}>
//             <p>Name: {product.name}</p>
//             <hr />

//             <div>
//               <p>New todo</p>
//               <input
//                 type="text"
//                 placeholder="Enter new todo title"
//                 value={editing[product.id] ? editing[product.id] : ""}
//                 name={product.id}
//                 onChange={onAddNewTodoTitleChange}
//               />
//               <button onClick={() => addNewTagToProduct(product.id)}>
//                 Add
//               </button>
//             </div>
//             <div>
//               {product.tags.map((tag) => {
//                 return (
//                   <div key={tag.id}>
//                     <div>
//                       <span>{tag.label}</span>
//                       <button
//                         onClick={() => removeTagFromProduct(product.id, tag.id)}
//                       >
//                         x
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default EditNestedTags;
