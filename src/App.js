import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomeHero from "./components/HomeHero";
import HomeFeatures from "./components/HomeFeatures";
import HomeCTA from "./components/HomeCTA";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ErrorBoundary from "./components/ErrorBoundary";
import PageSkeleton from "./components/PageSkeleton";

// Retry helper for chunk load errors — auto-reloads on stale cache
const lazyRetry = (importFn) =>
  lazy(() =>
    importFn().catch(() => {
      window.location.reload();
      return importFn();
    })
  );

// Lazy-load pages not needed on initial home page render
// const About = lazyRetry(() => import("./pages/About"));
const Services = lazyRetry(() => import("./pages/Services"));
const ContactUs = lazyRetry(() => import("./pages/ContactUs"));

// Lazy-load sub-app layouts (each pulls in its own nav, footer, and pages)
// const PracticloudLayout = lazyRetry(() => import("./practicloud/PracticloudLayout"));
const HexaRoboticsLayout = lazyRetry(() => import("./hexarobotics/HexaRoboticsLayout"));

// Lazy-load Practicloud pages
// const PCHome = lazyRetry(() => import("./practicloud/pages/Home"));
// const PCServices = lazyRetry(() => import("./practicloud/pages/Services"));
// const PCPricing = lazyRetry(() => import("./practicloud/pages/Pricing"));
// const PCAcademia = lazyRetry(() => import("./practicloud/pages/Academia"));
// const PCFAQ = lazyRetry(() => import("./practicloud/pages/FAQ"));
// const PCLogin = lazyRetry(() => import("./practicloud/pages/Login"));

// Lazy-load Hexa Robotics pages
const HRHome = lazyRetry(() => import("./hexarobotics/pages/Home"));
const HRProducts = lazyRetry(() => import("./hexarobotics/pages/Products"));
const HRVitriflex = lazyRetry(() => import("./hexarobotics/pages/Products/Vitriflex"));
const HROnGridMixing = lazyRetry(() => import("./hexarobotics/pages/Products/OnGridMixing"));
const HRServices = lazyRetry(() => import("./hexarobotics/pages/Services"));
const HRBlog = lazyRetry(() => import("./hexarobotics/pages/Blog"));
const HRBlog1 = lazyRetry(() => import("./hexarobotics/pages/Blogs/Blog1"));
const HRBlog2 = lazyRetry(() => import("./hexarobotics/pages/Blogs/Blog2"));
const HRBlog3 = lazyRetry(() => import("./hexarobotics/pages/Blogs/Blog3"));
const HRBlog4 = lazyRetry(() => import("./hexarobotics/pages/Blogs/Blog4"));
const HRBlog5 = lazyRetry(() => import("./hexarobotics/pages/Blogs/Blog5"));
const HRCaseStudies = lazyRetry(() => import("./hexarobotics/pages/CaseStudies"));
const HRCS1 = lazyRetry(() => import("./hexarobotics/pages/CS/CS1"));
const HRCS2 = lazyRetry(() => import("./hexarobotics/pages/CS/CS2"));
const HRPricing = lazyRetry(() => import("./hexarobotics/pages/Pricing"));
const HRAcademicPricing = lazyRetry(() => import("./hexarobotics/pages/AcademicPricing"));


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
  const isSubApp = location.pathname.startsWith('/hexarobotics');

  return (
    <div className={!isSubApp ? "app-container" : undefined}>
      <ScrollToTop />
      {!isSubApp && <NavBar />}
      <div className={!isSubApp ? "page-content" : undefined}>
        <ErrorBoundary>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>

            <Route path="/"
              element={
                <>
                  <HomeHero />
                  <HomeFeatures/>
                  <HomeCTA />
                </>
              } />

            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* Practicloud Routes — disabled; Practicloud is hosted on its own domain */}
            {/*
            <Route path="/practicloud" element={<PracticloudLayout />}>
              <Route index element={<PCHome />} />
              <Route path="services" element={<PCServices />} />
              <Route path="pricing" element={<PCPricing />} />
              <Route path="academia" element={<PCAcademia />} />
              <Route path="faq" element={<PCFAQ />} />
              <Route path="login" element={<PCLogin />} />
              <Route path="contactus" element={<ContactUs />} />
            </Route>
            */}

            {/* Hexa Robotics Routes */}
            <Route path="/hexarobotics" element={<HexaRoboticsLayout />}>
              <Route index element={<HRHome />} />
              <Route path="products" element={<HRProducts />} />
              <Route path="products/vitriflex" element={<HRVitriflex />} />
              <Route path="products/on-grid-mixing" element={<HROnGridMixing />} />
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
              <Route path="academic-pricing" element={<HRAcademicPricing />} />
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
