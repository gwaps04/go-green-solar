import React from 'react';

const VideoSection = () => {
  return (
    // bg-light: Adds a very subtle gray background to separate it from the white hero and green about section
    <section className="bg-light py-5">
      <div className="container">
        
        {/* HEADER */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold text-uppercase mb-3">See Solar in Action</h2>
            <p className="lead text-muted">
              Is solar power really worth the investment? Watch this breakdown of real-world savings, 
              ROI, and the benefits of energy independence.
            </p>
          </div>
        </div>

        {/* VIDEO CONTAINER */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Bootstrap 5 Ratio Helper:
              - 'ratio' and 'ratio-16x9' ensure the video keeps its shape on all screen sizes.
              - 'shadow-lg' adds a nice professional drop shadow behind the video.
              - 'rounded' curves the corners slightly.
            */}
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/x2YcB8JPq4Q" 
                title="Is Solar Power Worth the Cost?" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;