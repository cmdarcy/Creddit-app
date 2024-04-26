import styles from "./Shortcut.module.css";

function Shortcut({ imgURL, text }) {
	return (
		<div className={styles.shortcut}>
			<img src={imgURL} alt="shortcutBtn" />
			<p className={styles.shortcut_text}>{text}</p>
		</div>
	);
}

export default Shortcut;
