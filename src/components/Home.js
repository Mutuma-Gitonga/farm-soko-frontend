function Home(props) {
  if (props.farmer) {
    return (
      <h1>Welcome, farmer!</h1>
    );
  } else if (props.consumer) {
    return (
      <h1>Welcome, consumer!</h1>
    );
  } else {
    return <h1>Click Sign Up or Login: Consumers & Farmers Portals Available</h1>;
  }
}

export default Home;