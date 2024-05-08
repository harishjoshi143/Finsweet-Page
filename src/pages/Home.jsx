import flats from "../assets/images/png/col-7.png";
import { obj } from "../helper/Data";
import pattern from "../assets/images/png/pattern.png";
import gang from "../assets/images/png/group.png";
import social from "../assets/images/png/Social wrapper.png";
import feature from "../assets/images/png/Featured in.png";
import logo1 from "../assets/images/png/Logo 1.png";
import logo2 from "../assets/images/png/Logo 2.png";
import logo3 from "../assets/images/png/Logo 3.png";
import logo4 from "../assets/images/png/Logo 4.png";
import logo5 from "../assets/images/png/Logo 5.png";
import jony from "../assets/images/png/jonathan.png";
import back from "../assets/images/png/Back button.png";
import next from "../assets/images/png/Next Button.png";
import Button from "../components/Button";

export default function Home() {
  console.log(obj.post);
  return (
    <>
      {/* header */}

      <div className="bg_img">
        <div className="z-2 position-absolute margin_top_120 ms-5 max_width">
          <p className="text-white fs_16 fw-semibold ff_inter letter_spacing">
            POSTED ON <span className="fw_900 ff_inter fs_16">STARTUP</span>
          </p>
          <h1 className="text-white mt-4 ms-5 ff_sen fw-bold fs_56">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="text-white fs_16 ff_inter fw-normal mt-4">
            By <span className="text_yellow"> James West</span> | May 23, 2022{" "}
          </p>
          <p className="fs_16 ff_inter fw-normal text-white mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button name="Read More" />
        </div>
      </div>

      {/* feature post */}

      <div className="container">
        <div className="row margin_top_120 w-100 justify-content-center">
          <div className="col-lg-7 col-sm-10 col-12">
            <h2 className="color_blue">Featured Post</h2>
            <div className="p-4 m-2 border_outer ">
              <img className="w-100" src={flats} alt="flats" />
              <p className="fw-medium fs_14 ff_inter pt-4 mt-2">
                {" "}
                By <span className="color_blue">John Doe</span> l May 23, 2022
              </p>
              <p className="fs_28 ff_sen fw-bold lr_spacing_1 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <p className="fw-normal fs_16 ff_inter mt-3 lh_28 color_grey mb-2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <Button name="Read More" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-10 mt-4 col-12 mt-lg-0">
            <div className="d-flex align-items-center  justify-content-between">
              <h2 className="color_blue">All Posts</h2>
              <h2 className="ff_inter fw-normal fs_16 color_purple">
                View All
              </h2>
            </div>
            <div className="m-2">
              {obj.post.map((item, index) => {
                return (
                  <div key={index} className="hover">
                    <p className="fw-medium fs_14 ff_inter pt-4 mt-2">
                      {" "}
                      {item.first}
                    </p>
                    <p className="fs_24 fw-bold ff_sen">{item.kuch}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* pattern */}

      <div className="margin_top_120 container">
        <div className="text-end">
          <img className="width_80" src={pattern} alt="" />
        </div>
        <div className="bg_grey">
          <div className="row justify-content-between padding_96_80">
            <div className="col-lg-6 col-12">
              <p className="ff_inter fw-semibold fs_16 color_blue">ABOUT US</p>
              <p className="fw-bold fs_36 ff_sen color_blue mt-4">
                We are a community of <br /> content writers who share their
                learnings
              </p>
              <p className="color_grey ff_inter fw-normal fs_16 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="color_purple fs_18 fw-bold ff_sen mt-3">
                Read More{" "}
              </button>
            </div>
            <div className="col-lg-6 mt-4 col-12 mt-lg-0">
              <p className="ff_inter fw-semibold fs_16 color_blue">
                Our mision
              </p>
              <p className="fw-bold fs_28 ff_sen color_blue mt-4">
                Creating valuable content for creatives all around the world
              </p>
              <p className="color_grey ff_inter fw-normal fs_16 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* choose a category */}

      <div className="margin_top_120">
        <p className="text-center ff_sen fs_36 fw-bold color_blue">
          Choose A Category
        </p>
        <div className="row container mt-5 m-auto justify-content-center">
          {obj.cards.map((item, index) => {
            return (
              <>
                <div className="col-lg-3 col-sm-6 col-10 mb-4" key={index}>
                  <div className="padding_24 border_outer yellow_hover">
                    <img src={item.phone} alt="" />
                    <p className="fw-bold fs_28 ff_sen color_blue mt-3">
                      {item.buss}
                    </p>
                    <p className="ff_inter fw-normal fs_16 color_grey mt-1">
                      {item.lorem}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* tour */}

      <div className="margin_top_120 container">
        <div className="row position-relative justify-content-center justify-content-lg-start">
          <div className="col-lg-8 col-10">
            <img className="w-100" src={gang} alt="" />
          </div>
          <div className="col-lg-5 col-10 white_card padding_80 card_set">
            <p className="ff_inter fw-semibold fs_16 letter_spacing color_blue">
              Why we started{" "}
            </p>
            <h1 className="fs_48 fw-bold ff_sen color_blue mt-4">
              It started out as a simple idea and evolved into our passion
            </h1>
            <p className="ff_inter fs_16 fw-normal color_grey mt-3 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button name="Discover our story >" />
          </div>
        </div>
      </div>

      {/* list of author */}

      <div className="margin_top_120">
        <p className="text-center ff_sen fs_36 fw-bold color_blue">
          List of Authors
        </p>
        <div className="row m-auto mt-5 container justify-content-center">
          {obj.author.map((item, index) => {
            return (
              <>
                <div className="col-lg-3 col-sm-6 col-10 mb-4 " key={index}>
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

      {/* logos */}

      <div className="container d-flex flex-wrap justify-content-center justify-content-sm-between align-items-center margin_top_120">
        <img className="mb-3" src={feature} alt="" />
        <img className="mb-3" src={logo1} alt="" />
        <img className="mb-3" src={logo2} alt="" />
        <img className="mb-3" src={logo3} alt="" />
        <img className="mb-3" src={logo4} alt="" />
        <img className="mb-3" src={logo5} alt="" />
      </div>

      {/* testimonials */}

      <div className="container margin_top_120 bg_orange">
        <div className="row justify-content-between padding_90">
          <div className="col-lg-5">
            <p className="fw-semibold ff_inter fs_16 color_blue">
              TESTIMONIALs
            </p>
            <p className="fs_36 ff_sen fw-bold color_blue">
              What people say about our blog
            </p>
            <p className="ff_inter fs_16 fw-normal color_blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="col-1">
            <div className="line_vertical"></div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <p className="fs_24 ff_sen fw-bold color_blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-flex mt-lg-5 pt-5">
              <div>
                <img src={jony} alt="jony" />
              </div>
              <div className="ms-2">
                <p className="fs_24 ff_sen fw-bold color_blue">
                  Jonathan Vallem
                </p>
                <p className="ff_inter fw-normal fs_16 color_grey">
                  New york, USA
                </p>
              </div>
              <div className="ms-5 ps-3 d-flex align-items-center">
                <img src={back} alt="" />
                <img className="ms-2" src={next} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* join our team  */}

      <div className="margin_top_120 container ">
        <div className="max_width_414 m-auto text-center">
          <p className="color_blue fw-bold fs_36 ff_sen ">
            Join our team to be a part of our story
          </p>
          <p className="ff_inter fw-normal fs_16 color_grey mt-3 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button name="Join Now" />
        </div>
      </div>
    </>
  );
}
