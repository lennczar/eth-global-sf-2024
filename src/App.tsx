import "./App.css";
import { Feed } from "./components/Feed";

function App() {
	return (
		<div className="hero">
			<div className="left">
				<div className="fixed">
					<h2>Recommendation Feed</h2>
				</div>
			</div>
			<div className="right">
				<Feed unitId="uUBGrCYld3/hDwvs3W5IzA==" />
			</div>
		</div>
	);
}

export default App;
