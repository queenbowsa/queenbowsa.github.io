import { FaArrowDown } from "react-icons/fa6";
import me from "../../assets/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="container min-h-screen md:px-35 text-left max-w-9/10 pt-20"
    >
      {/* Top */}
      <div className="flex justify-between mb-4">
        {/* Top left */}
        <div className="p-2 flex-grow basis-2/3 self-center">
          <p className="text-gray-400 mt-4">Software Engineer</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello I'm <br />
            <span className="text-primary">Dani Bowser</span>
          </h1>
          <p className="text-gray-500 max-w-md text-sm mt-4">
            From backend systems to user-facing tools, I’ve grown from building
            for the machine to building for the human. I work full stack, design
            with care, and dive into game development and human computer
            interaction to better understand how systems and people interact—now
            and in the future. I’m driven by a deep curiosity for computer
            science—both as a discipline and a tool for impact.
          </p>

          <div className="flex justify-start gap-4 mt-6 self-center">
            <a
              href="https://drive.google.com/file/d/1tn95t23HlmtpsznrUlLhrlt3S_FAgPEu/view?usp=sharing"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>

            <a
              href="https://github.com/queenbowsa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-primary rounded-full hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5 text-primary" />
            </a>

            <a
              href="https://www.linkedin.com/in/danielle-bowser/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-primary rounded-full hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Top right */}
        <div className="p-2 flex-grow basis-1/3 self-center">
          <div className="flex-1 flex justify-center md:mt-0 relative">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-6 border-double border-primary shadow-lg ">
              <img
                src={me}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="p-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-primary">7</h3>
            <p className="text-sm text-muted-foreground">Years of experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">3</h3>
            <p className="text-sm text-muted-foreground">
              Debug ducks consulted
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">2</h3>
            <p className="text-sm text-muted-foreground">
              On-staff peer programmers (my cats)
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">12k+</h3>
            <p className="text-sm text-muted-foreground">
              Semicolons typed intentionally
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <FaArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
