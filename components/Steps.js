import { useRouter } from "next/router";

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Resumen del Pedido", url: "/orderSummary" },
  { step: 3, name: "Total a pagar", url: "/total" },
];

const Steps = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between">
        {steps.map((step) => (
          <button
            onClick={() => router.push(step.url)}
            className="tex-s md:text-lg font-semibold italic text-slate-700 mb-4"
            key={step.step}
          >
            {step.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Steps;
