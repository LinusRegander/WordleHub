const GridBoard = ({ grid }) => {
  return (
    <div id="grid-wrapper" style={wrapperStyle}>
      {grid}
    </div>
  );
};

const wrapperStyle = {
  display: 'grid',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center'
};

export default GridBoard;
