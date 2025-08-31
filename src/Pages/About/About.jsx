import { Briefcase, Code, User } from "lucide-react"; 

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-12 items-center pt-9 ">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">I'm Front-End Developer</h3>
            <p className="text-muted-foreground">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="flex felx-col sm:felx-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get IN Touch
              </a>
              <a
                href="/Mustafa_Ali.Frontend_Developer.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-lef">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                        Creating responsive Websites and Web Applications with
                        modern Frameworks.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-lef">
                    <h4 className="font-semibold text-lg">UI/UX Designer</h4>
                    <p className="text-muted-foreground">
                        Design intuitive user interfaces and seamless user experiences.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-lef">
                    <h4 className="font-semibold text-lg">Project Management</h4>
                    <p className="text-muted-foreground">
                        Loading projects from conception to completion
                        with agile methodologies.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
