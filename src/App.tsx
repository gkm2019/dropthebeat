import React from 'react';
import Main from './pages/Main';
import './App.css';

function App() {

    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //     fetch("/review/all")
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then(function (result){
    //             setData(result);
    //         })
    // }, []);

  return (
    <div className="App">
      <Main>

      </Main>
    </div>
  );
}

export default App;
