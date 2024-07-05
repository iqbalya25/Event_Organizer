// import React from "react";

// interface CompanyDetailProps {
//   name: string;
//   address: string;
//   country: string;
//   description: string;
// }

// const CompanyDetail: React.FC<CompanyDetailProps> = ({
//   name,
//   address,
//   country,
//   description,
// }) => {
//   return (
//     <div className="flex flex-col justify-center px-16 py-20 items-center gap-10">
//       <h1 className="text-5xl font-bold">{name}</h1>
//       <div>
//         <p>{description}</p>
//         <br />
//         <div className="flex flex-col">
//           <p>{name}</p>
//           <p>{address}</p>
//           <p>{country}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyDetail;

import React from "react";

const CompanyDetail: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-16 py-20 items-center gap-10">
      <h1 className="text-5xl font-bold">Company</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          sapiente veritatis nam ab id ipsam iure excepturi assumenda cumque cum
          inventore rerum libero fuga voluptate molestiae blanditiis quidem quae
          mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam et, non alias blanditiis molestias excepturi explicabo doloribus
          reiciendis velit nisi vel, iste tempore, rem aliquid minima eveniet
          corporis nemo maiores.
        </p>
        <br />
        <div className="flex flex-col">
          <p>Company Name</p>
          <p>Address</p>
          <p>Country</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
