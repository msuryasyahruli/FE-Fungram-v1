import React from "react";
import Navigate from "./Navigate";
import Story from "./Story";
import Content from "./Content";
import Message from "./Message";

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="row">
          <div className="col-2 pt-3">
            <Navigate/>
          </div>
          <div className="col-6 pt-3 pb-3">
            <Story/>
            <Content/>
          </div>
          <div className="col pt-3">
            <Message/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
