import { useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import useBookStore from "./bookStore";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const reset = useBookStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="App">
      <h2 className="mt-4">My Library Store</h2>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;