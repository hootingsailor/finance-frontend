
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-full h-screen flex max-w-screen-lg justify-center mx-auto">
		<div className="w-full space-y-8">
			<Navbar/>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage/>} />
					<Route path="/signup" element={<SignupPage/>} />
				</Routes>
			</BrowserRouter>
		</div>
  	</div>
  );
}

export default App;