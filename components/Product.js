import Image from "next/image";
import { quantityFormatting } from "../helpers/index";
import useKiosk from "../hooks/UseKiosk";

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal, modal } = useKiosk();
  const { name, price, image } = product;

  return (
    <div className="border rounded-lg md:shadow-xl">
      <Image
        src={`/assets/img/${image}.jpg`}
        alt={`Imagen de ${name}`}
        width={300}
        height={400}
        className="rounded-lg rounded-b-none"
      />
      <div className="p-2 ">
        <h3 className="tracking-normal truncate">{name}</h3>
        <div className="flex flex-col items-center justify-between md:flex-row mx-1">
          <p className=" font-black text-md md:text-lg text-amber-400 pr-1 ">
            {quantityFormatting(price)}
          </p>
          <button
            type="button"
            className="inline-block px-2 py-2.5 bg-red-600 font-semibold text-white text-xs  w-24 rounded-full leading-tight uppercase hover:bg-red-700 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              handleChangeModal();
              handleSetProduct(product);
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
