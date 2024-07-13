import { v4 as uuidv4 } from 'uuid';

export const watchlist = [
    {
        name: "INFY",
        price: 1555.45,
        percent: "-1.60%",
        isDown: true,
        id: uuidv4(),
    },
    {
        name: "ONGC",
        price: 116.8,
        percent: "-0.09%",
        isDown: true,
        id: uuidv4(),
    },
    {
        name: "TCS",
        price: 3194.8,
        percent: "-0.25%",
        isDown: true,
        id: uuidv4(),
    },
    {
        name: "KPITTECH",
        price: 266.45,
        percent: "3.54%",
        isDown: false,
        id: uuidv4(),
    },
    {
        name: "QUICKHEAL",
        price: 308.55,
        percent: "-0.15%",
        isDown: true,
        id: uuidv4(),
    },
    {
        name: "WIPRO",
        price: 577.75,
        percent: "0.32%",
        isDown: false,
        id: uuidv4(),
    },
    {
        name: "M&M",
        price: 779.8,
        percent: "-0.01%",
        isDown: true,
        id: uuidv4(),
    },
    {
        name: "RELIANCE",
        price: 2112.4,
        percent: "1.44%",
        isDown: false,
        id: uuidv4(),
    },
    {
        name: "HUL",
        price: 512.4,
        percent: "1.04%",
        isDown: false,
        id: uuidv4(),
    },
];

export const positions = [
    {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
    },
    {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
    },
];