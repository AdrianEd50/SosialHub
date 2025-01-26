import React, { useState } from 'react';

const Likebutton = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    setLikes(hasLiked ? likes - 1 : likes + 1);
    setHasLiked(!hasLiked);
  };

  return (
    <button className="like-button" onClick={handleLike}>
      {hasLiked ? 'Unlike' : 'Like'} ({likes})
    </button>
  );
};

export default Likebutton;