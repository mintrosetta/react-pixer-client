import styles from '../../styles/common/Form.module.css';

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Handle submited")
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formCard}>
                <h1 className={styles.formHeader}>Join with us</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className={styles.formButtonGroup}>
                        <button type="submit" className={styles.formBtn}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}