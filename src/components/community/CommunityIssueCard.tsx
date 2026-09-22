import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Flame, CheckCircle, Smartphone, Sparkles, Heart, Lightbulb, Bell } from 'lucide-react';
import { CommunityIssue } from '../../types';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/AppContext';
import './CommunityIssueCard.css';

interface CommunityIssueCardProps {
  issue: CommunityIssue;
}

export const CommunityIssueCard: React.FC<CommunityIssueCardProps> = ({ issue }) => {
  const { toggleUpvoteIssue, selectedDevice } = useApp();
  const isMyDeviceAffected = issue.deviceModels.includes(selectedDevice.name);
  const [following, setFollowing] = useState(false);

  const getStatusBadge = (status: CommunityIssue['status']) => {
    switch (status) {
      case 'Reproduced in Lab':
        return <Badge variant="yellow" size="sm">Lab Reproduced</Badge>;
      case 'Fix in OTA Beta':
        return <Badge variant="emerald" size="sm" pulse>OTA Fix Ready</Badge>;
      case 'Resolved':
        return <Badge variant="emerald" size="sm">Resolved</Badge>;
      case 'Investigating':
      default:
        return <Badge variant="subtle" size="sm">Investigating</Badge>;
    }
  };

  return (
    <div className={`community-issue-card glass-card ${issue.isHot ? 'is-hot-signal' : ''}`}>
      <div className="issue-card-top">
        <div className="issue-tags-row">
          {issue.isHot ? (
            <span className="quester-signal-pill pill-hot">
              <Flame size={12} className="hot-flame" />
              TRENDING
            </span>
          ) : (
            <span className="quester-signal-pill pill-req">
              <Lightbulb size={12} />
              REQUESTED
            </span>
          )}
          <Badge variant="cyan" size="sm">
            {issue.category}
          </Badge>
          {isMyDeviceAffected && (
            <span className="my-device-pill font-tech">
              {selectedDevice.name}
            </span>
          )}
        </div>
        {getStatusBadge(issue.status)}
      </div>

      <h4 className="issue-title">{issue.title}</h4>
      <p className="issue-desc">{issue.description}</p>

      {/* AI Cluster Summary Note */}
      {issue.aiClusterSummary && (
        <div className="ai-community-cluster-box">
          <Sparkles size={13} className="sparkle-blue" />
          <span className="ai-cluster-text">{issue.aiClusterSummary}</span>
        </div>
      )}

      {/* Footer with actions: Support, Discuss, Follow */}
      <div className="issue-card-footer">
        <div className="issue-models-list">
          <Smartphone size={12} className="phone-icon" />
          <span>{issue.deviceModels.join(', ')}</span>
        </div>

        <div className="issue-actions-right">
          <button 
            className={`action-btn-small ${following ? 'is-following' : ''}`}
            onClick={() => setFollowing(!following)}
            title="Follow this experience signal"
          >
            <Bell size={12} />
            <span>{following ? 'Following' : 'Follow'}</span>
          </button>

          <div className="comments-count">
            <MessageSquare size={13} />
            <span>{issue.commentsCount}</span>
          </div>

          <button
            className={`upvote-me-too-btn ${issue.hasUserUpvoted ? 'has-upvoted' : ''}`}
            onClick={() => toggleUpvoteIssue?.(issue.id)}
          >
            <ThumbsUp size={13} className="upvote-icon" />
            <span className="font-tech">{issue.hasUserUpvoted ? 'SUPPORTED' : 'SUPPORT (+1)'}</span>
            <span className="upvote-count">{issue.upvotes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
