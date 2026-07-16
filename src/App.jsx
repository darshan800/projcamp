import AppRoutes from "./routes";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import DashboardPreview from "./components/landing/Dashboardpreview";
import ProductShowCase from "./components/landing/ProductShowCase";


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    {/* <DashboardPreview expanded={true} /> */}
    <ProductShowCase />
    </>
  )
}

export default App;