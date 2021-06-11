function Xe(props) {
  // console.log(props);
  return (
    <div className="App">
      <h3 style={{ color: props.color }}>Đây là cái Xe màu {props.value}</h3>
    </div>
  );
}

export default Xe;
