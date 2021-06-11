import React from "react";

function Home() {
  return (
    <React.Fragment>
      <div className='home-main'>
        <div className='home-intro'>
          <div className='title'>
            <span className='healthy-life'> Healthy life with </span>
            <span className='nature-organic'>Nature Organic</span>
          </div>
          <div className='description'>
            <p>
              Vegetables are the edible parts of a plant that is used in cooking
              or can be eaten now
            </p>
          </div>
          <div className='explore-btn'>
            <button>Explore now</button>
          </div>
        </div>
        <div className='home-image'>
          <div className='flower'></div>
          <div className='header-background'>
            <div className='header-logo'></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
