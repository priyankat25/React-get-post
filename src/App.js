import axios from "axios";
import React, { useState } from "react";

const App = () => {
  //Get Request - String
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    // document.getElementById("para").innerHTML = response;
    document.getElementById("para").innerHTML = response.data;
  };

  //Post Request - String
  const data = "Hello";

  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para1").innerHTML = response.data;
  };

  //Post request - Form

  const [formData, setFormData] = useState("");

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para2").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br />
      <br />

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para1"></p>

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};

export default App;
