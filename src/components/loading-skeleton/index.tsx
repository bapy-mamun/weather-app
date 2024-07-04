import React from 'react';
import './index.scss';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="c-loading-skeleton">
      <div className="c-loading-skeleton__header"></div>
      <div className="c-loading-skeleton__body"></div>
      <div className="c-loading-skeleton__footer"></div>
    </div>
  );
};

export default LoadingSkeleton;
