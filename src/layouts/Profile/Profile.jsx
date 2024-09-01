import styles from './Profile.module.css';

import { useParams } from "react-router-dom"

export default function Profile() {
    const { username } = useParams();

    return (
        <div className={styles.container}>
            Profile component {username}
        </div>
    )
}