function Home(props) {
  if (props.farmer) {
    const [producesList, setProducesList] = useState([]);
    const [updatedProducesList, setUpdatedProducesList] = useState([]);

    // const [searchChar, setSearchChar] = useState("");

    useEffect(() => {
      fetch("https://farm-soko-api-production.up.railway.app/produce")
        .then((res) => res.json())
          .then(listData => {
            setProducesList(listData)
            setUpdatedProducesList(listData)
            // console.log(listData)
          });
    },[]);

    useEffect(() => {
      setUpdatedProducesList(producesList);
    },[producesList]);

    function addNewProduce(newTransactionObj) {
      const updatedTransactions = [...producesList, newTransactionObj];
      setProducesList(updatedTransactions);
    }

    function searchProduce(newSearchString) {
      const newFilteredList = producesList.filter(transaction => {
        if(newSearchString === "") {
          return true;
        } 
        return transaction.description.toLowerCase().split(" ").join("").includes(newSearchString)
      });

      setUpdatedProducesList(newFilteredList);
    }

    return (

      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>Welcome, farmer!</h2>
        </div>
        <ProduceContainer searchProduce={searchProduce} producesList={updatedProducesList} addNewProduce={addNewProduce} />
      </div>
      
    );
  } else if (props.consumer) {
    return (
      <h1>Welcome, consumer!</h1>
    );
  } else {
    return <h2 style={{textAlign:"center", color: "mediumpurple"}}>Click Sign Up or Login. <br/>Consumers and Farmers Portals Available</h2>;
  }
}

export default Home;