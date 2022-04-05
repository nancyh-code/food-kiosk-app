import Image from "next/image";
import useKiosk from "../hooks/UseKiosk";

const Category = ({ category }) => {
  const { name, icon, id } = category;
  const { handleClickCategory, currentCategory } = useKiosk();

  return (
    <button
      type="button"
      className={`${
        currentCategory?.id === id ? "bg-amber-50" : ""
      } text-xl font-extrabold hover:cursor-pinter text-amber-400  flex items-center gap-5 w-full border p-5 hover:bg-amber-50 vh-screen`}
      onClick={() => handleClickCategory(id)}
    >
      <Image
        src={`/assets/img/icon_${icon}.svg`}
        alt="Imagen de icono"
        width={40}
        height={40}
        className="ml-5"
      />

      {name}
    </button>
  );
};

export default Category;
