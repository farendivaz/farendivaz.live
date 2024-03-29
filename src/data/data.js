import PersonalWebsiteImage from "../assets/images/farendivaz.png";
import GithubFinderImage from "../assets/images/github-finder.png";
import MovieSearchImage from "../assets/images/movie-search.png";
import BlogImage from "../assets/images/graphcms_blog.png";

export const projects = [
  {
    id: 1,
    title: "Personal Website",
    imageSrc: PersonalWebsiteImage,
    imageAlt: "Farendivaz Personal Website preview image",
    desc: "This is my first Personal website, which contains my portfolio and contact. I built this website with React, React router, and the styling is done with styled-components. This website is Deploy on Vercel. I would highly recommend Vercel because is the easiest platform to deploy a static website.",
    demo: "https://www.farendivaz.live",
    github: "https://github.com/farendivaz/farendivaz.live",
  },
  {
    id: 2,
    title: "Github Finder",
    imageSrc: GithubFinderImage,
    imageAlt: "Github Finder website preview image",
    desc: "I completed this project during React Front to Back 2022 by Brad Traversy on Udemy. I built this project with React & React Router and the styling is done with Tailwind and its framework DaisyUI. And connects with Github API to search for users and details about the selected user.",
    demo: "https://github-finder-farendivaz.vercel.app/",
    github: "https://github.com/farendivaz/github-finder",
  },
  {
    id: 3,
    title: "Movie Search",
    imageSrc: MovieSearchImage,
    imageAlt: "Movie search app preview image",
    desc: "I built this project with React and CSS. This project connects with OMDB API to search for movies and detail about the movie. This project is one of my first projects, also I learned how to fetch a third-party API in ReactJS and display the data in the Frontend.",
    demo: "https://movie-site-one.vercel.app/",
    github: "https://github.com/farendivaz/movie-site-app",
  },
  {
    id: 4,
    title: "GraphCMS Blog",
    imageSrc: BlogImage,
    imageAlt: "GraphCMS blog preview image",
    desc: "A fully dynamic blog with React and GraphCMS that uses GraphQL technology for querying data and performing mutations (or updates) to the content. The content of this blog is still dummy text, but probably I'll change it later.",
    demo: "https://blog-graphcms-three.vercel.app/",
    github: "https://github.com/farendivaz/blog-graphcms",
  },
];
