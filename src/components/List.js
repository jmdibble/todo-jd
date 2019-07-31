import React from 'react';

import ListItem from './ListItem';

const List = props => {
  return (
    <div>
      {props.items.map((item, index) => (
        <ListItem
          index={index}
          deleteItem={props.deleteItem}
          key={index}
          item={item}
        />
      ))}
    </div>
  );
};

export default List;
