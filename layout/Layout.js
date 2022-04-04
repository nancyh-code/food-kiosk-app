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
      <div className="md:flex mt-4">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
