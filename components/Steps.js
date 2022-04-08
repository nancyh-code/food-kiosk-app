import { useRouter } from "next/router";

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Selección", url: "/orders" },
  { step: 3, name: "Confirmación", url: "/total" },
];

const Steps = () => {
  const router = useRouter();

  const calculateProgress = () => {
    // return (step / 3) * 100;
    let valor;
    if (router.pathname === "/") {
      valor = 3;
    } else if (router.pathname === "/orders") {
      valor = 50;
    } else {
      valor = 100;
    }
    return valor;
  };

  return (
    <>
      <div className="flex justify-between">
        {steps.map((st) => (
          <button
            onClick={() => {
              router.push(st.url);
            }}
            className="tex-xs md:text-md font-semibold italic text-slate-700 mb-2"
            key={st.step}
          >
            {st.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-200 mb-5">
        <div
          className="rounded-full bg-amber-400 text-xs leading-none h-2 text-white"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
