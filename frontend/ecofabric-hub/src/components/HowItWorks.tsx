function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Clothes",
      description:
        "Upload a picture of your unused or old clothing.",
      icon: "📸",
    },
    {
      number: "02",
      title: "Explore Recommendations",
      description:
        "Our planned AI feature will help identify suitable options for your clothes.",
      icon: "🤖",
    },
    {
      number: "03",
      title: "Give Clothes a New Life",
      description:
        "Choose to donate, sell, or redesign your clothing.",
      icon: "♻️",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Three simple steps towards sustainable fashion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>

              <p className="text-sm font-semibold text-green-600 mb-2">
                STEP {step.number}
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;