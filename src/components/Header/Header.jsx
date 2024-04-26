import ProfileIcon from "../ProfileIcon/ProfileIcon.jsx";

function Header() {
	return (
		<div className="header">
			<h1>Creddit</h1>
			<input type="text" placeholder="Search" />
			<ProfileIcon
				imgUrl={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
			/>
		</div>
	);
}

export default Header;
