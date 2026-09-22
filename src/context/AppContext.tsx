import React, { createContext, useContext, useState } from 'react';
import { 
  NavigationTab, 
  DeviceProfile, 
  DeviceFamily, 
  SmartActivityType, 
  CanonicalSignal, 
  FeedbackSubmission, 
  BetaExperiment,
  StructuredAiSignal
} from '../types';
import { DEVICE_PROFILES, DEFAULT_DEVICE } from '../data/devices';
import { CANONICAL_SIGNALS } from '../data/mockCommunity';
import { BETA_EXPERIMENTS } from '../data/mockBeta';

interface AppContextType {
  // Navigation
  currentTab: NavigationTab;
  setCurrentTab: (tab: NavigationTab) => void;
  
  // Connected Device State
  selectedDevice: DeviceProfile;
  setSelectedDevice: (device: DeviceProfile) => void;
  allDevices: DeviceProfile[];
  toggleMonsterMode: () => void;
  
  // Smart Quest State
  activeSmartActivity: SmartActivityType;
  setActiveSmartActivity: (activity: SmartActivityType) => void;
  appliedSetupActivity: SmartActivityType;
  applySmartSetup: (activity: SmartActivityType) => void;
  
  // Voice & Feedback State
  feedbackSubmissions: FeedbackSubmission[];
  submitFeedback: (rawText: string, inputMode: 'voice' | 'type' | 'show', structured: StructuredAiSignal, userEdited: boolean) => FeedbackSubmission;
  
  // Canonical Signals & Quester Voice
  canonicalSignals: CanonicalSignal[];
  toggleSupportSignal: (signalId: string) => void;
  
  // Beta Lab
  betaExperiments: BetaExperiment[];
  joinBetaExperiment: (id: string) => void;
  submitBetaFeedback: (id: string, sentiment: 'Worked' | 'Partially' | 'Needs improvement', feedbackNote: string) => void;
  
  // Filters & Device Family View
  selectedFamilyFilter: DeviceFamily | 'All';
  setSelectedFamilyFilter: (family: DeviceFamily | 'All') => void;
  
  // Settings Modal State
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  
  // Quick Actions
  openSmartWithActivity: (activity: SmartActivityType) => void;
  openTellIqoo: () => void;
  openQuesterVoice: () => void;
  
  // Compatibility properties for legacy components
  currentScreen?: any;
  setCurrentScreen?: any;
  viewportMode?: any;
  setViewportMode?: any;
  openPulseDashboard?: any;
  resetDemoFlow?: any;
  userInterests?: string[];
  toggleInterest?: (id: string) => void;
  toggleUpvoteIssue?: (id: string) => void;
  communityIssues?: any[];
  userFeedbackList?: any[];
  returnToMobile?: any;
}

const defaultContextValue: AppContextType = {
  currentTab: 'home',
  setCurrentTab: () => {},
  selectedDevice: DEFAULT_DEVICE,
  setSelectedDevice: () => {},
  allDevices: DEVICE_PROFILES,
  toggleMonsterMode: () => {},
  activeSmartActivity: 'gaming',
  setActiveSmartActivity: () => {},
  appliedSetupActivity: 'gaming',
  applySmartSetup: () => {},
  feedbackSubmissions: [],
  submitFeedback: () => ({} as any),
  canonicalSignals: CANONICAL_SIGNALS,
  toggleSupportSignal: () => {},
  betaExperiments: BETA_EXPERIMENTS,
  joinBetaExperiment: () => {},
  submitBetaFeedback: () => {},
  selectedFamilyFilter: 'All',
  setSelectedFamilyFilter: () => {},
  isSettingsOpen: false,
  setIsSettingsOpen: () => {},
  openSmartWithActivity: () => {},
  openTellIqoo: () => {},
  openQuesterVoice: () => {},
  currentScreen: 'main',
  setCurrentScreen: () => {},
  viewportMode: 'desktop',
  setViewportMode: () => {},
  openPulseDashboard: () => {},
  resetDemoFlow: () => {},
  userInterests: ['gaming', 'camera'],
  toggleInterest: () => {},
  toggleUpvoteIssue: () => {},
  communityIssues: [],
  userFeedbackList: [],
  returnToMobile: () => {}
};

const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [selectedDevice, setSelectedDeviceState] = useState<DeviceProfile>(DEFAULT_DEVICE);
  const [activeSmartActivity, setActiveSmartActivity] = useState<SmartActivityType>('gaming');
  const [appliedSetupActivity, setAppliedSetupActivity] = useState<SmartActivityType>('gaming');
  
  const [canonicalSignals, setCanonicalSignals] = useState<CanonicalSignal[]>(CANONICAL_SIGNALS);
  const [betaExperiments, setBetaExperiments] = useState<BetaExperiment[]>(BETA_EXPERIMENTS);
  const [feedbackSubmissions, setFeedbackSubmissions] = useState<FeedbackSubmission[]>([]);
  const [selectedFamilyFilter, setSelectedFamilyFilter] = useState<DeviceFamily | 'All'>('All');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const setSelectedDevice = (device: DeviceProfile) => {
    setSelectedDeviceState(device);
  };

  const toggleMonsterMode = () => {
    setSelectedDeviceState(prev => {
      const nextActive = !prev.monsterModeActive;
      return {
        ...prev,
        monsterModeActive: nextActive,
        fpsCurrent: nextActive ? 144 : 120,
        temperature: nextActive ? 37.6 : 33.8,
        thermalStatus: nextActive ? 'NORMAL' : 'OPTIMAL'
      };
    });
  };

  const applySmartSetup = (activity: SmartActivityType) => {
    setAppliedSetupActivity(activity);
    if (activity === 'gaming') {
      setSelectedDeviceState(prev => ({
        ...prev,
        monsterModeActive: true,
        fpsCurrent: 144
      }));
    } else {
      setSelectedDeviceState(prev => ({
        ...prev,
        monsterModeActive: false,
        fpsCurrent: activity === 'everyday' ? 120 : (activity === 'creating' ? 60 : 90)
      }));
    }
  };

  const submitFeedback = (
    rawText: string,
    inputMode: 'voice' | 'type' | 'show',
    structured: StructuredAiSignal,
    userEdited: boolean
  ): FeedbackSubmission => {
    const newSubmission: FeedbackSubmission = {
      id: `sub-${Date.now()}`,
      timestamp: 'Just now',
      inputMode,
      rawText,
      audioDurationSeconds: inputMode === 'voice' ? 6 : undefined,
      structured,
      userEdited,
      status: 'clustered_into_pulse'
    };

    setFeedbackSubmissions(prev => [newSubmission, ...prev]);

    // Increment related signals count on matched canonical cluster
    setCanonicalSignals(prev => prev.map(sig => {
      if (sig.id === 'sig-gaming-battery-exp' && structured.category.toLowerCase().includes('gaming')) {
        return {
          ...sig,
          supportCount: sig.supportCount + 1,
          relatedSignalsCount: sig.relatedSignalsCount + 1
        };
      }
      return sig;
    }));

    return newSubmission;
  };

  const toggleSupportSignal = (signalId: string) => {
    setCanonicalSignals(prev => prev.map(sig => {
      if (sig.id === signalId) {
        const next = !sig.hasSupported;
        return {
          ...sig,
          hasSupported: next,
          supportCount: next ? sig.supportCount + 1 : sig.supportCount - 1
        };
      }
      return sig;
    }));
  };

  const joinBetaExperiment = (id: string) => {
    setBetaExperiments(prev => prev.map(exp => 
      exp.id === id ? { 
        ...exp, 
        isJoined: !exp.isJoined, 
        participantsCount: exp.isJoined ? exp.participantsCount - 1 : exp.participantsCount + 1 
      } : exp
    ));
  };

  const submitBetaFeedback = (id: string, sentiment: 'Worked' | 'Partially' | 'Needs improvement', feedbackNote: string) => {
    setBetaExperiments(prev => prev.map(exp => 
      exp.id === id ? {
        ...exp,
        status: 'Completed',
        userFeedbackGiven: {
          sentiment,
          feedbackNote,
          timestamp: 'Just now'
        }
      } : exp
    ));
  };

  const openSmartWithActivity = (activity: SmartActivityType) => {
    setActiveSmartActivity(activity);
    setCurrentTab('smart');
  };

  const openTellIqoo = () => {
    setCurrentTab('voice');
  };

  const openQuesterVoice = () => {
    setCurrentTab('community');
  };

  return (
    <AppContext.Provider value={{
      currentTab,
      setCurrentTab,
      selectedDevice,
      setSelectedDevice,
      allDevices: DEVICE_PROFILES,
      toggleMonsterMode,
      activeSmartActivity,
      setActiveSmartActivity,
      appliedSetupActivity,
      applySmartSetup,
      feedbackSubmissions,
      submitFeedback,
      canonicalSignals,
      toggleSupportSignal,
      betaExperiments,
      joinBetaExperiment,
      submitBetaFeedback,
      selectedFamilyFilter,
      setSelectedFamilyFilter,
      isSettingsOpen,
      setIsSettingsOpen,
      openSmartWithActivity,
      openTellIqoo,
      openQuesterVoice,
      currentScreen: 'main',
      setCurrentScreen: () => {},
      viewportMode: 'desktop',
      setViewportMode: () => {},
      openPulseDashboard: () => setCurrentTab('pulse'),
      resetDemoFlow: () => setCurrentTab('home'),
      userInterests: ['gaming', 'camera'],
      toggleInterest: () => {},
      toggleUpvoteIssue: () => {},
      communityIssues: [],
      userFeedbackList: [],
      returnToMobile: () => setCurrentTab('home')
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  return context || defaultContextValue;
};
