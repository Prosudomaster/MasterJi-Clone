

const Features = () => {
  const items = [
    { title: "Progress Tracking", desc: "Track projects and monitor learning progress."},
    { title: "Real World Tasks", desc: "Challenges that mirror industry workflows."},
    { title: "Peer Reviews", desc: "Receive valuable collaborative feedback."},
    { title: "Community", desc: "Support from mentors & TAs."},
    { title: "Trainings", desc: "Learn from industry experts."},
    { title: "Self Learning", desc: "Courses you can learn at your pace."},
    { title: "Writing", desc: "Technical writing improves your stack."},
    { title: "Proof of Work", desc: "Build your public portfolio."},
    { title: "Peerlist Recommendation", desc: "Stand out via peer recognition."}
  ];

  return (
    <section className="text-white max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-center text-4xl font-bold">Features</h2>
      <p className="text-center text-gray-400 mt-2">
        Everything you need to transform learning into real-world skills.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {items.map((f, i) => (
          <div key={i} className="bg-[#101015] hover:bg-gray-900 p-6 rounded-xl border border-gray-800">
            
            <div className="text-center p-6">

            <h3 className="text-lg font-semibold">{f.title}</h3>

            </div>
            <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
