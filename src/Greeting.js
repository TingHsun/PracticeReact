function Greeting(prop) {
  const name = prop.name ? `${prop.name.firstName} ${prop.name.lastName}` : "Unknown";
  
  return (
    <p>
      Hello, I'm {name}. I have already written React!
    </p>
  );
}

export default Greeting;
