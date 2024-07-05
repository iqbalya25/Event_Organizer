// import React from "react";

// interface ProductProps {
//   products: string[];
// }

// const Product: React.FC<ProductProps> = ({ products }) => {
//   return (
//     <div className="px-16">
//       <div className="border-red-600 border-y-8 flex flex-col justify-center items-center gap-10 py-16 ">
//         <h1 className="text-5xl font-bold">Product</h1>
//         <div className="w-[200px] h-[200px] border border-gray-200"></div>
//         <div>
//           {products.map((product, index) => (
//             <p key={index}>{product}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from "react";

const Product: React.FC = () => {
  return (
    <div className="px-16">
      <div className="border-red-600 border-y-8 flex flex-col justify-center items-center gap-10 py-16">
        <h1 className="text-5xl font-bold">Product</h1>
        <div className="w-[200px] h-[200px] border border-gray-200"></div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, sapiente veritatis nam ab id ipsam iure excepturi
            assumenda cumque cum inventore rerum libero fuga voluptate molestiae
            blanditiis quidem quae mollitia. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Consectetur, officia natus! Cumque
            aliquam velit quae cum nostrum, pariatur, non sit fuga voluptatibus
            ab nesciunt culpa reiciendis consequatur eveniet eos assumenda.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            facere mollitia repellendus ducimus nostrum ipsum recusandae animi
            nisi iste delectus? Nihil aut, illo similique id quo dolorem ea
            animi ipsa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
