import { skills } from "../../data/skills.data";
import { imageMap } from "./utils/imageMap";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skills.map(({ icon, title, items }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-muted/10 p-6 text-left shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-md">
                {imageMap[icon]}
              </div>
              <h4 className="font-semibold text-lg">{title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="bg-muted text-foreground text-sm px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
