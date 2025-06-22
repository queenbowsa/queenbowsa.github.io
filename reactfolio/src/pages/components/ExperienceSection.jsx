import { experiences } from "../../data/experience.data.js";
import { imageMap } from "./utils/imageMap.jsx";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-20">
        Work <span className="text-primary">Experience</span>
      </h2>

      <div className="relative mx-auto max-w-4xl mt-10">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 z-0" />

        {experiences.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const visual = imageMap[item.visualKey];
          const isImage = typeof visual === "string";

          return (
            <div
              key={idx}
              className={`relative flex items-start mb-16 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 h-full"></div>

              <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                <div className="w-15 h-15 border-4 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {isImage ? (
                    <img
                      src={visual}
                      alt={`${item.org} logo`}
                      className="w-11 h-11 object-contain"
                    />
                  ) : (
                    visual
                  )}
                </div>
              </div>

              <div className="w-1/2 px-6">
                <p className="text-sm mb-2">{item.date}</p>
                <div className="border rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm mb-2">{item.org}</p>
                  <ul className="list-disc list-inside text-sm space-y-1 text-left">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
