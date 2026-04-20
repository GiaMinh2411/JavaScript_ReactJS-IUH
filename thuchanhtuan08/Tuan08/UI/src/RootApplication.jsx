import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './shared_blocks/TopBar';
import BottomNav from './shared_blocks/BottomNav';
import MainLanding from './app_views/MainLanding';
import SavedItems from './app_views/SavedItems';
import SubscriptionPlans from './app_views/SubscriptionPlans';
import CartPayment from './app_views/CartPayment';
import UserDashboard from './app_views/UserDashboard';
import ItemCatalog from './app_views/ItemCatalog';
import CookingIdeas from './app_views/CookingIdeas';
import DiscoverResults from './app_views/DiscoverResults';
import SignInForm from './shared_blocks/SignInForm';
import IntroBanner from './shared_blocks/IntroBanner';
import { SessionProvider } from './app_state/UserSession';

function RootApplication() {
  return (
    <SessionProvider>
      <Router>
        <div className="flex flex-col max-w-[1440px] mx-auto min-h-[1024px] w-full text-gray-800 bg-gray-50 font-sans relative shadow-xl overflow-hidden">
          <TopBar />
          <IntroBanner />
          <SignInForm />
          <main className="flex-grow w-full mx-auto">
            <Routes>
              <Route path="/" element={<MainLanding />} />
              <Route path="/recipe-box" element={<SavedItems />} />
              <Route path="/pricing" element={<SubscriptionPlans />} />
              <Route path="/checkout" element={<CartPayment />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/recipes" element={<ItemCatalog />} />
              <Route path="/what-to-cook" element={<CookingIdeas />} />
              <Route path="/search" element={<DiscoverResults />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </Router>
    </SessionProvider>
  );
}

export default RootApplication;
