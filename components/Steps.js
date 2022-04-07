import { useRouter } from "next/router";
import useKiosk from "../hooks/UseKiosk";

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Resumen del Pedido", url: "/orderSummary" },
  { step: 3, name: "Total a pagar", url: "/total" },
];

const Steps = () => {
  const router = useRouter();
  const { handleChangeStep, step } = useKiosk();

  const calculateProgress = () => {
    // return (step / 3) * 100;
    let valor;
    if (step === 1) {
      valor = 3;
    } else if (step === 2) {
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
              handleChangeStep(st.step);
            }}
            className="tex-s md:text-lg font-semibold italic text-slate-700 mb-4"
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
