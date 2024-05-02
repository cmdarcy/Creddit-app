import ProfileIcon from "../ProfileIcon/ProfileIcon";
import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.header} data-testid="header">
			<h1 className={styles.logo}>
				<span className={styles.logo_C}>C</span>reddit
			</h1>
			<input className={styles.searchInput} type="text" placeholder="Search" />
			<ProfileIcon className="profileIcon" />
		</div>
	);
}

export default Header;
