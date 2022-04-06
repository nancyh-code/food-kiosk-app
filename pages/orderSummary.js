import Layout from "../layout/Layout";

export default function OrderSummary() {
  return (
    <Layout page="Resumen">
      <h1 className="font-black text-slate-800 text-2xl md:text-5xl">
        Resumen del Pedido
      </h1>
      <p className="text-xl my-10 text-slate-900">Revisa tu pedido</p>
    </Layout>
  );
}
