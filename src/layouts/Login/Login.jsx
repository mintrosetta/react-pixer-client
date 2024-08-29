import styles from './Login.module.css';

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Handle submited")
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <h1 className={styles.loginHeader}>Authenticate</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className={styles.loginButtonGroup}>
                        <button type="submit" className={styles.loginBtn}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}