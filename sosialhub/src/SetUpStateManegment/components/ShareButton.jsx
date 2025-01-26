import React from 'react';

const ShareButton = ({ postUrl }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(postUrl);
    alert('URL copied to clipboard!');
  };

  return (
    <button className="share-button" onClick={handleShare}>
      Share
    </button>
  );
};

export default ShareButton;