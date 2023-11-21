import React from "react";
import Navigate from "./Navigate";
import Story from "./Story";
import Content from "./Content";
import Message from "./Message";

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="row py-3">
          <div className="col-2 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Navigate />
          </div>
          <div class="tab-content row col" id="v-pills-tabContent">
            <div className="col-8">
              <Story />
              <Content />
            </div>
            <div className="col">
              <Message />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
