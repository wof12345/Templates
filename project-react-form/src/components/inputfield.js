function Input(props) {
    return (
        <div className={`inputContainer ${props.container}`}>
           <label htmlFor={props.input}>{props.label}</label>
           <input type={props.type} name={props.input} id={props.input} placeholder={props.placeholder}/>
        </div>
  
    );
  }
  
  export default Input;