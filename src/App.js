import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  
  const [people, setPeople] = useState(data);

  return ( 
    <main>
      <section className="container">
        <h3>{ people.length } Birthdays Today</h3>
        <List people={ people } />
        { people.length > 0 && <button onClick={ () => { setPeople([]); }}>Clear All</button> }
        { people.length === 0 && <button onClick={ () => { setPeople(data); }}>Load List</button> }
      </section>
    </main>
   );
}

export default App;
