import {useState} from 'react'

export const DragableItem = ({item, children,handleDragStart,handleDragEnd}) => {
  return (
    <div
        onDragStart = { () => handleDragStart(item) }
        onDragEnd={ () => handleDragEnd(item) }
        draggable        
    >           
        {children}
    </div>
  )
}
