import React from "react";
import style from "./nav.module.css";
import Home from "../home/Home";
import Search from "../search/Search";
import Explore from "../explore/Explore";
import Post from "../post/Post";
import Profile from "../profile/Profile";
import Chat from "../chat/Chat";
import Setting from "../setting/Setting";

const Navigation = () => {
    return (
        <>
            <style>
                .nav-pills .button.active, .nav-pills .show &gt; .button {"{"}
                color: #fff; background-color: #A5A5A5;
                {"}"}
                .nav-pills .button {"{"}
                background-color: #fff; color: #777;
                {"}"}
            </style>
            <div className="container">
                <section className="d-flex vh-100 align-items-center">
                    <div className="col-2 pe-4">
                        <div className={`${style.navigation} text-center`}>
                            <img
                                src={require("../../assets/image/FuntechGramLogoB.png")}
                                alt="Logo"
                                className="m-3 w-75"
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

                    <div className="col-10 tab-content" id="v-pills-tabContent">
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
                            <Chat />
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
                            <Setting />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Navigation;
