const TabButton = ({handleClick, idx}) => {
  return (
    <>
      <button
            className="m-2 btn btn-dark" 
            onClick={() => handleClick(idx)}
      >Tab</button>
    </>
  );
}

export default TabButton;