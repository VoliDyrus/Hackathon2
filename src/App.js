import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ReviewsSession from "./Components/ReviewsSession";
import Slider from "./Components/Slider";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductList />
      <ReviewsSession />
    </div>
  );
}

export default App;
