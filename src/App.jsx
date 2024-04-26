import "./normalize.css";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Cardlist from "./components/Cardlist/Cardlist.jsx";
import Shortcut from "./components/Shortcut/Shortcut.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
	return (
		<>
			<Header />
			<main className="main_container">
				<section className="recent_container">
					<h2 className="recent_title">Recent Posts</h2>
					<Cardlist />
				</section>
				<section className="posts_container">
					<h2>Main Post Section</h2>
					<Cardlist />
				</section>
				<section className="shortcuts_container">
					<Shortcut
						imgURL="/images/icons8-discussion-forum-48.png"
						text="All"
					/>
					<Shortcut imgURL="/images/icons8-popular-48.png" text="Popular" />
					<Shortcut imgURL="/images/icons8-favorites-48.png" text="Favorites" />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
