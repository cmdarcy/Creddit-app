import styles from "./Card.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon.jsx";
function Card({ recent }) {
	return (
		<div className={styles.card}>
			<div className={styles.cardtitle_row}>
				<img src="images/icons8-add-bookmark-48.png" alt="bookmarkBtn" />
				<h2>Post Title</h2>
				{!recent && (
					<>
						<p>6 hrs ago</p>
						<p className="subreddit_label">r/subreddit</p>
						<ProfileIcon className="card_profileIcon" />
					</>
				)}
			</div>
			<div className={styles.card_content}>
				<a href="">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						dolorum quaerat cum ipsum recusandae nostrum, debitis, repellendus
						atque accusamus ea aliquid explicabo obcaecati ut unde cumque!
						Quibusdam voluptates necessitatibus aspernatur.
					</p>
				</a>
			</div>
			<img src="images/icons8-initiate-money-transfer-48.png" alt="" />
			<img src="images/icons8-request-money-48.png" alt="" />
		</div>
	);
}

export default Card;
