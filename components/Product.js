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
            className="bg-red-500 hover:bg-red-600 text-amber-50 p-1 rounded-full text-s md:w-100 font-semibold w-24"
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
