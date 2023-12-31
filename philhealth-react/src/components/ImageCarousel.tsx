import { Box } from "react-bulma-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel(){
  return (
    <Box>
    <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/membership_bnnr02.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/konpckg_bnnr03.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/ims-advisory_bnnr.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/28th_bnnr.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/netsatisfaction_bnnr.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/hotline_bnnr_v1.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/konsulta_tbnnr07.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/callback_33.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/irm/images/irm_bnnr16.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/studies_bnnr1.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/covid/images/covid_bnnr.jpg" alt="" />
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/unicef_zben_v1.jpg" alt="" />
      </div>
    </Carousel>
    </Box>
  );
}

export default ImageCarousel;