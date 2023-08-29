export const Square = ({children,updateBoard,isSelected,index}) => {
    const Class = `celda ${isSelected ? 'selected' : ''}`
    function handleClick() {
      updateBoard(index)
    }
    return (
      <div  onClick={handleClick} className={Class}>
      {children}
    </div>
    )
  }