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
	let [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState([]);
	const submitData = async (comment) => {
		await apiClient.post("/api/attendance", {
			name: to,
			comment: comment,
		});
		getData();
	};
	const to = searchParams.get("to");
	useEffect(() => {
		(async () => {
			await apiClient.get("/api/attendance").then((response) => {
				setData(response.data.data);
			});
		})();
	}, []);
	useEffect(() => {}, [to, data]);
	const getData = async () => {
		const attendances = await apiClient.get("/api/attendance");
		setData(attendances.data.data);
	};
	return (
		<div className="min-h-screen overflow-x-auto bg-invitation bg-no-repeat bg-fixed bg-contain bg-center">
			<Card to={to} />
			{/* <Home /> */}
			<Couple />
			<Event />
			<Greeting submitData={submitData} data={data} to={to} />
		</div>
	);
};

export default App;
