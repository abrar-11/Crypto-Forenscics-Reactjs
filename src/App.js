import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { store } from "./App/store";
// import { Provider } from "react-redux";

import 'react-alice-carousel/lib/alice-carousel.css';
import Crypto from "./Pages/Crypto";

const App = () => {
    return (
        // <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coin/:id" element={<Crypto />} />
                </Routes>
            </BrowserRouter>
        // </Provider>
    );
};

export default App;
