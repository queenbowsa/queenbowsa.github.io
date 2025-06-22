import { GiBrain } from "react-icons/gi";
import { FaCode, FaFileAlt } from "react-icons/fa";
import { HiCpuChip } from "react-icons/hi2";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          whoami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-muted-foreground leading-relaxed pt-8">
            <p>
              With 7 years of experience in software development, I’ve had the
              opportunity to work across a wide range of technologies and
              problem domains. I’ve built internal tools using React,
              TypeScript, and Blazor; architected backend systems in C# and
              .NET; and collaborated across teams to deliver solutions that are
              scalable, maintainable, and user-friendly.
            </p>

            <p>
              My academic background bridges low-level systems and
              human-centered design — a BS in Computer Science from JMU with a
              focus on C, assembly, and operating systems, and an MS in Computer
              Science from Georgia Tech specializing in Interactive
              Intelligence. Through this, I’ve explored game AI, human-computer
              interaction, and machine learning. I’m especially drawn to
              projects where technical depth meets thoughtful design — and where
              building with empathy makes all the difference.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            <Card
              icon={<FaCode className="h-6 w-6 text-primary" />}
              title="Full Stack Development"
              description="Building scalable web applications using C#, .NET, React, TypeScript, and Blazor with a focus on performance and maintainability."
            />

            <Card
              icon={<GiBrain className="h-6 w-6 text-primary" />}
              title="AI & Interactive Systems"z
              description="Applying concepts from game AI, machine learning, and HCI to design smarter, more human-centered technologies."
            />

            <Card
              icon={<HiCpuChip className="h-6 w-6 text-primary" />}
              title="Systems & Architecture"
              description="Grounded in systems-level knowledge from C and assembly to cloud-native services — balancing low-level understanding with high-level design."
            />

            <Card
              icon={<FaFileAlt className="h-6 w-6 text-primary" />}
              title="Developer Experience"
              description="Advocating for clean code, strong documentation, and reusable patterns to improve collaboration, onboarding, and engineering velocity."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable card component
const Card = ({ icon, title, description }) => (
  <div className="gradient-border p-6 rounded-xl shadow-sm card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">{icon}</div>
      <div className="text-left">
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  </div>
);
