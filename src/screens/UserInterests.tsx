import React from 'react';
import { 
  Gamepad2, 
  Sparkles, 
  Camera, 
  Flame, 
  Zap, 
  Volume2, 
  Sliders, 
  MessageSquareShare, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { USER_INTERESTS } from '../data/interests';
import { Button } from '../components/common/Button';
import './Screens.css';

export const UserInterests: React.FC = () => {
  const { userInterests = [], toggleInterest = () => {}, setCurrentScreen, setCurrentTab } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Camera': return <Camera size={20} />;
      case 'Flame': return <Flame size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Volume2': return <Volume2 size={20} />;
      case 'Sliders': return <Sliders size={20} />;
      case 'MessageSquareShare': return <MessageSquareShare size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  const handleLaunchExperience = () => {
    setCurrentScreen?.('main');
    setCurrentTab('home');
  };

  return (
    <div className="screen-user-interests">
      <div className="interests-header">
        <span className="interests-tag font-tech">STEP 2 OF 2 • PERSONALIZATION</span>
        <h2 className="interests-title">Tailor Your Quest</h2>
        <p className="interests-subtitle">
          Select your passions. iQOO ONE will tailor AI recommendations for gaming, photography, and battery.
        </p>
      </div>

      <div className="interests-grid-scroll">
        {USER_INTERESTS.map(item => {
          const isSelected = userInterests.includes(item.id);
          return (
            <button
              key={item.id}
              className={`interest-card glass-card ${isSelected ? 'is-selected' : ''}`}
              onClick={() => toggleInterest(item.id)}
            >
              <div className="interest-card-top">
                <div className="interest-icon-wrap">
                  {getIcon(item.icon)}
                </div>
                <div className={`interest-select-indicator ${isSelected ? 'active' : ''}`}>
                  {isSelected && <Check size={12} />}
                </div>
              </div>

              <div className="interest-card-body">
                <span className="interest-category font-tech">{item.category}</span>
                <h4 className="interest-label">{item.label}</h4>
                <p className="interest-description">{item.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="interests-bottom-action">
        <div className="selected-count-pill font-tech">
          {userInterests.length} PASSIONS SELECTED
        </div>
        <Button
          variant="yellow"
          size="lg"
          fullWidth
          disabled={userInterests.length === 0}
          onClick={handleLaunchExperience}
          icon={<ArrowRight size={18} />}
          iconPosition="right"
        >
          Launch My iQOO Experience
        </Button>
      </div>
    </div>
  );
};
