import React from "react";
import Header from "../../Header";

const ContactPage = () => {
  return (
    <>
      <Header selectedPage={'contact'}/>
      <div className="mt-[150px]">
        <div className="font-[500] mb-[50px] text-[32px]">
          <p>New Challenge to Discuss?</p>
          <p>Let's Get in Touch.</p>
        </div>
        <div className="">
          <div>
            <a
              href="mailto:cloud830902@gmail.com"
              className="font-500 hover:underline"
            >
              cloud830902@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/cloud-hung/"
              className="font-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
