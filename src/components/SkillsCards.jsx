/* eslint-disable react/prop-types */

function SkillsCards({props}) {
  return (
    <div className='bg-gray-900 rounded-sm w-[20%] h-1/2 flex flex-col justify-center'>
      <img src={props.image} alt={props.name} />
      <p className='text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        sunt, voluptates quibusdam suscipit earum, odit non voluptatum, modi ad
        ex iure soluta consequatur doloribus?
      </p>
    </div>
  );
}

export default SkillsCards;
