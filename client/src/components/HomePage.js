import React from "react";
export const HomePage = () => {
  return (
    <div className="app">
      <section id="home">
        <h2>Welcome to Drone Footage Website</h2>
        <p>
          Showcasing stunning aerial videos and photos of real estate
          properties.
        </p>
      </section>
      <section id="videos">
        <h2>Featured Videos</h2>
        <div className="video-gallery">
          {/* Replace with your video components */}
          <div className="video-card">
            <video controls>
              <source src="your-video-url.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section id="properties">
        <h2>Real Estate Properties</h2>
        <div className="property-gallery">
          {/* Replace with your property components */}
          <div className="property-card">
            <img src="your-image-url.jpg" alt="Property" />
          </div>
        </div>
      </section>
    </div>
  );
};
