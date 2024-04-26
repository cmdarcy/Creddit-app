import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.header}>
			<h1 className={styles.logo}>
				<span className={styles.logo_C}>C</span>reddit
			</h1>
			<input className={styles.searchInput} type="text" placeholder="Search" />
			<img
				className={styles.profileIcon}
				src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
				alt="defaultProfileIcon"
			/>
		</div>
	);
}

export default Header;
