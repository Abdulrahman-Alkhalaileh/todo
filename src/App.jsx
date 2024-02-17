import Todo from "./pages/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <Todo />
            <Footer />
        </div>
    );
}

export default App;
