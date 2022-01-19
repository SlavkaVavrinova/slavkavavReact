import { InstagramGallery } from 'instagram-gallery';

const Instagram = () => {
  return (
    <>
      <h2 >Sleduj mě na Instagramu</h2>
      <div className="instagram__area">
        <div className="instagram__mobile">
          <InstagramGallery
            className="instagram__feed"
            accessToken="IGQVJWTFQ3QjFLT2J2czZAFaUxHSVNLYzdQY1dyZA2ZA6ZAGtjRTZApanZAlVmlFeEtpYy1tVU1zdXEwZAW5VVW1qemw1cnM2XzZAieG1TeXJjeHJnejN1MnRBNjNGZAndYWG9kc2xfUnItZAFBPdUpfQjA0d0RtZAAZDZD"
            count={2}
          />
        </div>

        <div className="instagram__tablet">
          <InstagramGallery
            className="instagram__feed"
            accessToken="IGQVJWTFQ3QjFLT2J2czZAFaUxHSVNLYzdQY1dyZA2ZA6ZAGtjRTZApanZAlVmlFeEtpYy1tVU1zdXEwZAW5VVW1qemw1cnM2XzZAieG1TeXJjeHJnejN1MnRBNjNGZAndYWG9kc2xfUnItZAFBPdUpfQjA0d0RtZAAZDZD"
            count={3}
          />
        </div>

        <div className="instagram__web">
          <InstagramGallery
            className="instagram__feed"
            accessToken="IGQVJWTFQ3QjFLT2J2czZAFaUxHSVNLYzdQY1dyZA2ZA6ZAGtjRTZApanZAlVmlFeEtpYy1tVU1zdXEwZAW5VVW1qemw1cnM2XzZAieG1TeXJjeHJnejN1MnRBNjNGZAndYWG9kc2xfUnItZAFBPdUpfQjA0d0RtZAAZDZD"
            count={4}
          />
        </div>
      </div>
    </>
  );
};

export default Instagram;
