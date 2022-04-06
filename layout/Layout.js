import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import useKiosk from "../hooks/UseKiosk";
import ModalProduct from "../components/ModalProduct";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, page }) => {
  const { modal } = useKiosk();
  return (
    <>
      <Head>
        <title>Fresh Coffee - {page}</title>
        <meta name="description" content="Kiosco Cafeterìa" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="md:flex ">
        <aside className="md:w-3/12 xl:w-1/4 2xl:w-1/5 bg-slate-800">
          <Sidebar />
        </aside>
        <main className="md:w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10 mt-5">{children}</div>
          {modal && <ModalProduct />}
        </main>
      </div>
      <ToastContainer />
    </>
  );
};

export default Layout;
