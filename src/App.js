import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import HomeHero from "./components/HomeHero";
import HomeFeatures from "./components/HomeFeatures";
import HomeCTA from "./components/HomeCTA";
import HomeServices from "./components/HomeServices";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import './responsive.css';

// Practicloud imports
import PracticloudLayout from "./practicloud/PracticloudLayout";
import PCHome from "./practicloud/pages/Home";
import PCServices from "./practicloud/pages/Services";
import PCPricing from "./practicloud/pages/Pricing";
import PCAcademia from "./practicloud/pages/Academia";
import PCFAQ from "./practicloud/pages/FAQ";

// Hexa Robotics imports
import HexaRoboticsLayout from "./hexarobotics/HexaRoboticsLayout";
import HRHome from "./hexarobotics/pages/Home";
import HRProducts from "./hexarobotics/pages/Products";
import HRVitriflex from "./hexarobotics/pages/Products/Vitriflex";
import HRServices from "./hexarobotics/pages/Services";
import HRBlog from "./hexarobotics/pages/Blog";
import HRBlog1 from "./hexarobotics/pages/Blogs/Blog1";
import HRBlog2 from "./hexarobotics/pages/Blogs/Blog2";
import HRBlog3 from "./hexarobotics/pages/Blogs/Blog3";
import HRBlog4 from "./hexarobotics/pages/Blogs/Blog4";
import HRBlog5 from "./hexarobotics/pages/Blogs/Blog5";
import HRCaseStudies from "./hexarobotics/pages/CaseStudies";
import HRCS1 from "./hexarobotics/pages/CS/CS1";
import HRCS2 from "./hexarobotics/pages/CS/CS2";
import HRPricing from "./hexarobotics/pages/Pricing";


function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Temporarily disable smooth scrolling so the reset is instant
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari fallback
    // Re-enable smooth scrolling after the reset
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isSubApp = location.pathname.startsWith('/practicloud') || location.pathname.startsWith('/hexarobotics');

  return (
    <div className={!isSubApp ? "app-container" : undefined}>
      <ScrollToTop />
      {!isSubApp && <NavBar />}
      <div className={!isSubApp ? "page-content" : undefined}>
        <Routes>

          <Route path="/"
            element={
              <>
                <HomeHero />
                <HomeServices />
                <HomeFeatures/>
                <HomeCTA />
              </>
            } />


          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* Practicloud Routes */}
          <Route path="/practicloud" element={<PracticloudLayout />}>
            <Route index element={<PCHome />} />
            <Route path="services" element={<PCServices />} />
            <Route path="pricing" element={<PCPricing />} />
            <Route path="academia" element={<PCAcademia />} />
            <Route path="faq" element={<PCFAQ />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>

          {/* Hexa Robotics Routes */}
          <Route path="/hexarobotics" element={<HexaRoboticsLayout />}>
            <Route index element={<HRHome />} />
            <Route path="products" element={<HRProducts />} />
            <Route path="products/vitriflex" element={<HRVitriflex />} />
            <Route path="services" element={<HRServices />} />
            <Route path="blog" element={<HRBlog />} />
            <Route path="blogs/blog1" element={<HRBlog1 />} />
            <Route path="blogs/blog2" element={<HRBlog2 />} />
            <Route path="blogs/blog3" element={<HRBlog3 />} />
            <Route path="blogs/blog4" element={<HRBlog4 />} />
            <Route path="blogs/blog5" element={<HRBlog5 />} />
            <Route path="casestudies" element={<HRCaseStudies />} />
            <Route path="CS/CS1" element={<HRCS1 />} />
            <Route path="CS/CS2" element={<HRCS2 />} />
            <Route path="pricing" element={<HRPricing />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
      {!isSubApp && <Footer />}
      <ScrollToTopBtn />
    </div>
  );
}

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
