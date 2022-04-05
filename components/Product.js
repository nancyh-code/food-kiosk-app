import Image from "next/image";
import { quantityFormatting } from "../helpers/index";

const Product = ({ product }) => {
  const { name, price, image } = product;
  console.log(product);
  return (
    <div className="border rounded-lg md:shadow-xl">
      <Image
        src={`/assets/img/${image}.jpg`}
        alt={`Imagen de ${name}`}
        width={300}
        height={400}
        className="rounded-lg rounded-b-none"
      />
      <div className="p-2">
        <h3 className="tracking-normal truncate">{name}</h3>
        <div className="flex items-center justify-between  md:p-1 md:mx-4">
          <p className=" font-black text-lg text-amber-400">
            {quantityFormatting(price)}
          </p>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-amber-50 p-2 rounded-lg text-sm font-bold uppercase"
            onclick={()}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
