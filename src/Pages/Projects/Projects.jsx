import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Some Movies",
    description: "A beautiful landing page app show movie and his detalis and can put it in favourite page",
    image: "../../../public/img//movie.jpg",
    tags: ["React", "Bootstrap 5", "React-Router-Dom","Redux-toolkit","React-Icons"],
    demoUrl: "https://movies-phi-lemon.vercel.app/",
    githubUrl: "https://github.com/mostafa519?tab=repositories",
  },
  {
    id: 2,
    title: "Clothes Shop",
    description:
      "Full-featured Clothes Shop platform with user authentication ",
    image: "../../../public/img/clothes.jpeg",
    tags: ["React", "Bootstrap 5", "React-Router-Dom","Redux-toolkit","React-Icons","MongoDB","FireBase"],
    demoUrl: "https://myclothes-shop.vercel.app/Register",
    githubUrl: "https://github.com/mostafa519?tab=repositories",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform is Responsive Web Design",
    image: "../../../public/img/ecommerce-2015.jpg",
    tags: ["React", "Bootstrap 5", "React-Router-Dom","Redux-toolkit","Redux","Rest APIs","React-Icons"],
    demoUrl: "https://e-commerce-five-lilac.vercel.app/",
    githubUrl: "https://github.com/mostafa519?tab=repositories",
  },{
    id: 4,
    title: "Some Projects",
    description: "A beautiful landing page app show Movies ,Articles and Products",
    image: "../../../public/img/appicon.png",
    tags: ["React", "Bootstrap 5", "React-Router-Dom","Redux-toolkit","React-Icons"],
    demoUrl: "https://someprojects.vercel.app/",
    githubUrl: "https://github.com/mostafa519?tab=repositories",
  },
  {
    id: 5,
    title: "Weather",
    description:
      "Full-featured Weather site ,Can show the weather of your Country",
    image: "../../../public/img/weather.jpg",
    tags: ["React", "HTML/CSS", "material UI","Axios"],
    demoUrl: "https://weather-mostafa519.vercel.app/",
    githubUrl: "https://github.com/mostafa519?tab=repositories",
  },
  {
    id: 6,
    title: "Booking Clone",
    description:
      "Look like Booking site ",
    image: "../../../public/img/booking.jpg",
    tags: ["HTML", "Sass/CSS 5", "JavaScript","Bootstrap"],
    demoUrl: "https://netflix-clone-react-t4l7.vercel.app/",
    githubUrl: "https://github.com/mostafa519?tab=repositories",
  },
];

 const Projects  = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mostafa519"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projects;