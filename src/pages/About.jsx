import Overview from "../assets/images/png/Overview.png";
import knowmore from "../assets/images/png/Know more image.png";
import sittingpose from "../assets/images/png/sittingpose.png";
import { obj } from "../helper/Data";
import social from "../assets/images/png/Social wrapper.png";
import Button from "../components/Button";

export default function About() {
  return (
    <>
      <div className="container ">
        <div className="mt-md-5 pt-md-5">
          <div className="row mt-sm-5 pt-5 justify-content-between">
            <div className="col-md-7 position-relative">
              <div className="pos_card card_2">
                <h6 className="text-black ff_inter fw-medium fs_16">
                  ABOUT US
                </h6>
                <h1 className="text-black ff_sen fw-bold fs_48 mt-3">
                  We are a team of content writers who share their learnings
                </h1>
              </div>
            </div>

            <div className="col-md-4 fw-normal fs_16 ff_inter mt-4 mt-md-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>

          <div className="mt-sm-5 pt-4">
            <img className="w-100" src={Overview} alt="" />
          </div>
        </div>

        <div className="card_3">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 pe-5">
              <h6 className="text-black fw-semibold fs_16 ff_inter">
                Our mision
              </h6>
              <h3 className="text-black fw-bold fs_28 ff_sen mt-4">
                Creating valuable content for creatives all around the world
              </h3>
              <p className="clr_grey fw-normal fs_16 mt-3 ff_inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
              <h6 className="text-black fw-semibold fs_16 ff_inter">
                Our Vision
              </h6>
              <h3 className="text-black fw-bold fs_28 ff_sen mt-4">
                A platform that empowers individuals to improve
              </h3>
              <p className="clr_grey fw-normal fs_16 mt-3 ff_inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>

        {/* creative team section */}

        <div className="row align-items-center justify-content-between mt-md-5 pt-sm-5">
          <div className="col-lg-5 mt-5">
            <h2 className="text-black fw-bold fs_36 ff_sen">
              Our team of creatives
            </h2>
            <h4 className="text-black fw-bold fs_24 ff_sen mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p className="text-black fw-normal fs_16 ff_inter mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div className="col-lg-6 col-9 mt-5">
            <img className="w-100" src={knowmore} alt="" />
          </div>
        </div>

        <div className="row align-items-center justify-content-between mt-sm-5 pt-sm-5">
          <div className="col-lg-6 col-9 mt-5">
            <img className="w-100" src={sittingpose} alt="" />
          </div>
          <div className="col-lg-5 mt-5">
            <h2 className="text-black fw-bold fs_36 ff_sen">
              Why we started this Blog
            </h2>
            <h4 className="text-black fw-bold fs_24 ff_sen mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p className="text-black fw-normal fs_16 ff_inter mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>

      {/*list of author  */}

      <div className="mt-5">
        <p className="text-center ff_sen fs_36 fw-bold color_blue">
          List of Authors
        </p>
        <div className="row m-auto mt-5 container justify-content-center">
          {obj.author.map((item, index) => {
            return (
              <>
                <div className="col-lg-3 col-sm-6 col-10 mb-4" key={index}>
                  <div className="p-5 bg_grey text-center card_translate">
                    <img src={item.img} alt="" />
                    <p className="fw-bold fs_28 ff_sen color_blue mt-3 white_space">
                      {item.text}
                    </p>
                    <p className="fw-normal fs_14 ff_inter color_grey ">
                      {item.content}
                    </p>
                    <img className="mt-3" src={social} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* join our team */}

      <div className="margin_top_120 container ">
        <div className="max_width_414 m-auto text-center">
          <p className="color_blue fw-bold fs_36 ff_sen ">
            Join our team to be a part of our story
          </p>
          <p className="ff_inter fw-normal fs_16 color_grey mt-3 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button name = "Join Now"/>
        </div>
      </div>
    </>
  );
}
