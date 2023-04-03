import "./App.css";
import Card from "./pages/Card";
// import Home from "./pages/Home";
import Couple from "./pages/Couple";
import Event from "./pages/Event";
import Greeting from "./pages/Greeting";
import {
	Routes,
	Route,
	BrowserRouter,
	useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "./services/apiClient";

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
	let [isInvite, setIsInvite] = useState(false);
	const [data, setData] = useState([]);
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
	}, [to, data, isInvite, sesi, invite]);
	const getData = async () => {
		const attendances = await apiClient.get("/api/attendance");
		setData(attendances.data.data);
	};
	return (
		<div className="min-h-screen overflow-x-auto bg-invitation bg-no-repeat bg-fixed bg-contain bg-center">
			<Card to={to} isInvite={isInvite} />
			{/* <Home /> */}
			<Couple />
			<Event isInvite={isInvite} sesi={sesi} />
			<Greeting
				submitData={submitData}
				data={data}
				to={to}
				isInvite={isInvite}
			/>
		</div>
	);
};

export default App;
