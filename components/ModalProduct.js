import { useState, useEffect } from "react";
import Image from "next/image";
import useKiosk from "../hooks/UseKiosk";
import { quantityFormatting } from "../helpers/index";

const ModalProduct = () => {
  const { product, handleChangeModal, handleAddingOrder, order } = useKiosk();
  const [quantity, setQuantity] = useState(1);
  const [editOrder, setEditOrder] = useState(false);
  //Check order update in modal
  useEffect(() => {
    if (order.some((oderState) => oderState.id === product.id)) {
      const editProduct = order.find(
        (oderState) => oderState.id === product.id
      );
      setEditOrder(true);
      setQuantity(editProduct.quantity);
    }
  }, [product, order]);

  return (
    <div
      className="fixed inset-0  w-full h-full z-20 bg-black bg-opacity-80 duration-300 overflow-y-auto"
      // onClick={handleChangeModal}
    >
      <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-1 sm:mx-auto opacity-100 md:inset-36">
        <div
          className="mt-20 relative bg-white shadow-lg rounded-md text-gray-900 z-20"
          // onClick={handleChangeModal}
        >
          <header className="flex items-center justify-end p-1">
            <button
              className="focus:outline-none hover:bg-black hover:bg-opacity-20"
              onClick={handleChangeModal}
            >
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </header>
          <div className="md:flex gap-10 p-2">
            <div className="md:w-1/3 ">
              <Image
                width={200}
                height={300}
                alt={`Imagen de ${name}`}
                src={`/assets/img/${product.image}.jpg`}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="">{product.name}</h2>
              <p className="mt-3 font-black text-md md:text-lg text-amber-500">
                {quantityFormatting(product.price)}
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => {
                    if (quantity < 1) return;
                    setQuantity(quantity - 1);
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <p className="text-lg font-extrabold">{quantity}</p>
                <button
                  type="button"
                  onClick={() => {
                    if (quantity > 5) return;
                    setQuantity(quantity + 1);
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <footer className="flex justify-between p-2">
            <button
              className="inline-block px-4 py-2 border-2 border-red-600 text-red-600 font-semibold text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-lg hover:shadow-none "
              onClick={handleChangeModal}
            >
              Cancelar
            </button>
            <button
              className="inline-block px-5 py-2.5 bg-red-600 font-semibold text-white text-xs  rounded-full leading-tight uppercase hover:bg-red-700 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out "
              onClick={() => handleAddingOrder({ ...product, quantity })}
            >
              {editOrder ? "Modificar pedido" : "Agregar al pedido"}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
