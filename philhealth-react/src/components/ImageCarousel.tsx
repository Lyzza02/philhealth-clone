import { Box } from "react-bulma-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel(){
  return (
    <Box>
    <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="https://www.philhealth.gov.ph/images/thankyou_bnnr01.jpg" alt="" />
        {/* <p className="legend">Legend 1</p> */}
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/membership_bnnr02.jpg" alt="" />
        {/* <p className="legend">Legend 2</p> */}
      </div>

      <div>
        <img src="https://www.philhealth.gov.ph/images/bagongpilipinas_bnnr_v1.jpg" alt="" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
    </Carousel>
    </Box>
  );
}

export default ImageCarousel;