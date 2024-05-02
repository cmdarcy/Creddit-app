import styles from "./ProfileIcon.module.css";

function ProfileIcon({
	imgUrl = "https://cdn-icons-png.flaticon.com/512/149/149071.png",
	className,
}) {
	return <img src={imgUrl} alt="ProfileIcon" className={styles[className]} />;
}

export default ProfileIcon;
