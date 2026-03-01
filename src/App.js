import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomeHero from "./components/HomeHero";
import HomeFeatures from "./components/HomeFeatures";
import HomeCTA from "./components/HomeCTA";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy-load pages not needed on initial home page render
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

// Lazy-load sub-app layouts (each pulls in its own nav, footer, and pages)
const PracticloudLayout = lazy(() => import("./practicloud/PracticloudLayout"));
const HexaRoboticsLayout = lazy(() => import("./hexarobotics/HexaRoboticsLayout"));

// Lazy-load Practicloud pages
const PCHome = lazy(() => import("./practicloud/pages/Home"));
const PCServices = lazy(() => import("./practicloud/pages/Services"));
const PCPricing = lazy(() => import("./practicloud/pages/Pricing"));
const PCAcademia = lazy(() => import("./practicloud/pages/Academia"));
const PCFAQ = lazy(() => import("./practicloud/pages/FAQ"));

// Lazy-load Hexa Robotics pages
const HRHome = lazy(() => import("./hexarobotics/pages/Home"));
const HRProducts = lazy(() => import("./hexarobotics/pages/Products"));
const HRVitriflex = lazy(() => import("./hexarobotics/pages/Products/Vitriflex"));
const HRServices = lazy(() => import("./hexarobotics/pages/Services"));
const HRBlog = lazy(() => import("./hexarobotics/pages/Blog"));
const HRBlog1 = lazy(() => import("./hexarobotics/pages/Blogs/Blog1"));
const HRBlog2 = lazy(() => import("./hexarobotics/pages/Blogs/Blog2"));
const HRBlog3 = lazy(() => import("./hexarobotics/pages/Blogs/Blog3"));
const HRBlog4 = lazy(() => import("./hexarobotics/pages/Blogs/Blog4"));
const HRBlog5 = lazy(() => import("./hexarobotics/pages/Blogs/Blog5"));
const HRCaseStudies = lazy(() => import("./hexarobotics/pages/CaseStudies"));
const HRCS1 = lazy(() => import("./hexarobotics/pages/CS/CS1"));
const HRCS2 = lazy(() => import("./hexarobotics/pages/CS/CS2"));
const HRPricing = lazy(() => import("./hexarobotics/pages/Pricing"));


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
        <ErrorBoundary>
        <Suspense fallback={<div className="page-loading">Loading...</div>}>
          <Routes>

            <Route path="/"
              element={
                <>
                  <HomeHero />
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
        </Suspense>
        </ErrorBoundary>
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
