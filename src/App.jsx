import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Schemes = React.lazy(() => import('./pages/Schemes'));
const Announcements = React.lazy(() => import('./pages/Announcements'));
const Tenders = React.lazy(() => import('./pages/Tenders'));
const Contact = React.lazy(() => import('./pages/Contact'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const CommitteePage = React.lazy(() => import('./pages/CommitteePage'));
const Applications = React.lazy(() => import('./pages/Applications'));
const Certificates = React.lazy(() => import('./pages/Certificates'));
const FinancialReports = React.lazy(() => import('./pages/FinancialReports'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Layout component to include header and footer on all pages
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Import Header and Footer after defining Layout to avoid circular dependency
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Loading component for Suspense fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/schemes" element={
            <Layout>
              <Schemes />
            </Layout>
          } />
          <Route path="/announcements" element={
            <Layout>
              <Announcements />
            </Layout>
          } />
          <Route path="/gallery" element={
            <Layout>
              <GalleryPage />
            </Layout>
          } />
          <Route path="/committee" element={
            <Layout>
              <CommitteePage />
            </Layout>
          } />
          <Route path="/tenders" element={
            <Layout>
              <Tenders />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="/arj" element={
            <Layout>
              <Applications />
            </Layout>
          } />
          <Route path="/dakhale" element={
            <Layout>
              <Certificates />
            </Layout>
          } />
          <Route path="/arthik-ahwal" element={
            <Layout>
              <FinancialReports />
            </Layout>
          } />
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
