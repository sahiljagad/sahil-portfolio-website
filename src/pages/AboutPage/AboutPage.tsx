import "./AboutPage.css";

function AboutPage() {
  
  return (
    <div className='about-container'>
      <h1 className='page-title'>About Me</h1>
      <p className='blurb'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo.
      </p>
      <div className='about-section-container'>
        <div className='button container'>{/* add buttons here */}</div>
        {/* render content here */}
      </div>
    </div>
  );
}

export default AboutPage;
