import styles from './Home.module.css';
import { useState } from "react";
import ShortProduct from "./components/ShortProduct";

export default function Home() {
    const [products, setProducts] = useState([
        {
            image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "price": 300.00,
            "agreements": [
                {
                    "name": "commercial",
                    "isAccept": false
                },
                {
                    "name": "resell",
                    "isAccept": true
                }
            ]
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "price": 300.00,
            "agreements": [
                {
                    "name": "commercial",
                    "isAccept": false
                },
                {
                    "name": "resell",
                    "isAccept": true
                }
            ]
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            "price": 300.00,
            "agreements": [
                {
                    "name": "commercial",
                    "isAccept": false
                },
                {
                    "name": "resell",
                    "isAccept": true
                }
            ]
        }        
    ]);



    return (
        <div className={styles.container}>
            {products.map((product, index) => <ShortProduct product={product} key={index} />)}
        </div>
    );
}