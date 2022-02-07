import { useState ,useEffect} from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  
  console.log("i run all the time");
  
  useEffect(()=>{
    console.log("run once");
  },[]);

  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("search for", keyword);
    }
  },[keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here"/>
      <h1 className={styles.title}>{counter}</h1>      
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
