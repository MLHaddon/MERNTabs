const RenderTab = ({label, content}) => {
  return (
    <>
      <div className="Jumbotron">
        <h1>{label}</h1>
        <p>{content}</p>
      </div>
    </>
  );
}

export default RenderTab;