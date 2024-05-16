import PhotoGalleryCard from "../../components/PhotoGalleryCard/PhotoGalleryCard";
import "./PhotographyHomePage.css";

import seattleAurora from "../../assets/seattle-aurora.jpg";
import india from "../../assets/india.jpg";
import costaRica from "../../assets/costaRica.jpg";
import yellowstone from "../../assets/yellowstone.jpg";
import africa from "../../assets/africa.jpeg";

function PhotographyHomePage() {
  return (
    <>
      <div className='photography-info-container'>
        <h1 className='page-title'>Photography</h1>
        <p className='blurb'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
      </div>
      <div className='images'>
        <PhotoGalleryCard path={seattleAurora} title='Seattle' />
        <PhotoGalleryCard path={india} title='Central India' />
        <PhotoGalleryCard path={costaRica} title='Costa Rica' />
        <PhotoGalleryCard path={yellowstone} title='Yellowstone' />
        <PhotoGalleryCard path={africa} title='Kenya + Tanzania' />
      </div>
    </>
  );
}

export default PhotographyHomePage;
