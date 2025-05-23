import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About/AboutUs';
import ContactPage from './components/Contact/Contact';
import NotFoundPage from './components/NotFound/NotFound';
import SmoothScrollToTop from './components/ScrollOnTop';
import OnPageSEO from './components/Service/SEO/OnPage';
import OffPageSEO from './components/Service/SEO/OffPage';
import TechnicalSEO from './components/Service/SEO/Technical';
import SeoServicesPage from './components/Service/SEO/SEO';
import PPCAdvertising from './components/Service/Advertising/PPC';
import DisplayAdvertising from './components/Service/Advertising/DisplayAd';
import GoogleAdsPage from './components/Service/Advertising/GoogleAds';
import Portfolio from './components/Portfolio/Portfolio';
import SMM from './components/Service/SMM';
import Fb from './components/Service/SMM/Fb';
import Insta from './components/Service/SMM/Insta';
import Twitter from './components/Service/SMM/Twitter';
import LinkedIn from './components/Service/SMM/LinkedIn';
import Content from './components/Service/Content/Content';
import Email from './components/Service/Email';
import MetaAds from './components/Service/Advertising/MetaAds';
import SocialMediaManagement from './components/Service/SMM/SMM';
import InfluencerMarketing from './components/Service/SMM/Influencer';
import SEOPage from './components/Service/SEO/SeoAudits';
import BrandingServices from './components/Service/Branding';
import Privacy from './components/Others/Privacy';
import Terms from './components/Others/Terms';
import BlogWriting from './components/Service/Content/BlogWriting';
import VideoContent from './components/Service/Content/VideoContent';
import Infographics from './components/Service/Content/Infographics';
import Analytics from './components/Service/Analytics/Analytics';
import GoogleAnalytics from './components/Service/Analytics/GoogleAnalytics';
import { ConversionTracking } from './components/Service/Analytics/ConversionTracking';
import { ROIAnalysis } from './components/Service/Analytics/ROIAnalysis';
import Development from './components/Service/Development';
import Team from './components/Team/Team';
import PaidMarketingServices from './components/Service/PaidMarketing';
import UIUX from './components/Service/Development/UIUX';
import AppDevelopment from './components/Service/Development/AppDevelopment';
import ServicesPage from './components/Service/Service';

const App = () => {
  return (
    <BrowserRouter>
    <SmoothScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/contact" element={<ContactPage />} />
        <Route path="/onpage" element={<OnPageSEO />} />
        <Route path="/offpage" element={<OffPageSEO />} />
        <Route path="/technical" element={<TechnicalSEO />} />
        <Route path="/seo" element={<SeoServicesPage />} />
        <Route path="/smm" element={<SMM />} />
        <Route path='/fb' element={<Fb />} />
        <Route path='/insta' element={<Insta />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/linkedin' element={<LinkedIn />} />
        <Route path="/ppc" element={<PPCAdvertising/>} />
        <Route path='/meta-ads' element={<MetaAds/>} />
        <Route path="/google-ads" element={<GoogleAdsPage/>} />
        <Route path='/content' element={<Content />} />
        <Route path="/blog-writing" element={<BlogWriting />} />
        <Route path='/video-content' element={<VideoContent />} />
        <Route path='/infographics' element={<Infographics />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path='/google-analytics' element={<GoogleAnalytics />} />
        <Route path="/conversion-tracking" element={<ConversionTracking />} />
        <Route path='/roi-analysis' element={<ROIAnalysis />} />
        <Route path='/email' element={<Email />} />
        <Route path="/display" element={<DisplayAdvertising/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path='/social-media-management'  element={<SocialMediaManagement />} />
        <Route path='/development'  element={<Development />} />
        <Route path='/uiux'  element={<UIUX/>} />
        <Route path='/app-development'  element={<AppDevelopment />} />
         <Route path='/influencer-marketing'  element={<InfluencerMarketing />} />
         <Route path='/teams'  element={<Team />} />
         <Route path='/seo-audits'  element={<SEOPage />} />
         <Route path='/branding'  element={<BrandingServices />} />
         <Route path='/privacy'  element={<Privacy />} />
         <Route path='/terms'  element={<Terms />} />
         <Route path='/paid-marketing'  element={<PaidMarketingServices />} />
         <Route path='/services'  element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
