  function PP(props) {
    return (
        <div className={`container_pic ${props.container}`}>
            <img className={props.className} src={props.src} alt="" />
        </div>
  
    );
  }
  
  export default PP;