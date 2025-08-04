import React from "react";

interface Testimonial {
  name: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Kumar Mishra",
    message: " Hello everyone! I am Rahul Kumar Mishra, a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has been fueled by a love for coding and a desire to build innovative solutions that enhance user experiences. I am always eager to learn new technologies and improve my skills, striving to stay at the forefront of the ever-evolving web development landscape.",
  },
  // Add more testimonials here if you want
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-14 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Testimonials
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.03] hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg border-4 border-gray-800">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-xl">{t.name}</span>
              </div>
              <p className="text-gray-200 italic text-lg leading-relaxed">
                “{t.message}”
              </p>
              <div className="absolute -top-6 left-8 text-5xl text-blue-400/30 select-none pointer-events-none">“</div>
              <div className="absolute -bottom-6 right-8 text-5xl text-purple-400/30 select-none pointer-events-none">”</div>
            </div>
          ))}
        </div>
        {testimonials.length === 0 && (
          <div className="text-center text-gray-400 mt-10">No testimonials yet.</div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;