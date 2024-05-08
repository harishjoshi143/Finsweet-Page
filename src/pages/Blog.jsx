import Man from "../assets/images/png/an.png";
import { obj } from "../helper/Data";
import Button from "../components/Button";

export default function blog() {
  return (
    <>
      <div className="bgc_purple">
        <div className="container">
          <div className="row justify-content-between flex-column-reverse flex-lg-row align-items-center pt-4 pb-5">
            <div className="col-lg-6 col-12 mt-5">
              <h6 className="text-black fw-medium fs_16 ff_inter">
                Featured Post
              </h6>
              <h2 className="text-black fw-bold fs_36 ff_sen mt-3 pt-1">
                Step-by-step guide to choosing great font pairs
              </h2>
              <h5 className="text-black fw-medium fs_14 mt-3">
                By <span className="clr_purple me-2">John Doe</span> l May 23,
                2022{" "}
              </h5>
              <p className="clr_grey fw-normal fs_16 ff_inter mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="mt-4 pt-2 ff_sen">
              <Button name="Read More"/>
              </div>
            </div>
            <div className="col-lg-5 col-10 mt-5 pb-md-5">
              <img className="w-100" src={Man} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-black fw-bold fs_48 ff_sen mt-5">All posts</h1>
        <hr className="mt-4" />
        {obj.allPosts.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="row mt-5 pt-3 align-items-center justify-content-center">
                  <div className="col-lg-6 col-sm-9">
                    <img className="w-100" src={item.img} alt="" />
                  </div>
                  <div className="col-lg-6 col-sm-10 mt-4 mt-lg-0">
                    <div>
                      <h6 className="clr_purple fw-semibold fs_16 ff_inter">
                        {item.text}
                      </h6>
                    </div>

                    <h2 className=" text-black fw-bold fs_36 ff_sen mt-3 pt-1">
                      {item.lorem}
                    </h2>
                    <p className="clr_grey fw-normal fs_16 ff_inter mt-3">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* categories */}

      <div className="margin_top_120 container">
        <p className="ff_sen fs_36 fw-bold color_blue">Categories</p>
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
          <Button name="Join Now"/>
        </div>
      </div>
    </>
  );
}
