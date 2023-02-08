// this is a normal list with using html

{/* <ul>
    <li>Ali: Developer</li>
    <li>Hakan: Designer</li>
    <li>Umut: Writer</li>
</ul> */}


// let's render this with jsx using map and filter methods

const people = [
    'Ali: Developer',
    'Hakan: Designer',
    'Umut: Writer'
]

export default function List() {
    const listItems = people.map(
        person => <li>{person}</li>
    )

    // made rendering

    return <ul>{listItems}</ul> 

    // and wrapped my component within ul
}


// we can filter these also

const development = people.filter(
    person => person.profession === 'developer'
)

// and mapping over

const listItems = design.map(person =>
    <li>
       <img
         src={getImageUrl(person)}
         alt={person.name}
       />
       <p>
         <b>{person.name}:</b>
         {' ' + person.profession + ' '}
         known for {person.accomplishment}
       </p>
    </li>
  );

return <ul>{listItems}</ul>;



// it basically looks like further

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const writing = people.filter(person =>
    person.profession === 'writer'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


