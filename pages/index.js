import Head from "next/head";
import Image from "next/image";
// import { PrismaClient } from "@prisma/client";
import Layout from "../layout/Layout";

export default function Home({ categories }) {
  console.log(categories);
  return (
    <Layout>
      <h1>Inicio</h1>
    </Layout>
  );
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();

//   const categories = await prisma.category.findMany();
//   return {
//     props: {
//       categories,
//     },
//   };
// };
