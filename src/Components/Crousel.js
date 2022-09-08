import { findByLabelText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getTrendingCoins } from "../Api/api";

const Crousel = () => {
    const [trendingCoins, settrendingCoins] = useState([]);
    const fetchAllCoins = async () => {
        let res = await fetch(getTrendingCoins("pkr"));
        let data = await res.json();
        settrendingCoins(data);
        // console.log(trendingCoins);
    };

    const handleDragStart = (e) => e.preventDefault();
    const coins = trendingCoins.map((coin) => {
        return (
            <Link to={`/Coin/${coin.id}`} className="CoinLink crLink" >
                <CoinIcon src={coin.image} alt={coin.id}/>
            </Link>
        );
    });
    useEffect(() => {
        fetchAllCoins();
    }, []);

    const responsiveCoins = {
        0: {
            items: 2,
        },
        480: {
            items: 4,
        },
    };
    return (
        <div className="section_spacing text_center">
            <AliceCarousel
                mouseTracking
                autoPlay
                autoPlayInterval={1000}
                autoPlayDuration={1500}
                infinite
                disableButtonsControls
                renderPrevButton
                responsive={responsiveCoins}
                items={coins}
            />
        </div>
    );
};

const CoinIcon = styled.img`
    height: 3rem;
`;
export default Crousel;
