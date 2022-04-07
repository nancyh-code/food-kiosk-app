import Layout from "../layout/Layout";
import useKiosk from "../hooks/UseKiosk";
import ProductResume from "../components/ProductResume";

export default function OrderSummary() {
  const { order } = useKiosk();
  return (
    <Layout page="Resumen">
      <h1 className="font-black text-slate-800 text-2xl md:text-5xl">
        Resumen del Pedido
      </h1>
      <p className="text-xl my-10 text-slate-900">Revisa tu pedido</p>
      {order.length === 0 ? (
        <p className="text-xl text-center my-10 text-slate-900">
          No has elegido un producto todavía
        </p>
      ) : (
        order.map((product) => (
          <ProductResume key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
