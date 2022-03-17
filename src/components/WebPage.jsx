
const Contact = () => {
  return (
    <div className="App">
    <h1>COUNTER...</h1>

    <div className="myDiv">
      <button onClick={counterMinus}>-</button>
      <p> {state} </p>
      <button onClick={counterHandle}>+</button>
    </div>
  </div>
  );
};

export default Contact;