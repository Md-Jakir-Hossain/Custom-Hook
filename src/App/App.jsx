import React from "react";
import "./App.css";
import Showdata from "./../Showdata/Showdata";
import useFetch from "./../Hooks/useFetch";

const App = () => {
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const { data: data1, error: error1 } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data: data2, error: error2 } = useFetch(
    "https://jsonplaceholder.typicode.com/comment"
  );
  const { data: data3, error: error3 } = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  const { data: data4, error: error4 } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const { data: data5, error: error5 } = useFetch(
    "https://jsonplaceholder.typicode.com/user"
  );

  return (
    <>
      <h1>Fetching Data using Custom Hook</h1>
      <div className="container">
        <div className="single">
          <h3>Todos Data</h3>
          {error && <h2>{error}</h2>}
          {data.slice(0, 10).map((item) => (
            <Showdata item={item} />
          ))}
        </div>

        <div className="single">
          <h3>Posts Data</h3>
          {error1 && <h2>{error1}</h2>}
          {data1.slice(0, 10).map((item) => (
            <Showdata item={item} />
          ))}
        </div>

        <div className="single">
          <h3>Comments Data</h3>
          {error2 && <h2>{error2}</h2>}
          {data2.slice(0, 10).map((item) => (
            <Showdata item={item} />
          ))}
        </div>

        <div className="single">
          <h3>Albums Data</h3>
          {error3 && <h2>{error3}</h2>}
          {data3.slice(0, 10).map((item) => (
            <Showdata item={item} />
          ))}
        </div>

        <div className="single">
          <h3>Photos Data</h3>
          {error4 && <h2>{error4}</h2>}
          {data4.slice(0, 10).map((item) => (
            <Showdata item={item} />
          ))}
        </div>

        <div className="single">
          <h3>Users Data</h3>
          {error5 && <h2>{error5}</h2>}
          {data5.slice(0, 10).map((item) => (
            <Showdata item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
