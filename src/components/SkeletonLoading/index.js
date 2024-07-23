import React from 'react';
import './styles.css';

const SkeletonLoading = () => {
  return (
    <div class="skeleton-container">
      <div class="skeleton-image"></div>
      <div class="skeleton-details">
        <div class="skeleton-line skeleton-line-long"></div>
        <div class="skeleton-line skeleton-line-long"></div>
        <div class="skeleton-line skeleton-line-short"></div>
        <div class="skeleton-line skeleton-line-medium"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
