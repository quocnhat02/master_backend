import React from 'react';

const tags = [
  {
    id: 1,
    name: 'HTML + CSS',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'orange',
  },
  {
    id: 3,
    name: 'Web Design',
    color: 'green',
  },
  {
    id: 4,
    name: 'Git and Github',
    color: 'red',
  },
];

const Card = () => {
  return (
    <div
      style={{
        border: '3px solid black',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'antiquewhite',
      }}
    >
      <div
        style={{
          width: '100%',
        }}
      >
        <img
          src='https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg'
          alt=''
          width={'100%'}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0.75em 0.5em',
        }}
      >
        <span
          style={{
            fontSize: '1.4em',
            fontWeight: 'bold',
          }}
        >
          Nhat Nguyen
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro est numquam neque natus quia, ipsum placeat libero unde
          molestiae deserunt harum vero
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gap: '0.5em',
            padding: '0.25em 0.5em',
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag.id}
              style={{
                padding: '5px 10px',
                backgroundColor: tag.color,
                borderRadius: '0.5em',
                color: 'white',
              }}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
