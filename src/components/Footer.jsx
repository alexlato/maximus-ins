import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
      <div>
        <h1 className="w-full text-3xl font-bold text-black">
          Maximus Insurance Agency Inc.
        </h1>
        <p className="py-4">
          Maximus Insurance Agency Inc. is licensed in all 50 states across the
          U.S and has the capability to provide the specific coverages you need.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-bold text-black">Insurance</h6>
          <ul>
            <li className="py-2 text-sm">Auto, Home, & Personal</li>
            <li className="py-2 text-sm">Business</li>
            <li className="py-2 text-sm">Trucking</li>
            <li className="py-2 text-sm">Contractor</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-black">Massapequa Office</h6>
          <ul>
            <li className="py-2 text-sm">
              684 Broadway Massapequa, New York, 11758
            </li>
            <li className="py-2 text-sm">Phone: (800) 698-3966</li>
            <li className="py-2 text-sm">Fax: (516) 308-4055</li>
            <li className="py-2 text-sm">Mon-Fri: 9:00am-5:00pm</li>
            <li className="py-2 text-sm">Sat-Sun: Closed</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-black">La Mesa Office</h6>
          <ul>
            <li className="py-2 text-sm">7853 El Cajon Blvd</li>
            <li className="py-2 text-sm">Suite C</li>
            <li className="py-2 text-sm">La Mesa, California 91942</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-black">Houston Office</h6>
          <ul>
            <li className="py-2 text-sm">650 N Sam Houston Pkwy E</li>
            <li className="py-2 text-sm">#507</li>
            <li className="py-2 text-sm">Houston, Texas 77060</li>
            <li className="py-2 text-sm">Mon-Fri: 9:00am-5:00pm</li>
            <li className="py-2 text-sm">Sat-Sun: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
