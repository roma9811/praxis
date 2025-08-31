 import "./Header.css";
/* Praxis Images */
import PraxisOne from "../../Assets/Praxis-images/praxis1.png";
import PraxisTwo from "../../Assets/Praxis-images/praxis2.png";
import PraxisThree from "../../Assets/Praxis-images/praxis3.png";
import PraxisFour from "../../Assets/Praxis-images/praxis4.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const HeaderComponent = () => {
  const images = [
    { original: PraxisOne, thumbnail: PraxisOne },
    { original: PraxisTwo, thumbnail: PraxisTwo },
    { original: PraxisThree, thumbnail: PraxisThree },
    { original: PraxisFour, thumbnail: PraxisFour },
  ];

  const renderItem = (item) => (
    <div className="gallery-slide">
      <LazyLoadImage
        src={item.original}
        alt="Praxis"
        effect="blur"
        width="100%"
        height="auto"
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  return (
    <AnimatedPage>
      <div className="header">
        <div className="container">
          <div className="praxis__box">
            <div className="praxis__text">
              <h1>
                Herzlich willkommen in der <br />
                <span>Praxis Dr. Sander </span>
                <br /> in Weinheim!
              </h1>
              <p>
                Wir freuen uns, Sie in unserer modernen und freundlichen Praxis
                begrüßen zu dürfen.
              </p>
              <p>
                Unser Ziel ist es, Ihnen eine umfassende, kompetente und
                einfühlsame medizinische Betreuung zu bieten – mit Zeit,
                Aufmerksamkeit und auf Augenhöhe.
              </p>
            </div>
            <div className="praxis__image">
              <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={6000}
                renderItem={renderItem}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
