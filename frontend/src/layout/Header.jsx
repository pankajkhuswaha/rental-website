import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";

const Header = () => {
  const categories = [
    "Home Furniture",
    "Appliances",
    "Office Furniture",
    "Combos",
    "For Businesses",
    "Offers",
  ];
  // const menuOptions = {
  //   homeFurniture: ["Bed Room", "Living Room", "Dining Room", "study Room"],
  //   Appliances: [
  //     { link: "Refrigerator", text: "Refrigerator" },
  //     { link: "Water Purifier", text: "Water Purifier" },
  //     { link: "Air Conditioners", text: "Air Conditioners" },
  //     { link: "Washing Machine", text: "Washing Machine" },
  //     { link: "Telivision", text: "Telivision" },
  //     { link: "Appliance", text: "other Appliance" },
  //   ],
  //   officeFurniture: [
  //     { link: "workstation", text: "Workstation" },
  //     { link: "Ofiice-chair", text: "Ofiice Chair" },
  //   ],
  // };
  const [search, setsearch] = useState();
  const handleSearchView = () => {
    const toggle = $("header .search-bar").attr("class").includes("show");
    if (toggle) {
      $("header .search-bar").removeClass("show");
      // $('header .search-bar').style
      $("#header-search").fadeIn();
    } else {
      $("header .search-bar").addClass("show");
      $("header .search-bar input[name='search']").focus();
    }
  };
  const [navtoggle, setNavtoggle] = useState(false);
  const toogleNavar = () => {
    if (!navtoggle) {
      $(".burger-navbar").addClass("active");
      setNavtoggle(!navtoggle);
    } else {
      $(".burger-navbar").removeClass("active");
      setNavtoggle(!navtoggle);
    }
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 pb-2 md:pb-0 z-10">
        <div className="container">
          <div className="flex justify-between items-center md:py-[22px] py-3.5">
            <div className="flex items-center">
              <button
                id="menu-icon"
                type="button"
                name="menu"
                className="menu-icon"
                onClick={toogleNavar}
              >
                <span className="material-symbols-outlined text-2xl md:text-[25px] hover:text-pearl-alpha font-medium align-middle">
                  <FaBars />
                </span>
              </button>
              <p className="hidden md:block text-base leading-4 text-ruby-beta hover:text-pearl-alpha cursor-pointer ml-7 choose-your-city">
                <span>Bangalore</span>
                <i className="border-l-6 border-r-6 border-transparent border-t-6 border-t-black inline-block ml-1.5"></i>
              </p>
              <Link to="/" className="md:hidden">
                <p className="font-bold ml-2">leelu Chacha</p>
              </Link>
            </div>
            <Link
              to={"/"}
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
            >
              <h4 className="font-bold h4">Leelu Chacha</h4>
            </Link>
            <div className="flex items-center">
              <p className="md:hidden text-xs leading-4 text-ruby-beta choose-your-city">
                <span>Bangalore</span>
                <i className="border-l-5 border-r-5 border-transparent border-t-5 border-t-black inline-block ml-px"></i>
              </p>
              <div
                className="relative hidden md:block"
                onClick={handleSearchView}
              >
                <span className="inline-block align-middle hover:text-pearl-alpha cursor-pointer">
                  <AiOutlineSearch fontSize={22} />
                </span>
                <div className="absolute -top-2.5 right-0 w-80 border border-[#ECECEC] rounded-lg bg-white shadow-xss opacity-0  search-bar">
                  <div className="relative overflow-hidden">
                    <input
                      type="search"
                      className=" w-full py-2 pl-10 pr-4 text-sm leading-6 font-medium text-ruby-alpha placeholder-[#9C9C9C] placeholder:font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pearl-alpha"
                      placeholder="Search furniture, appliances, etc"
                      value={search}
                      onChange={(e) => setsearch(e.target.value)}
                    />
                    <button
                      name="back"
                      id="search-close"
                      onClick={handleSearchView}
                      className="bg-contain w-4 h-4 absolute top-3 left-3"
                    >
                      <AiOutlineArrowLeft className="font-bold text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <Link to="/user/favourite" className="relative ml-4 md:ml-9">
                <span className=" inline-block align-middle hover:text-pearl-alpha cursor-pointer">
                  <AiOutlineHeart fontSize={22} />
                </span>
              </Link>
              <div className="relative ml-4 sm:ml-8">
                <Link to={"/cart"}>
                  <span className="material-symbols-outlined inline-block align-middle hover:text-pearl-alpha cursor-pointer">
                    <MdOutlineShoppingCart fontSize={22} />
                  </span>
                </Link>
              </div>
              <div className="relative ml-8 hidden md:block navigation">
                <Link to={"/user"}>
                  <span className="material-symbols-outlined inline-block align-middle hover:text-pearl-alpha relative z-10 cursor-pointer">
                    <BiUserCircle fontSize={22} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* todo1 mobile responsive searchabr */}
          <div
            onClick={() => setsearch("")}
            className="relative md:hidden border border-[#ECECEC] bg-white rounded-lg"
          >
            <span
              onClick={() => setsearch("")}
              className="absolute top-0.5 right-8 mt-1 text-xl"
            >
              <RxCross2 />
            </span>
            <input
              className="py-2 pl-3 pr-10 w-full text-xs leading-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pearl-alpha placeholder-ruby-beta"
              type="text"
              placeholder="Search for Furniture, Appliances, etc"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <span
              className="absolute top-2.5 right-3 bg-no-repeat bg-contain w-3.5 h-3.5 inline-block"
              style={{
                backgroundImage:
                  "url(https://d3juy0zp6vqec8.cloudfront.net/images/icn-search.svg)",
              }}
            ></span>
            <ul
              className="search-bar-listing py-1 absolute top-[33px] right-0 w-full bg-white h-80 shadow-xss overflow-y-auto hidden"
              style={{ display: "none" }}
            ></ul>
          </div>
          <div id="on-scroll-hide" className="">
            <div className="md:flex justify-center hidden py-3">
              {categories.map((ele, i) => {
                return (
                  <a key={i} className="mr-8">
                    <span className="text-base leading-6 font-normal text-ruby-beta hover:text-ruby-alpha">
                      {ele}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* todo Menu sidebar */}
        <div className="burger-navbar fixed top-0 md:left-[-378px] h-screen md:w-[378px] w-full left-[-100%] bg-white overflow-x-hidden z-97 transition-all shadow-md duration-500 ease-in-out">
          <div className="burger-navbar-body">
            <div className="relative md:pl-10 md:py-10 md:pr-4 p-4">
              <span
                onClick={toogleNavar}
                className="bg-no-repeat w-4 h-4 absolute top-11 right-4 cursor-pointer block close"
                style={{
                  backgroundImage:
                    "url(https://d3juy0zp6vqec8.cloudfront.net/images/icons/close.svg)",
                }}
              ></span>
              <ul className="navbar-menu pt-10">
                <li className="mb-4">
                  <Link
                    to={"/city/rent"}
                    aria-label="All Furniture"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    All
                  </Link>
                </li>
                <li className="accordion-tab mb-4">
                  <div className="accordion-title flex justify-between items-center text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha cursor-pointer">
                    <a
                      href="javascript:void(0)"
                      aria-label="Home Furniture"
                      target="_self"
                      rel="noopener"
                      className="flex justify-between items-center w-full"
                    >
                      <p>Home Furniture</p>
                      <span className="chevron"></span>
                    </a>
                  </div>
                  <ul className="accordion-content p-4">
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/bedroom-furniture-on-rent"
                        aria-label="Bed Room"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Bed Room
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/living-room-furniture-on-rent"
                        aria-label="Living Room"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Living Room
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/dining-furniture-on-rent"
                        aria-label="Dining Room"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Dining Room
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/study-room-furniture-rental"
                        aria-label="Study Room"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Study Room
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="accordion-tab mb-4">
                  <div className="accordion-title flex justify-between items-center text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha cursor-pointer">
                    <a
                      aria-label="Appliances"
                      target="_self"
                      rel="noopener"
                      className="flex justify-between items-center w-full"
                    >
                      <p>Appliances</p>
                      <span className="chevron"></span>
                    </a>
                  </div>
                  <ul className="accordion-content p-4">
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/refrigerator-rentals"
                        aria-label="Refrigerator"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Refrigerator
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="accordion-tab mb-4">
                  <div className="accordion-title flex justify-between items-center text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha cursor-pointer">
                    <a
                      aria-label="Office Furniture"
                      target="_self"
                      rel="noopener"
                      className="flex justify-between items-center w-full"
                    >
                      <p>Office Furniture</p>
                      <span className="chevron"></span>
                    </a>
                  </div>
                  <ul className="accordion-content p-4">
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/workstations"
                        aria-label="Workstations"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Workstations
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="accordion-tab mb-4">
                  <div className="accordion-title flex justify-between items-center text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha cursor-pointer">
                    <a
                      aria-label="Combos"
                      target="_self"
                      rel="noopener"
                      className="flex justify-between items-center w-full"
                    >
                      <p>Combos</p>
                      <span className="chevron"></span>
                    </a>
                  </div>
                  <ul className="accordion-content p-4">
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/bangalore/bedroom"
                        aria-label="Bed Room"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Bed Room
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="my-4 border-b border-dashed"></li>
                <li className="mb-4">
                  <a className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha">
                    Furniture Sale
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/pages/bulkorder"
                    aria-label="Furniture Sale"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    For Businesses
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/customerpayment"
                    aria-label="Customer Payment"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Customer Payment
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/reviews-testimonials/all"
                    aria-label="Customer Reviews"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Customer Reviews
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/pages/careers"
                    aria-label="Join Our Team"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Join Our Team
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/blog/"
                    aria-label="Blog"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/pages/offers"
                    aria-label="Offers"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Offers
                  </a>
                </li>
                <li className="my-4 border-b border-dashed"></li>
                <li className="accordion-tab">
                  <div className="accordion-title flex justify-between items-center text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha cursor-pointer">
                    <p>Help</p>
                    <span className="chevron"></span>
                  </div>
                  <ul className="accordion-content p-4">
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/pages/how-it-works"
                        aria-label="How It Works?"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        How It Works?
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/pages/faq"
                        aria-label="FAQs"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://cityfurnish.com/pages/contact-us"
                        aria-label="Contact us"
                        target="_self"
                        rel="noopener"
                        className="text-sm md:text-base font-normal leading-6 text-ruby-beta hover:text-pearl-alpha"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="my-4 border-b border-dashed"></li>
                <li className="mb-4">
                  <a
                    href="https://cityfurnish.com/user_sign_up"
                    aria-label="Profile"
                    target="_self"
                    rel="noopener"
                    className="text-sm md:text-base font-medium leading-6 text-ruby-alpha hover:text-pearl-alpha"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            {/* QR code sectionpart here */}
            {/* <div className="border-t mt-16 md:py-13 py-4 md:px-4 px-4 text-center">
              <p className="md:text-2xl md:leading-8 text-lg leading-6 font-bold text-ruby-alpha md:mb-4 mb-2">
                We are better on our <br /> Mobile App!
              </p>
              <p className="text-xs leading-4 font-normal text-ruby-beta md:mb-7 mb-6">
                Get instant 100CF coins when you download our app
              </p>
              <div className="flex justify-between md:block">
                <div className="flex md:justify-between items-center px-2.5">
                  <div className="mr-4 md:mr-0">
                    <p className="text-lg leading-6 md:text-2xl md:leading-8 font-bold text-[#7895B0] text-center">
                      100K+
                    </p>
                    <p className="text-10 leading-4 md:text-lg font-normal leading-26 text-[#7895B0] align-top">
                      Subscribers
                    </p>
                  </div>
                  <div>
                    <p className="text-lg leading-6 md:text-2xl md:leading-8 font-bold text-[#7895B0] text-center">
                      Google
                    </p>
                    <p className="text-10 leading-4 md:text-lg font-normal leading-26 text-[#7895B0] align-top">
                      4.5
                    </p>
                    <span
                      className="w-[55px] h-3.5 md:w-[112px] md:h-[25px] inline-block bg-no-repeat bg-contain align-top mt-px"
                      style={{
                        backgroundImage:
                          "url(https://d3juy0zp6vqec8.cloudfront.net/images/rating-4-5.webp)",
                      }}
                    ></span>
                  </div>
                </div>
                <a
                  href="https://cityfurnish.com/scanQRCode"
                  className="md:hidden"
                >
                  <span className="py-1 px-4 rounded-full bg-pearl-alpha border border-white text-base leading-8 font-semibold text-white shadow-xss inline-block">
                    Download now
                  </span>
                </a>
              </div>
              <span
                className="bg-no-repeat bg-contain hidden md:inline-block w-36 h-36 mt-2 mb-4"
                style={{
                  backgroundImage:
                    "url(https://d3juy0zp6vqec8.cloudfront.net/images/app-scanner.svg)",
                }}
              ></span>
              <p className="text-base leading-6 font-medium text-ruby-beta hidden md:block">
                Scan this code with your mobile device to download the
                Cityfurnish app.
              </p>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
