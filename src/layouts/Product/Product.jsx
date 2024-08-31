import { useState } from 'react';
import styles from './Product.module.css';
import { useParams } from "react-router-dom"

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        image: "https://gkloop.com/wp-content/uploads/2024/05/e53971d8183c8203c5394211015b3a57.webp",
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
    });

    const agreementStyleHandle = (agreement) => {
        return (agreement.isAccept) ? styles.agreementItemAccept : "";
    }

    return (
        <div className={styles.container}>
            <div className={styles.productContainer}>
                <div className={styles.productImageContainer}>
                    <img className={styles.productImage} src={product.image} alt="" />
                </div>
                <div className={styles.productInformationContainer}>
                    <div className={styles.productInfoPriceContainer}>
                        <p className={styles.productPriceTitle}>Price (bath)</p>
                        <h2 className={styles.productPrice}>{product.price}</h2>
                    </div>
                    <div className={styles.agreementContainer}>
                        {product.agreements.map((agreement, index) => (
                            <div className={styles.agreementItem + ' ' + agreementStyleHandle(agreement)} key={index}>
                                <p>{agreement.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.productButtonContianer}>
                        <button className={styles.productBuyBtn}>Buy now!</button>
                    </div>
                    <div className={styles.productDescriptionContainer}>
                        <p className={styles.productDescTitle}>Description</p>
                        <textarea className={styles.productDescContent}></textarea>
                    </div>
                    <div className={styles.productSeller}>
                        <p className={styles.sellerTitle}>Seller</p>
                        <div className={styles.seller}>
                            <img className={styles.sellerProfileImage} src="https://i.pinimg.com/originals/be/b0/c9/beb0c94ddda91e336909aa669a991ddb.jpg" alt="" />
                            <div className={styles.sellerInfo}>
                                <p>username</p>
                                <button className={styles.sellerFollowBtn}>FOLLOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}