import styles from "./ProfileIcon.module.css";

function ProfileIcon({ imgUrl }) {
	return <img className={styles.profileIcon} src={imgUrl} alt="ProfileIcon" />;
}

export default ProfileIcon;
