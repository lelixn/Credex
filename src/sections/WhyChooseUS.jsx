const features = [
  { title: "Quick Payouts", desc: "Payments processed within 24 hours." },
  { title: "Top Valuations", desc: "We offer the best market rates." },
  { title: "Secure Process", desc: "100% secure and verified transactions." },
  { title: "Trusted by 500+ Companies", desc: "A growing and trusted marketplace." },
];

const WhyChooseUs = () => (
  <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
    <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feat, idx) => (
        <div key={idx} className="p-4 bg-white dark:bg-gray-900 rounded shadow">
          <h3 className="font-semibold text-xl">{feat.title}</h3>
          <p className="text-sm mt-2">{feat.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default WhyChooseUs;
