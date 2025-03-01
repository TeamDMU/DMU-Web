import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Main from '@/routes/Main/Main';
import '@/App.css';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/main" replace />} />
					<Route path="/main" element={<Main />} />
				</Routes>
			</Router>
		</DndProvider>
	);
}

export default App;
