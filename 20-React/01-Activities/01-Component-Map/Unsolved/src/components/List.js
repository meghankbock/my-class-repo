import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {/* Map over the groceries from props and for each item render <li> tags with the item's name */
      props.groceries.map((item) => (
        <li 
          className="list-group-item" key={item.id}>
            {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
