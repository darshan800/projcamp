import AppRoutes from "./routes";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import DashboardPreview from "./components/landing/Dashboardpreview";
import ProductShowCase from "./components/landing/ProductShowCase";
import HowItWorks from "./components/landing/HowitWorks";
import Faq from "./components/landing/Faq";


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    {/* <DashboardPreview expanded={true} /> */}
    <ProductShowCase />
    <HowItWorks />
    <Faq />
    </>
  )
}

export default App;