import React from "react";
import style from "./nav.module.css";
import Home from "../home/Home";
import Search from "../search/Search";
import Explore from "../explore/Explore";
import Post from "../post/Post";
import Profile from "../profile/Profile";

const Navigation = () => {
    return (
        <>
            <style>
                .nav-pills .button.active, .nav-pills .show &gt; .button {"{"}
                color: #fff; background-color: #A5A5A5;
                {"}"}
                .nav-pills .button {"{"}
                background-color: #ffffff53; color: #333;
                {"}"}
            </style>
            <div className="container">
                <section className="row py-3">
                    <div className="col-sm-2">
                        <div className={`${style.navigation} text-center`}>
                            <img
                                src={require("../../assets/image/FuntechGramLogo.png")}
                                alt="Logo"
                                className="m-3"
                            />
                            <div className="p-2">
                                <div
                                    className="nav flex-column nav-pills"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        className={`button active ${style.btn}`}
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-house p-2 h4"></i>
                                            <h6>Home</h6>
                                        </div>
                                    </button>
                                    <button
                                        className={`button ${style.btn}`}
                                        id="v-pills-Search-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Search"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-Search"
                                        aria-selected="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-search p-2 h4"></i>
                                            <h6>Search</h6>
                                        </div>
                                    </button>
                                    <button
                                        className={`button ${style.btn}`}
                                        id="v-pills-Explore-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Explore"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-Explore"
                                        aria-selected="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-grid-1x2 p-2 h4"></i>
                                            <h6>Explore</h6>
                                        </div>
                                    </button>
                                    <button
                                        className={`button ${style.btn}`}
                                        id="v-pills-Chat-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Chat"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-Chat"
                                        aria-selected="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-chat p-2 h4"></i>
                                            <h6>Chat</h6>
                                        </div>
                                    </button>
                                    <button
                                        className={`button ${style.btn}`}
                                        id="v-pills-Create-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Create"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-Create"
                                        aria-selected="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-plus-square p-2 h4"></i>
                                            <h6>Post</h6>
                                        </div>
                                    </button>
                                    <button
                                        className={`button ${style.btn}`}
                                        id="v-pills-Profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-Profile"
                                        aria-selected="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person-circle p-2 h4"></i>
                                            <h6>Profile</h6>
                                        </div>
                                    </button>
                                    <button
                                        className={`button ${style.setting} fixed-bottom m-2`}
                                        id="v-pills-Setting-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-Setting"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-Setting"
                                        aria-selected="false"
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-gear p-2 h4"></i>
                                            <h6>Setting</h6>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm tab-content" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                            tabIndex={0}
                        >
                            <Home />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Search"
                            role="tabpanel"
                            aria-labelledby="v-pills-Search-tab"
                            tabIndex={0}
                        >
                            <Search />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Explore"
                            role="tabpanel"
                            aria-labelledby="v-pills-Explore-tab"
                            tabIndex={0}
                        >
                            <Explore />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Chat"
                            role="tabpanel"
                            aria-labelledby="v-pills-Chat-tab"
                            tabIndex={0}
                        >
                            <div className={`${style.blur}`}>Chat</div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Create"
                            role="tabpanel"
                            aria-labelledby="v-pills-Create-tab"
                            tabIndex={0}
                        >
                            <Post />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-Profile-tab"
                            tabIndex={0}
                        >
                            <Profile />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Setting"
                            role="tabpanel"
                            aria-labelledby="v-pills-Setting-tab"
                            tabIndex={0}
                        >
                            <div className={`${style.blur}`}>Setting</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Navigation;
