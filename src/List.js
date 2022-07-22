import React from 'react';

const List = ( { people } ) => {
  return (
    <>
      <h2>list component </h2>   
      
      {people.map(person => (
              <article class="person" key={ person.id }>
                <img src={person.image} alt={person.name} />
                <div>
                    <h4>{person.name}</h4>
                    <p>{person.age}</p>
                </div>
              </article>
        ))}
    </>
  );
};

export default List;
