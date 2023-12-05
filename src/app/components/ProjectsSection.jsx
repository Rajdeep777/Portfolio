"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Recipe Application",
    description: "I have successfully created and launched a dynamic Food Recipe Application hosted on Netlify. By utilizing Axios, I've ensured smooth communication with the Meal DB API, enhancing the user experience and making recipe discovery more convenient.",
    image: "/images/projects/foodrecipe.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Food-Recipe-App",
    previewUrl: "https://food-recipes-application.netlify.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "The E-commerce website was built using Next.js for a highly performant and responsive user experience. It seamlessly integrated with Sanity.io for efficient product management, enabling easy addition and editing of products.",
    image: "/images/projects/ecomm.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Rajdeep777/E-Commerce-NextJS",
    previewUrl: "https://e-commerce-next-js-dusky.vercel.app/",
  },
  {
    id: 3,
    title: "Bookstore Application",
    description: "Book-Hub is an online React web application where the customer can purchase books online. Through this book store the users can search for a book by its title and later can add to the shopping cart and finally purchase using credit card transaction.",
    image: "/images/projects/bookstore.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Bookstore-App",
    previewUrl: "https://online-bookstore-app.netlify.app/",
  },
  {
    id: 4,
    title: "DigiProd",
    description: "This is an Next.js application of digital Products",
    image: "/images/projects/digiprod.png",
    tag: ["All", "Full Stack"],
    gitUrl: " https://github.com/Rajdeep777/DigiProd-NextJS",
    previewUrl: "https://digital-product-mu.vercel.app/",
  },
  {
    id: 5,
    title: "E-Commerce Online Store",
    description: "This is an E-commerce online store website",
    image: "/images/projects/onlinestore.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/E-Commerce-Website",
    previewUrl: "https://ecom-onlinestore.netlify.app/",
  },
  {
    id: 6,
    title: "CarDekho",
    description: "This is a React application which is selling cars",
    image: "/images/projects/car.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Rajdeep777/CarDekho",
    previewUrl: "https://cardekho-g6mq.onrender.com",
  },
  {
    id: 7,
    title: "YouTube Clone",
    description: "This is YouTube Clone created using React.js which styles is based on GitHub Primer theme",
    image: "/images/projects/youtube.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/YouTube-Clone",
    previewUrl: "https://youtubeflix.netlify.app/",
  },
  {
    id: 8,
    title: "Habit Tracking App",
    description: "This is a React application which is tracking the daily habits",
    image: "/images/projects/habit.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Habit-Tracking-App",
    previewUrl: "https://habit-tracking-app-rajdeep.netlify.app/",
  },
  {
    id: 9,
    title: "Contact List Application",
    description: "This is a React application which is stores the list of contacts of users",
    image: "/images/projects/contact.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Contact-List",
    previewUrl: "https://contact-list-rajdeep.netlify.app/",
  },
  {
    id: 10,
    title: "Personalized News Hub",
    description: "This is a React application that provides users with news articles tailored to their preferences",
    image: "/images/projects/news.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Personalized-News-Hub",
    previewUrl: "https://personalized-news-hub.netlify.app/",
  },
  {
    id: 11,
    title: "Task Management System",
    description: "This is a Task Management System which is managing the task according to the users",
    image: "/images/projects/taskmanagement.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/Rajdeep777/Task-Management-System",
    previewUrl: "https://task-management-system-8i67.onrender.com",
  },
  {
    id: 12,
    title: "Inventory Management System",
    description: "This is a backend project built with Node.js and Express.js, incorporating authentication, cookie parsing, session management, Express.js layout, and Multer for handling file uploads.",
    image: "/images/projects/inventory.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Rajdeep777/Inventory-Management-System",
    previewUrl: "https://inventory-management-system-ll4o.onrender.com/login",
  },
  {
    id: 13,
    title: "Employee Review System",
    description: "This is an Employee Review System which allow employee to review co-employees and this is used to validate the user’s identity and grant permission to access.",
    image: "/images/projects/employee.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Rajdeep777/Employee_Review_System",
    previewUrl: "https://employeereviewsystem-l4pg.onrender.com",
  },
  {
    id: 14,
    title: "Issue Tracker",
    description: "This is a React application which is tracking the issues which is created by users",
    image: "/images/projects/issue.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Rajdeep777/Issue_Tracker",
    previewUrl: "https://issuetracker-4u1i.onrender.com",
  },
  {
    id: 15,
    title: "Calculator App",
    description: "This is a React application which is used to compute the arithemetic operation",
    image: "/images/projects/calculator.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Calculator",
    previewUrl: "https://calculator-rajdeep.netlify.app/",
  },
  {
    id: 16,
    title: "Stopwatch App",
    description: "This app provides a convenient and straightforward way for users to measure time intervals with precision. It features a clean and intuitive user interface with essential stopwatch functionalities, making it easy to start, stop, and reset the timer.",
    image: "/images/projects/stopwatch.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/Stopwatch",
    previewUrl: "https://rajdeep777.github.io/Stopwatch/",
  },
  {
    id: 17,
    title: "IMDB Clone",
    description: "This project gives a basic understand on how API's work how we can use fetch(). I loved building this project because unlike using node or mongo the interaction between the elements was to be done with Javascript so this project helped me understand the DOM node structure very well regarding what elements are visible to other writing neat code because the project simply forces you to do so otherwise it all get's messy and difficult to debug",
    image: "/images/projects/imdb.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/Rajdeep777/IMDB-Clone",
    previewUrl: "https://rajdeep777.github.io/Stopwatch/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center flex-wrap items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
