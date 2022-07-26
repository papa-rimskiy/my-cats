import React from "react";
import Content from "./Content";
import Header from "./Header";

const App = () => {
  const main = "main";
  return (
    <div className="app">
      <Header check={main} />
      <Content />
    </div>
  );
};

export default App;