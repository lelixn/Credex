const testimonials = [
  {
    name: "Priya Sharma", role: "IT Manager", company: "CodeCraft",
    quote: "SoftSell made it super easy to recover money from unused licenses."
  },
  {
    name: "John Doe", role: "Founder", company: "StartupBoost",
    quote: "Fast, reliable, and hassle-free. Highly recommended!"
  }
];

const Testimonials = () => (
  <section className="py-16 px-4 text-center bg-white dark:bg-gray-900">
    <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map((t, idx) => (
        <div key={idx} className="p-6 border rounded bg-gray-100 dark:bg-gray-800 shadow">
          <p className="italic mb-4">"{t.quote}"</p>
          <p className="font-bold">{t.name}</p>
          <p className="text-sm">{t.role}, {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;
