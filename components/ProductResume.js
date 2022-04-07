import Image from "next/image";
import { quantityFormatting } from "../helpers";
import useKiosk from "../hooks/UseKiosk";

const ProductResume = ({ product }) => {
  const { handleEditQuantity } = useKiosk();
  return (
    <div className="shadow-xl p-1 mb-3 flex gap-3 items-center rounded-lg mr-2">
      <div className="md:w-1/6 s:w-1/6 md:p-2 p-0<">
        <Image
          width={90}
          height={120}
          src={`/assets/img/${product.image}.jpg`}
          alt={`Imagen de ${product.name}`}
          className="w-full h-full object-center object-cover  md:block hidden"
        />
      </div>
      <div className="md:w-5/6">
        <p className=" text-md font-black md:text-xl  text-slate-800 mb-1">
          {product.name}
        </p>
        <p className="text-s md:text-md font-bold  text-slate-800 mb-1">
          Cantidad:
          {product.quantity}
        </p>
        <p className="text-s s:text-xs md:text-md font-extrabold text-amber-400 ">
          Precio:
          {quantityFormatting(product.price)}
        </p>
        <p className="text-s md:text-md font-extrabold text-slate-700">
          Subtotal:
          {quantityFormatting(product.price * product.quantity)}
        </p>
      </div>
      <div className="mr-2">
        <button
          type="button"
          className="flex gap-1 px-8 py-2.5 bg-red-600 font-semibold text-white text-xs rounded-full leading-tight uppercase hover:bg-red-700 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => handleEditQuantity(product.id)}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          Editar
        </button>

        <button
          type="button"
          className="flex gap-1 text-center px-6 py-2 border-2 border-red-600 text-red-600 font-semibold text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out shadow-lg hover:shadow-none mt-2 "
          // onClick={}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductResume;
