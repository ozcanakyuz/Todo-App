import Content from "./Content";
import ContentFooter from "./components/ContentFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
