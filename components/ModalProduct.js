import Image from "next/image";
import useKiosk from "../hooks/UseKiosk";
import { quantityFormatting } from "../helpers/index";

const ModalProduct = () => {
  const { product, handleChangeModal } = useKiosk();
  return (
    <div
      className="fixed inset-0  w-full h-full z-20 bg-black bg-opacity-80 duration-300 overflow-y-auto"
      onClick={() => handleCloseModal()}
    >
      <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-1 sm:mx-auto opacity-100 md:inset-36">
        <div
          className="mt-20 relative bg-white shadow-lg rounded-md text-gray-900 z-20"
          onClick={handleChangeModal}
        >
          <header className="flex items-center justify-end p-1">
            <button className="focus:outline-none" onClick={handleChangeModal}>
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
          <div className="md:flex gap-10">
            <div className="md:w-1/3 p-1">
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
            </div>
          </div>
          <footer className="flex justify-center p-2">
            <button
              className="bg-red-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 "
              onClick={handleChangeModal}
            >
              Go back
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
