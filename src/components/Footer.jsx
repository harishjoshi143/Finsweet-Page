import footerlogo from "../assets/images/png/Logo.png";
import fb from "../assets/images/png/fb.png";
import twitter from "../assets/images/png/twitter.png";
import insta from "../assets/images/png/insta.png";
import linkedin from "../assets/images/png/linkedin.png";

export default function Footer() {
  return (
    <>
      <div className="bgc_darkblue pb-5 margin_top_120">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between pt-5 pb-5 flex-column flex-sm-row">
            <img className="w_sm_20" src={footerlogo} alt="" />
            <ul className="d-flex align-items-center gap-4 flex-wrap mt-3 mt-sm-0 justify-content-center justify-content-sm-start">
              <li className="text-white fw-normal fs_16">Home</li>
              <li className="text-white fw-normal fs_16">Blog</li>
              <li className="text-white fw-normal fs_16">About us</li>
              <li className="text-white fw-normal fs_16">Contact us</li>
              <li className="text-white fw-normal fs_16">Privacy Policy</li>
            </ul>
          </div>

          <div className="card_1">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6">
                <h2 className="text-white fw-bold fs_36">
                  Subscribe to our news letter to get latest updates and news
                </h2>
              </div>
              <div className="col-xl-5 mt-5 mt-xl-0">
                <div className="d-flex align-items-center flex-column flex-sm-row">
                  <input
                    className="fw-normal fs_16"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <button className="subscribe_btn fw-bold fs_18 ms-sm-4 mt-4 mt-sm-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-column flex-sm-row">
            <div className="mt-5">
              <h6 className="text-white fw-normal fs_16">
                Finstreet 118 2561 Fintown
              </h6>
              <h6 className="text-white fw-normal fs_16 mt-1">
                Hello@finsweet.com 020 7993 2905
              </h6>
            </div>
            <div className="mt-5">
              <img src={fb} alt="#" />
              <img className="ms-3" src={twitter} alt="#" />
              <img className="ms-3" src={insta} alt="" />
              <img className="ms-3" src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
