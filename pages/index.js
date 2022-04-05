import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/Layout";
import useKiosk from "../hooks/UseKiosk";
import Product from "../components/Product";

export default function Home() {
  const { currentCategory } = useKiosk();
  console.log(currentCategory);
  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className="font-black text-slate-700">{currentCategory?.name}</h1>
      <p className="text-xl my-10 text-slate-800">
        Elige y personaliza tu pedido
      </p>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
