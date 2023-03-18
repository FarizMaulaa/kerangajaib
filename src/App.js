import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Kerang from "../src/R.jpg";
function App() {
  const [ide, setAkal] = useState("");
  const [hasil, setHasil] = useState("");

  const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI,
  });
  const openai = new OpenAIApi(config);

  const cariIde = async (e) => {
    e.preventDefault();
    const tulisanAi = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: ide,
      temperature: 0.5,
      max_tokens: 1000,
    });
    setHasil(tulisanAi.data.choices[0].text);
  };

  return (
    <div className=" bg-slate-800 h-screen w-screen">
      <div className="text-white">
        <h1 className="text-3xl font-bold text-white text-center ">
          Puja Kerang Ajaib
        </h1>
        <div className="items-center justify-center flex">
          <img className="m-3 rounded " src={Kerang} width="300px" />
        </div>

        <form onSubmit={cariIde}>
          <div className="justify-center items-center flex">
            <input
              type="text"
              placeholder="silahkan bertanya ?"
              onChange={(e) => setAkal(e.target.value)}
              className="input w-full max-w-xl m-3 text-white"
            />
          </div>
          <div className="justify-center items-center flex">
            <button className=" btn btn-dark m-3 justify-center items-center flex">
              tarik tuas
            </button>
          </div>
        </form>

        <p className="text-center">Jawaban : </p>
        <p className="m-5">{hasil}</p>
      </div>
    </div>
  );
}

export default App;
