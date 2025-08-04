import React, { useState, ChangeEvent, FormEvent } from "react";
import { X } from "lucide-react";

interface Testimonial {
  name: string;
  message: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [input, setInput] = useState<Testimonial>({ name: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.name && input.message) {
      setTestimonials([{ ...input }, ...testimonials]);
      setInput({ name: "", message: "" });
    }
  };

  const handleRemove = (idx: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== idx));
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
          Testimonials
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mb-12 bg-white/5 p-8 rounded-xl shadow-lg flex flex-col gap-4 border border-white/10 backdrop-blur"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={input.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={input.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button
            type="submit"
            className="self-end px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Submit
          </button>
        </form>
        <div className="grid gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition group"
            >
              <button
                onClick={() => handleRemove(idx)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-400 transition"
                aria-label="Remove testimonial"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg font-bold text-white shadow">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-lg">{t.name}</span>
              </div>
              <p className="text-gray-200 italic">{t.message}</p>
            </div>
          ))}
          {testimonials.length === 0 && (
            <div className="text-center text-gray-400">No testimonials yet. Be the first to add one!</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;