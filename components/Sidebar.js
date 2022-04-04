import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <Image
        width={300}
        height={90}
        src="/assets/img/logo.svg"
        alt="Imagen del logo"
      />
    </>
  );
};

export default Sidebar;
