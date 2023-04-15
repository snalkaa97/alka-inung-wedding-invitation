import "./App.css";
import Card from "./pages/Card";
// import Home from "./pages/Home";
import Couple from "./pages/Couple";
import Event from "./pages/Event";
import Greeting from "./pages/Greeting";
import Invitation from "./pages/Invitation";
import {
	Routes,
	Route,
	BrowserRouter,
	useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "./services/apiClient";
import perahukertas from "./audio/perahukertas2.mp3";
import Fade from "react-reveal/Fade";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Pages />} />
			</Routes>
		</BrowserRouter>
	);
}

const Pages = () => {
	let [searchParams] = useSearchParams();
	const [isInvite, setIsInvite] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState([]);
	const song = new Audio(perahukertas);
	const submitData = async (comment) => {
		await apiClient.post("/api/attendance", {
			name: to,
			comment: comment,
		});
		getData();
	};
	const to = searchParams.get("to");
	const invite = searchParams.get("invite");
	const sesi = searchParams.get("sesi");

	const openUndangan = () => {
		setIsOpen(!isOpen);
		setTimeout(() => {
			song.play();
		}, 1000);
	};

	useEffect(() => {
		(async () => {
			await apiClient.get("/api/attendance").then((response) => {
				setData(response.data.data);
			});
		})();
	}, []);
	useEffect(() => {
		if (invite === "yes") {
			setIsInvite(true);
		} else {
			setIsInvite(false);
		}
	}, [to, data, isInvite, sesi, invite, isOpen]);
	const getData = async () => {
		const attendances = await apiClient.get("/api/attendance");
		setData(attendances.data.data);
	};
	return (
		<div className="min-h-screen overflow-x-auto bg-invitation bg-no-repeat bg-fixed bg-contain bg-center">
			{isOpen ? (
				<>
					<Fade top>
						<Card to={to} isInvite={isInvite} />
					</Fade>
					{/* <Home /> */}
					<Couple />
					<Fade left>
						<Event isInvite={isInvite} sesi={sesi} />
					</Fade>
					<Fade bottom>
						<Greeting
							submitData={submitData}
							data={data}
							to={to}
							isInvite={isInvite}
						/>
					</Fade>
				</>
			) : (
				<Invitation openUndangan={openUndangan} />
			)}
		</div>
	);
};

export default App;
