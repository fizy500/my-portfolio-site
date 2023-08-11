import { logos } from "./data";
export function ArticlesTemplate() {
  return (
    <div>
      {logos.map((logo) => {
        return (
          <div
            className='rounded-sm flex items-center h-fit border border-dotted border-purple-400 mb-4 py-5 px-6 '
            key={logo.id}
          >
            <img src={logo.image} alt={logo.name} width='150px' />
            <p className='text-white px-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        );
      })}
    </div>
  );
}

export function ProjectsTemplate() {
  return (
    <div className='flex flex-col'>
      <img src='' alt='' />
      <div className=''>These are my projects</div>
    </div>
  );
}
