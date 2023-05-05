import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './draggable-list.css';
import DraggableListItem from './DraggableListItem';

const DraggableList = props => {

  const [ data, setData ] = useState(props.data);
  const [ dragStartIndex, setDragStartIndex ] = useState(null);

  // get index of draged item
  const onDragStart = (index) => setDragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex) => {
    //console.log(dropIndex);
    // get dragged item
    const dragItem = data[dragStartIndex]

    // delete draged item in list
    const list = [...data];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      setData([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length)
      ])
    } else {
      setData([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length)
      ])
    }
  }

  return (
    <ul className='draggable-list'>
      { 
        data.map((item, index) => (
          <DraggableListItem 
            key={index}
            index={index}
            onDragStart={(index) => onDragStart(index)}
            onDrop={(index) => onDrop(index)}
          >
            {
              props.renderItemContent(item)
            }
          </DraggableListItem>
        ))
      }
      {
        /* 
          add last item so you can drag item to last position
          last item dont need onDragStart because it can not be dragged
        */
        <DraggableListItem 
          key={data.lenght}
          draggable={false}
          index={data.lenght}
          onDrop={(index) => onDrop(index)}
        />
      }
    </ul>
  )
}

DraggableList.propTypes = {
  data: PropTypes.array,
  renderItemContent: PropTypes.func
}

export default DraggableList
