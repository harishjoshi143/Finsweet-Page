import { useState } from "react";

export default function Contact() {
  function submitForm(e){
    e.preventDefault()
    console.log(name,email,query)
  }
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [query,setQuery] = useState("")

  return (
    <>
      <div className="container">
        <div className="text-center mt-5 pt-5">
          <h3 className="text-black ff_inter fw_900 fs_16 mt-4 pt-2">
            CONTACT US
          </h3>
          <h1 className="text-black ff_sen fw-bold fs_48 mt-2 pt-1">
            Let Start a Conversation
          </h1>
          <p className="clr_grey ff_inter fw-normal fs_16 mt-4 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className="text-center mt-5 pt-3">
          <div className="box_1 text-start">
            <div className="d-flex justify-content-between flex-column flex-md-row">
              <div>
                <h5 className="text-white fw-normal fs_14 ff_inter">
                  Working hours
                </h5>
                <div className="line mt-3"></div>
                <h5 className="text-white fw-bold fs_20 ff_sen mt-3">
                  Monday To Friday
                </h5>
                <h5 className="text-white fw-bold fs_20 ff_sen mt-1">
                  9:00 AM to 8:00 PM{" "}
                </h5>
                <h6 className="text-white fw-normal fs_16 ff_inter mt-1 op_60">
                  Our Support Team is available 24/7
                </h6>
              </div>
              <div className="mt-4 mt-md-0">
                <h5 className="text-white fw-normal fs_14 ff_inter">
                  Contact Us
                </h5>
                <div className="line mt-3"></div>
                <h5 className="text-white fw-bold fs_20 ff_sen mt-3">
                  020 7993 2905
                </h5>
                <h6 className="text-white fw-normal fs_16 ff_inter mt-1 op_60">
                  hello@finsweet.com
                </h6>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submitForm} className="text-center mt-4 pt-2">
          <input
            className="input_1 fw-normal fs_24 ff_inter text-black"
            type="text"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
          />{" "}
          <br />
          <br />
          <input
            className="input_1 fw-normal fs_24 ff_inter text-black"
            type="text"
            placeholder="Your Email"
            onChange={(e)=>setEmail(e.target.value)}
          />{" "}
          <br /> <br />
          <input
            className="input_1 fw-normal fs_24 ff_inter text-black"
            type="text"
            placeholder="Query Related"
            onChange={(e)=>setQuery(e.target.value)}
          />{" "}
          <br /> <br />
          <input
            className="input_2 fw-normal fs_24 ff_inter text-black"
            type="text"
            placeholder="Message"
          />
          <button type="submit" className="sendmsg_btn fw-bold fs_24 mt-3">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
