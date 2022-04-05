import Image from "next/image";
import useKiosk from "../hooks/UseKiosk";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useKiosk();
  return (
    <div className="pt-4">
      <Image
        width={300}
        height={90}
        src="/assets/img/logo.svg"
        alt="Imagen del logo"
      />
      <nav className="mt-8">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
