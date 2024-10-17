// import Image from "next/image";
// import travel from"@/../public/travel.png";
// //need to import db
// import { db } from "@/utils/dbConnection";



// export default async function TravelPage() {
//   //get my data from db
//     const travelblog = await db.query(`SELECT * FROM travelblog`);

//     console.log(travelblog);
//     const wrangleTravelblog = travelblog.rows;
//   return (
//     <>
//       <h1>List of Places</h1>
//       <h2>The fun never ends!</h2>
//       <Image
//         src={travel}
//         alt="car-travel"
//         width={300}
//         height={200}
//         className="rounded-lg border-amber-400 border-8 hover:scale-105"
//         placeholder="blur"
//       />
//       {wrangleTravelblog.map((travelblog)=>(
//     <div key={travelblog.id} className="border-lime-400 border-2 flex flex-col items-center">
//         <h2>{travelblog.title}</h2>
//         <p>{travelblog.location}</p>
//         <p>Posted by :{travelblog.traveller_name}</p>

//     </div>
// ))
//       }
//       <Image
//         src="https://cdn.pixabay.com/photo/2017/08/03/11/28/ferris-wheel-2575709_640.jpg"
//         alt="Coaster roller"
//         width={300}
//         height={200}
//         className="rounded-lg border-amber-400 border-4 hover:scale-105"
//       />
//     </>
//   );
// }