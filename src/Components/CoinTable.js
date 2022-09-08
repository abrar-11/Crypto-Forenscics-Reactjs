import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { getAllCoins } from "../Api/api";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useSelector } from "react-redux";
import { setAllCoins } from "../features/CoinsSlice";
import { useDispatch } from "react-redux";
import { CopyrightOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function CoinTable({ input }) {
    const classes = useStyles();
    const [allCoins, setallCoins] = useState([]);
    const [filtered, setfiltered] = useState(allCoins);
    let dispatch = useDispatch();
    const fetchAllCoins = async () => {
        const res = await fetch(getAllCoins("pkr"));
        const data = await res.json();
        // console.log(data);
        setallCoins(data);
        setfiltered(data);
        dispatch(setAllCoins(data));
    };

    useEffect(() => {
        // console.log("im changing " ,input);
        const filteredCoins = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(input.toLowerCase());
        });
        setfiltered(filteredCoins);
        // console.log(filtered);
    }, [input]);

    // let allCoins = useSelector(states=>console.log(states))
    const changeIntoPrice = (price) => {
        return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    const toDate = (dte) => {
        let date = new Date(dte);
        return date.toLocaleTimeString();
    };
    useEffect(() => {
        fetchAllCoins();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table
                className={classes.table}
                aria-label="simple table"
                style={{ backgroundColor: "#24204B", color: "#fff" }}
            >
                <TableHead>
                    <TableRow style={{ backgroundColor: "#5B39DB" }}>
                        <TableCell
                            className="rank"
                            style={{
                                color: "white",
                                width: "1rem",
                                border: "none",
                            }}
                        >
                            {" "}
                            Rank
                        </TableCell>
                        <TableCell
                            style={{ color: "white", border: "none" }}
                            align="left"
                        >
                            Coin
                        </TableCell>
                        <TableCell
                            style={{ color: "white", border: "none" }}
                            align="left"
                            className="mbHide"
                        >
                            Symbol
                        </TableCell>
                        <TableCell
                            style={{ color: "white", border: "none" }}
                            align="left"
                        >
                            Price
                        </TableCell>

                        <TableCell
                            style={{ color: "white", border: "none" }}
                            align="left"
                        >
                            24hr
                        </TableCell>
                        <TableCell
                            style={{ color: "white", border: "none" }}
                            align="left"
                        >
                            Last Updated
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {filtered.map((coin) => (
                        <TableRow key={coin.name} className="tableRow">
                            <TableCell
                                component="th"
                                scope="row"
                                align="left"
                                style={{ color: "white", border: "none" }}
                                className="rank"
                            >
                                {coin.market_cap_rank}
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                align="left"
                                style={{
                                    color: "white",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Link
                                    to={`/Coin/${coin.id}`}
                                    className= "CoinLink"
                                >
                                    <img
                                        src={coin.image}
                                        className="coinIcon"
                                        alt=""
                                    />
                                    {coin.name}
                                </Link>
                            </TableCell>
                            <TableCell
                                align="left"
                                style={{ color: "white", border: "none" }}
                                className="mbHide"
                            >
                                {coin.symbol}
                            </TableCell>
                            <TableCell
                                align="left"
                                style={{ color: "white", border: "none" }}
                            >
                                {changeIntoPrice(coin.current_price)} pkr
                            </TableCell>

                            <TableCell
                                align="left"
                                className={
                                    coin.price_change_percentage_24h > 0
                                        ? "percentage increase"
                                        : "percentage decrease"
                                }
                                style={{ border: "none" }}
                            >
                                {coin.price_change_percentage_24h.toFixed(2)}
                                {coin.price_change_percentage_24h > 0 ? (
                                    <ArrowUpwardIcon
                                        fontSize="small"
                                        className="arrowIcon"
                                    />
                                ) : (
                                    <ArrowDownwardIcon
                                        fontSize="small"
                                        className="arrowIcon"
                                    />
                                )}
                            </TableCell>

                            <TableCell
                                align="left"
                                style={{
                                    color: "white",
                                    border: "none",
                                    color: "#FFEF00",
                                }}
                            >
                                {toDate(coin.last_updated)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CoinTable;
