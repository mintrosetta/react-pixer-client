import styles from './ShortProduct.module.css';

export default function ShortProduct({ product }) {

    const agreementStatusClassHandler = (index) => {
        return (product.agreements[index].isAccept) ? styles.agreementStatusAccept : styles.agreementStatusReject;
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={product.image} alt="product image" />
            </div>
            <div className={styles.cardPrice}>
                <p>{product.price} BATH</p>
            </div>
            <div>
                {(product.agreements.length > 0) && product.agreements.map((agreement, index) => {
                    return (
                        <div className={styles.cardAgreement} key={index}>
                            <span className={agreementStatusClassHandler(index)}></span>
                            <p className={styles.agreementName}>{agreement.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}