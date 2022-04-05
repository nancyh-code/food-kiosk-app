import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Fresh Coffee - {page}</title>
        <meta name="description" content="Kiosco Cafeterìa" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="md:flex ">
        <aside className="md:w-3/12 xl:w-1/4 2xl:w-1/5 bg-slate-700">
          <Sidebar />
        </aside>
        <main className="md:w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
