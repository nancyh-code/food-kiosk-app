import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useKiosk from "../hooks/UseKiosk";
import { quantityFormatting } from "../helpers";

export default function Total() {
  const { order, customerName, setCustomerName, placeOrder, total } =
    useKiosk();

  const checkOrder = useCallback(() => {
    return order.length === 0 || customerName === "" || customerName.length < 3;
  }, [order, customerName]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  return (
    <Layout page="Total">
      <h1 className="font-black text-slate-800 text-2xl md:text-5xl">
        Total y Confirmar Pedido
      </h1>
      <p className="text-xl my-10 text-slate-900">Datos del pedido:</p>

      <form onSubmit={placeOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 text-md font-semibold"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/2 mt-3 p-2 rounded-md"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-xl font-bold">
            Total a Pagar: {""}
            <span className="font-extrabold">{quantityFormatting(total)}</span>
          </p>
        </div>
        <div className="mt-10">
          <input
            type="submit"
            value="Confirmar Pedido"
            className={`${
              checkOrder()
                ? "bg-red-300"
                : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
            } text-center inline-block px-12 py-2.5  font-semibold text-white text-xs  rounded-xl leading-tight uppercase `}
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
