import React from 'react';

const ListItem = props => {
  return (
    <div className='ListItem'>
      <p>{props.item}</p>
      <button onClick={() => props.deleteItem(props.index)}>Done</button>
    </div>
  );
};

export default ListItem;
