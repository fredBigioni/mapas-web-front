import {useState} from 'react'
import "./style.css"

export const DragableItem = ({children}) => {
    const [isDragging, setIsDragging] = useState(false)
    //onClick={setIsDragging(!isDragging)}

    const handleDragStart = () => {
      console.log("handleDragStart");
        setIsDragging(true);
    };

    const handleDragEnd = () => {
      console.log("handleDragEnd"); 
      setIsDragging(false);  
    };

  return (
    <div
        className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
        onDragStart = { handleDragStart }
        onDragEnd={ handleDragEnd }
        draggable        
    >    
        {/* isDragging = {isDragging.toString()} */}
        {children}
    </div>
  )
}
