import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { DesktopLayout } from './components/layout/DesktopLayout';

// Screens
import { Home } from './screens/Home';
import { Smart } from './screens/Smart';
import { Voice } from './screens/Voice';
import { Community } from './screens/Community';
import { BetaLab } from './screens/BetaLab';
import { PulseDashboard } from './screens/PulseDashboard';
import { Profile } from './screens/Profile';

const MainAppContent: React.FC = () => {
  const { currentTab } = useApp();

  return (
    <DesktopLayout>
      {currentTab === 'home' && <Home />}
      {currentTab === 'smart' && <Smart />}
      {currentTab === 'voice' && <Voice />}
      {currentTab === 'community' && <Community />}
      {currentTab === 'beta_lab' && <BetaLab />}
      {currentTab === 'pulse' && <PulseDashboard />}
      {currentTab === 'profile' && <Profile />}
    </DesktopLayout>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
