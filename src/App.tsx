import Breadcrumb from "./components/Breadcrumb";
import FaqSection from "./components/FaqSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Breadcrumb />
        <MainSection />
        <FaqSection />
      </div>
    </>
  );
};

export default App;
