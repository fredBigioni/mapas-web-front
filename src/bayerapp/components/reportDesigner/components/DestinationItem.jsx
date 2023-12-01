export const DestinationItem = ({ handleDrop, children}) => {
    
    const handleDragOver = (e) => {
        e.preventDefault();
        // console.log(e)
        }

  return (
            <div onDrop ={ handleDrop } onDragOver={ handleDragOver } >
                {children}
            </div>
  )

}
