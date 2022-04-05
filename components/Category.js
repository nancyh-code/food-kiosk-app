import Image from "next/image";

const Category = ({ category }) => {
  const { name, icon, id } = category;
  return (
    <div className="flex items-center gap-5 w-full border p-5 hover:bg-amber-50 vh-screen ">
      <Image
        src={`/assets/img/icon_${icon}.svg`}
        alt="Imagen de icono"
        width={40}
        height={40}
        className="ml-5"
      />
      <button
        type="button"
        className="text-xl font-extrabold hover:cursor-pinter text-amber-400 "
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
