const steps = [
  { icon: "📤", title: "Upload License", desc: "Submit your license details easily." },
  { icon: "📈", title: "Get Valuation", desc: "We'll provide an instant price." },
  { icon: "💰", title: "Get Paid", desc: "Receive money within 24 hours." },
];

const HowItWorks = () => (
  <section className="py-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-10">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-around gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="p-6 border rounded shadow hover:shadow-lg transition">
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default HowItWorks;
