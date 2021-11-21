import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';
import Header from './Pages/Header/Header';
import ServiceMechanical from './Pages/Service/ServiceMechanical/ServiceMechanical/ServiceMechanical';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <ServiceMechanical></ServiceMechanical>
        </div>
    );
}

export default App;
