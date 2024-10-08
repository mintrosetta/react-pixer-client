import styles from '../../styles/common/Form.module.css';

export default function form() {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Handle submited")
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formCard}>
                <h1 className={styles.formHeader}>Authenticate</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className={styles.formButtonGroup}>
                        <button type="submit" className={styles.formBtn}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}