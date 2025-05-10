const Contact = () => (
  <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
    <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
    <form className="max-w-xl mx-auto grid gap-4">
      <input className="p-3 border rounded" placeholder="Your Name" required />
      <input className="p-3 border rounded" type="email" placeholder="Email Address" required />
      <input className="p-3 border rounded" placeholder="Company" />
      <select className="p-3 border rounded">
        <option>License Type</option>
        <option>Windows</option>
        <option>MS Office</option>
        <option>Adobe</option>
      </select>
      <textarea className="p-3 border rounded" rows="4" placeholder="Message" />
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </section>
);
export default Contact;
