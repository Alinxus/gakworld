'use client'
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      id: 1,
      imageUrl: 'https://example.com/project1.jpg',
      title: 'Project 1',
      link: '/project/1',
    },
    {
      id: 2,
      imageUrl: 'https://example.com/project2.jpg',
      title: 'Project 2',
      link: '/project/2',
    },
    // Add more project data as needed
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Projects
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link href={project.link} key={project.id} legacyBehavior>
              <a className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
                    View Project
                  </button>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

<userStyle>Normal</userStyle>