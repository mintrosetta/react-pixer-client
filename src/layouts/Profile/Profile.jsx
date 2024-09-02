import ProfileInfo from './components/ProfileInfo';
import ProfileProductGroup from './components/ProfileProductGroup';
import styles from './Profile.module.css';

import { useParams } from "react-router-dom"

export default function Profile() {
    const { username } = useParams();

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <ProfileInfo />
                <hr />
                <ProfileProductGroup />
            </div>
        </div>
    )
}