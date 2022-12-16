import React from 'react';

const TutorialVideo = () => {
  return (
    <div id="creator-menu-tutorial" className="hidden">
      <div className="padding readable-background margin-bottom">
        <h5 className="padding input-description">
          Here is a tutorial that covers the basics of using Card Conjurer:
        </h5>
      </div>
      <div className="video">
        <iframe
          title="Tutorial Video"
          width="560"
          height="315"
          allow="encrypted-media"
          allowFullScreen
          src="https://www.youtube-nocookie.com/embed/e4tnOiub41g?rel=0"
        />
      </div>
    </div>
  );
};

export default TutorialVideo;
