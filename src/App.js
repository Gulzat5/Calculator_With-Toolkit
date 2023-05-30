import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import Calculator from "./components/Calculator";

function AppContent() {
  return (
    <div className="App">
      <h2> Hello world</h2>
      <Calculator />
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;
