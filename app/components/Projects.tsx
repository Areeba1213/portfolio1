
import React from 'react';
import Heading from './Heading';
import  Card  from './Card';

const data = [
  {
    id: 0,
    title: 'E-commerce Website',
    desc: 'A website in which I use next.js, tailwind css, html',
    img: '/kidsparty4.jpg',
    tags: ['Typescript', 'Javascript', 'Tailwind CSS', 'Next.js'],
  },
  {
    id: 1,
    title: 'PORTFOLIO',
    desc: 'A simple portfolio in which I use html, css, bootstrap',
    img: '/bootstrap4.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Typescript'],
  },
  {
    id: 2,
    title: 'Static Interactive Resume',
    desc: 'A resume which I use nextjs, html, css, and typescript',
    img: '/reesume.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Typescript'],
  },
  {
    id: 3,
    title: 'Todo App',
    desc: 'A todo list app',
    img: '/todo.jpg',
    tags: ['HTML', 'Typescript', 'Javascript'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto pt-16">
      <Heading title="MY PROJECTS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

