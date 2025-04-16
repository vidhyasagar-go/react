import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router imports
import { ThemeProvider } from './Themes/ThemeContext'; // Import ThemeProvider
import NavbarComponent from './Navbar/Navbar'; // Import Navbar
import Home from './Pages/Home'; // Example component for Home
import About from './Pages/About'; // Example component for About
import Services from './Pages/Services'; // Example component for Services
import FAQ from './Pages/FAQ'; // Example component for FAQ
import Blog from './Pages/Blog'; // Example component for Blog
import Contact from './Pages/Contact'; // Example component for Contact
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Import transition utilities
import './App.css'; // Global styles for page transitions
import Static from './Home/Templates/Static';
import TermsConditions from './Footer/TermsConditions';
import PrivacyPolicy from './Footer/PrivacyPolicy';
import RefundCancellation from './Footer/RefundCancellation';
import ShipmentAndBilling from './Footer/ShipmentAndBilling';
import Dynamic from './Home/Templates/Dynamic';
import Personalised from './Home/Templates/Personalised';
import Responsive from './Home/Templates/Responsive';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <ThemeProvider> {/* Wrap the entire app with the ThemeProvider */}
      <Router>
        <NavbarComponent /> {/* Navbar should always be on top */}
        <TransitionGroup className="transition-group">
          <Routes>
            <Route
              path="/"
              element={
                <CSSTransition timeout={500} classNames="fade" key="home">
                  <Home />
                </CSSTransition>
              }
            />
            <Route
              path="/about"
              element={
                <CSSTransition timeout={500} classNames="fade" key="about">
                  <About />
                </CSSTransition>
              }
            />
            <Route
              path="/services"
              element={
                <CSSTransition timeout={500} classNames="fade" key="services">
                  <Services />
                </CSSTransition>
              }
            />
            <Route
              path="/faq"
              element={
                <CSSTransition timeout={500} classNames="fade" key="faq">
                  <FAQ />
                </CSSTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <CSSTransition timeout={500} classNames="fade" key="blog">
                  <Blog />
                </CSSTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <CSSTransition timeout={500} classNames="fade" key="contact">
                  <Contact />
                </CSSTransition>
              }
            />
            <Route
              path="/static" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <Static/>
                </CSSTransition>
              }
            />
            <Route
              path="/dynamic" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <Dynamic/>
                </CSSTransition>
              }
            />
            <Route
              path="/personalised" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <Personalised/>
                </CSSTransition>
              }
            />
            <Route
              path="/responsive" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <Responsive/>
                </CSSTransition>
              }
            />
            <Route
              path="/terms-conditions" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <TermsConditions/>
                </CSSTransition>
              }
            />
            <Route
              path="/privacy-policy" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <PrivacyPolicy/>
                </CSSTransition>
              }
            />
            <Route
              path="/refund-cancellation" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <RefundCancellation/>
                </CSSTransition>
              }
            />
            <Route
              path="/shipment-billing" // Define the route for /static
              element={
                <CSSTransition timeout={500} classNames="fade" key="static">
                  <ShipmentAndBilling/>
                </CSSTransition>
              }
            />
            
          </Routes>
        </TransitionGroup>
      </Router>
    </ThemeProvider>
  );
};

export default App;
