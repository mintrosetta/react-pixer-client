import { useState } from 'react';
import styles from './CreateProduct.module.css';
import { useEffect } from 'react';

export default function CreateProduct() {
    const [data, setData] = useState({
        image: null,
        price: 0,
        agreements: [],
        description: ""
    });
    const [imagePreview, setImagePreview] = useState("");
    const [agreementStyles, setAgreementStyles] = useState({
        commecial: "",
        resell: ""
    });

    useEffect(() => {
        setAgreementStyles({
            commecial: styles.agreementDefault,
            resell: styles.agreementDefault
        });
    }, []);

    const imagePreviewHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            setData({ ...data, image: file });

            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const agreementCommercialClickHandler = () => {
        const commercialPoint = data.agreements.filter(agreement => agreement == 1)[0];

        if (commercialPoint === undefined) {
            const newData = data;
            newData.agreements.push(1);
            
            setData(newData);
            setAgreementStyles({ ...agreementStyles, commecial: styles.agreementSelected })
        } else {
            const newData = data;
            const agreements = data.agreements.filter(x => x != 1);

            newData.agreements = agreements;
            setData(newData);
            setAgreementStyles({ ...agreementStyles, commecial: styles.agreementDefault })
        }
    }

    const agreementResellClickHandler = () => {
        const resellPoint = data.agreements.filter(agreement => agreement == 2)[0];

        if (resellPoint === undefined) {
            const newData = data;
            newData.agreements.push(2);
            
            setData(newData);
            setAgreementStyles({ ...agreementStyles, resell: styles.agreementSelected })
        } else {
            const newData = data;
            const agreements = data.agreements.filter(x => x != 2);

            newData.agreements = agreements;
            
            setData(newData);
            setAgreementStyles({ ...agreementStyles, resell: styles.agreementDefault })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.createProductContainer}>
                <div className={styles.productImgGroup}>
                    <img src={imagePreview} alt=""/>
                    <div>
                        <input type='file' id='upload-image' hidden onChange={imagePreviewHandler}/>
                        <label htmlFor="upload-image" className={styles.uploadImgBtn}>upload</label>
                    </div>
                </div>
                <div className={styles.productDetailGroup}>
                    <div className={styles.priceGroup}>
                        <p className={styles.priceTitle}>Price (bath)</p>
                        <input type="number" className={styles.price} required/>
                    </div>
                    <div className={styles.agreementGroup}>
                        <button className={agreementStyles.commecial} onClick={agreementCommercialClickHandler}>Commercial</button>
                        <button className={agreementStyles.resell} onClick={agreementResellClickHandler}>Resell</button>
                    </div>
                    <div className={styles.descriptionGroup}>
                        <p className={styles.descriptionTitle}>Description</p>
                        <textarea className={styles.descriptionContent}></textarea>
                    </div>
                    <div className={styles.btnGroup}>
                        <button className={styles.saleBtn}>Sale image</button>
                    </div>
                </div>
            </div>
        </div> 
    )
}