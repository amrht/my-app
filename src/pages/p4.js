import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bgi from "./bgi2.jpg";
import elps from "./elps.png";
import bookmark from "./bookmark.svg";
import eye from "./Group.svg";
import date from "./Date.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 928 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 928, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
window.onload = function(){ 
  const information = document.getElementById("information");
  const eligibility = document.getElementById("eligibility");
  const decription = document.getElementById("description");
  const btne = document.getElementById("toggle");
  const btnd = document.getElementById("docb");
  const btni = document.getElementById("infob");

  btne.onclick = function () {
    eligibility.style.display = "block";
    decription.style.display = "none";
    information.style.display = "none";
  };
  btnd.onclick = function () {
    eligibility.style.display = "none";
    decription.style.display = "block";
    information.style.display = "none";
  };
  btni.onclick = function () {
    eligibility.style.display = "none";
    decription.style.display = "none";
    information.style.display = "block";
  };
};
const Page = () => {


  return (
    <div
      className="main-body bg-slate-100 h-full min-w-full"
      style={{ fontFamily: "Poppins" }}
    >
      <div
        class="crd h-80 bg-white"
        style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
      >
        <div
          className="search h-64 w-full"
          style={{ backgroundImage: `url(${bgi})`, backgroundSize: "cover" }}
        >
          <div className="grid w-full">
            <span class="w-4/5" style={{ margin: "0 auto" }}>
              <input
                className="placeholder:italic mt-32 h-10 bg-white w-3/5 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for Job Titles"
                type="text"
                name="search"
              />
              <select name="cars" id="cars" class="h-10 w-1/5 sm:text-sm">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <button
                className="text-white h-10 rounded-r w-1/5"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #E61B1E, #4E47E5)",
                }}
              >
                Search
              </button>
            </span>
          </div>
        </div>
        <div class="h-16 pt-3 w-4/5 text-left" style={{ margin: "auto" }}>
          <p class="text-xl" style={{ margin: "auto" }}>
            {" "}
            BreadCrumbs{" "}
          </p>
        </div>
      </div>
      <div
        class="centr w-4/5 block md:flex mt-4 bg-slate-100"
        style={{ justifyContent: "space-around", margin: "0 auto" }}
      >
        <div
          class="float-right w-full md:w-3/4"
          style={{ paddingRight: "15px" }}
        >
          <Card
            style={{
              borderRadius: "15px",
              marginBottom: "16px",
              marginTop: "10px",
              padding: "20px",
              width: "100%",
            }}
          >
            <div class="flex">
              <div>
                <Card.Body class="flex" style={{ alignItems: "flex-start" }}>
                  <div className="float-left h-24 w-24">
                    <img
                      className="mt-1"
                      style={{
                        height: "80px",
                        width: "80px",
                        minWidth: "80px",
                      }}
                    />
                  </div>
                  <div class="float-right pl-2 pr-4 w-full">
                    <p class="text-2xl text-left mb-0">
                      House Driver Required in Qatar
                    </p>
                    <p class="text-left text-slate-500">Netflix Technologies</p>
                  </div>
                  <div class="hidden md:block">
                    <span
                      class="flex items-center"
                      style={{ marginBottom: "15px" }}
                    >
                      <img src={eye} style={{ height: "20x", width: "20px" }} />
                      <p class="mb-0 text-slate-500 px-2">Views</p>
                      <p class="mb-0">88.8k</p>
                    </span>
                    <span
                      class="flex items-center"
                      style={{ marginBottom: "15px" }}
                    >
                      <img
                        src={date}
                        style={{ height: "20x", width: "20px" }}
                      />
                      <p class="mb-0 text-slate-500 px-2">Posted</p>
                      <p class="mb-0">18/12/2022</p>
                    </span>
                    <span
                      class="flex items-center"
                      style={{ marginBottom: "15px" }}
                    >
                      <img src="" style={{ height: "20x", width: "20px" }} />
                      <p class="mb-0 text-slate-500 px-2">Category</p>
                      <p class="mb-0">Service</p>
                    </span>
                  </div>
                </Card.Body>
                <div class="ml-4">
                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>

                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>

                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>

                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>

                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>

                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>

                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>
                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>
                  <div
                    class="tiles m-2 float-left flex"
                    style={{
                      alignItems: "center",
                      width: "160px",
                      padding: "4px",
                      borderRadius: "4px",
                      boxShadow: "0px 0px 20px 0px rgba(194, 194, 194, 0.25)",
                    }}
                  >
                    <img src={elps} style={{ height: "38px", width: "38px" }} />
                    <div class="p-2 text-left">
                      <p class="text-2xl mb-0">105</p>
                      <p
                        class="text-sm text-slate-500 mb-0"
                        style={{ marginTop: "-8px" }}
                      >
                        Vacancies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="md:hidden block" style={{ marginLeft: "32px" }}>
              <span class="flex items-center" style={{ marginBottom: "15px" }}>
                <img src={eye} style={{ height: "20x", width: "20px" }} />
                <p class="mb-0 text-slate-500 px-2">Views</p>
                <p class="mb-0">88.8k</p>
              </span>
              <span class="flex items-center" style={{ marginBottom: "15px" }}>
                <img src={date} style={{ height: "20x", width: "20px" }} />
                <p class="mb-0 text-slate-500 px-2">Posted</p>
                <p class="mb-0">18/12/2022</p>
              </span>
              <span class="flex items-center" style={{ marginBottom: "15px" }}>
                <img src="" style={{ height: "20x", width: "20px" }} />
                <p class="mb-0 text-slate-500 px-2">Category</p>
                <p class="mb-0">Service</p>
              </span>
            </div>
          </Card>

          <div class="md:flex block mt-8">
            <button
              id="infob"
              class="funcbtn px-4 mb-2 no-underline text-slate-500"
            >
              Information
            </button>
            <button
              id="docb"
              class="funcbtn px-4 mb-2 no-underline text-slate-500"
            >
              Documents Required
            </button>
            <button
              id="toggle"
              class="funcbtn px-4 mb-2 no-underline text-slate-500"
            >
              Eligibility
            </button>
          </div>
          <hr
            style={{
              backgroundImage: "linear-gradient(50deg, #E61B1E, #4E47E5)",
              height: "4px",
              opacity: "1",
            }}
          />

          <Card
            id="information"
            style={{
              padding: "20px",
              width: "100%",
              marginBottom: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              justifyContent: "center",
            }}
          >
            <Card.Body class="p-2">
              <div class="flex" style={{ paddingBottom: "18px" }}>
                <img src="#" style={{ height: "32px", width: "32px" }} />
                <p
                  class="mb-0 text-black"
                  style={{
                    lineHeight: "30px",
                    paddingLeft: "9px",
                    fontSize: "16px",
                    alignContent: "center",
                  }}
                >
                  Information
                </p>
              </div>
              <p class="mb-0 text-left" style={{ fontSize: "15px" }}>
                How does Cloudflare Images Work? Cloudflare Images automatically
                serves the most optimized version of your image. You no longer
                need to worry about things like file extensions. When a client
                requests a picture hosted on Cloudflare Images, we automatically
                identify the ideal supported format at the Cloudflare edge and
                serve it to the client from the edge.
              </p>
            </Card.Body>
          </Card>

          <Card
            id="description"
            style={{
              padding: "20px",
              width: "100%",
              marginBottom: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              justifyContent: "center",
              display: "none",
            }}
          >
            <Card.Body class="p-2">
              <div class="flex" style={{ paddingBottom: "18px" }}>
                <img src="#" style={{ height: "32px", width: "32px" }} />
                <p
                  class="mb-0 text-black"
                  style={{
                    lineHeight: "30px",
                    paddingLeft: "9px",
                    fontSize: "16px",
                    alignContent: "center",
                  }}
                >
                  Job Description
                </p>
              </div>
              <p class="mb-0 text-left" style={{ fontSize: "15px" }}>
                Hello Everyone, Yesterday I had my weekly meeting for the GSOC
                project Exerciser Evaluation Mode. Previous Week Task:
                Completion and Merging of the open PRs and researching the first
                task regarding upgrading the node packages to the latest
                version. Tasks for this week: All packages must be upgraded to
                the latest version, and check if all code runs perfectly after
                upgrading the packages. Our next meeting is scheduled for 19th
                June 2022
              </p>
            </Card.Body>
          </Card>

          <Card
            id="eligibility"
            style={{
              padding: "20px",
              width: "100%",
              marginBottom: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              justifyContent: "center",
              display: "none",
            }}
          >
            <Card.Body class="p-2">
              <div class="flex" style={{ paddingBottom: "18px" }}>
                <img src="#" style={{ height: "32px", width: "32px" }} />
                <p
                  class="mb-0 text-black"
                  style={{
                    lineHeight: "30px",
                    paddingLeft: "9px",
                    fontSize: "16px",
                    alignContent: "center",
                  }}
                >
                  Eligibility
                </p>
              </div>
              <p class="mb-0 text-left" style={{ fontSize: "15px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                commodo pellentesque elementum facilisis gravida. Est proin diam
                cursus quam purus. Ultrices leo est iaculis elementum tortor
                nibh. Penatibus varius lorem sapien tincidunt at. Mollis justo,
                nisi, ultrices nullam odio leo. Molestie leo est lectus placerat
                cras eget. Diam nisl at sed amet tortor semper.
              </p>
              <p class="mb-0 text-left" style={{ fontSize: "15px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                commodo pellentesque elementum facilisis gravida. Est proin diam
                cursus quam purus. Ultrices leo est iaculis elementum tortor
                nibh. Penatibus varius lorem sapien tincidunt at. Mollis justo,
                nisi, ultrices nullam odio leo. Molestie leo est lectus placerat
                cras eget. Diam nisl at sed amet tortor semper.
              </p>
              <p class="mb-0 text-left" style={{ fontSize: "15px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                commodo pellentesque elementum facilisis gravida. Est proin diam
                cursus quam purus. Ultrices leo est iaculis elementum tortor
                nibh. Penatibus varius lorem sapien tincidunt at. Mollis justo,
                nisi, ultrices nullam odio leo. Molestie leo est lectus placerat
                cras eget. Diam nisl at sed amet tortor semper.
              </p>
            </Card.Body>
          </Card>

          <h2 class="text-left pl-4 mt-4">Similar Jobs</h2>

          <Carousel responsive={responsive}>
            <div>
              <Card
                style={{
                  borderRadius: "15px",
                  marginBottom: "16px",
                  marginTop: "10px",
                  padding: "5px",
                  width: "260px",
                }}
              >
                <Card.Body>
                  <p class="text-xl text-left mt-2">
                    House Driver Required in Qatar
                  </p>
                  <div
                    class="flex"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="">
                      <img className="h-16 w-16 mt-1 float-left" />

                      <p class="text-left mb-0 ml-4 float-right">Tags</p>
                    </div>

                    <span
                      class="flex"
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        style={{
                          marginBottom: "4px",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#4E47E5",
                        }}
                      >
                        Full Time
                      </a>
                      <a
                        style={{
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#E61B1E",
                        }}
                      >
                        Full Time
                      </a>
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span class="flex items-baseline">
                      <img
                        src={bookmark}
                        class="mr-0"
                        style={{ height: "11px", width: "8px" }}
                      />
                      <p class="text-left mb-0" style={{ fontSize: "16px" }}>
                        999$
                      </p>
                    </span>
                    <button
                      class="sm:float-right "
                      style={{
                        height: "36px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "18px",
                        padding: "4px",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #E61B1E, #4E47E5)",
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  borderRadius: "15px",
                  marginBottom: "16px",
                  marginTop: "10px",
                  padding: "5px",
                  width: "260px",
                }}
              >
                <Card.Body>
                  <p class="text-xl text-left mt-2">
                    House Driver Required in Qatar
                  </p>
                  <div
                    class="flex"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="">
                      <img className="h-16 w-16 mt-1 float-left" />

                      <p class="text-left mb-0 ml-4 float-right">Tags</p>
                    </div>

                    <span
                      class="flex"
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        style={{
                          marginBottom: "4px",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#4E47E5",
                        }}
                      >
                        Full Time
                      </a>
                      <a
                        style={{
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#E61B1E",
                        }}
                      >
                        Full Time
                      </a>
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span class="flex items-baseline">
                      <img
                        src={bookmark}
                        class="mr-0"
                        style={{ height: "11px", width: "8px" }}
                      />
                      <p class="text-left mb-0" style={{ fontSize: "16px" }}>
                        999$
                      </p>
                    </span>
                    <button
                      class="sm:float-right "
                      style={{
                        height: "36px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "18px",
                        padding: "4px",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #E61B1E, #4E47E5)",
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  borderRadius: "15px",
                  marginBottom: "16px",
                  marginTop: "10px",
                  padding: "5px",
                  width: "260px",
                }}
              >
                <Card.Body>
                  <p class="text-xl text-left mt-2">
                    House Driver Required in Qatar
                  </p>
                  <div
                    class="flex"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="">
                      <img className="h-16 w-16 mt-1 float-left" />

                      <p class="text-left mb-0 ml-4 float-right">Tags</p>
                    </div>

                    <span
                      class="flex"
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        style={{
                          marginBottom: "4px",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#4E47E5",
                        }}
                      >
                        Full Time
                      </a>
                      <a
                        style={{
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#E61B1E",
                        }}
                      >
                        Full Time
                      </a>
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span class="flex items-baseline">
                      <img
                        src={bookmark}
                        class="mr-0"
                        style={{ height: "11px", width: "8px" }}
                      />
                      <p class="text-left mb-0" style={{ fontSize: "16px" }}>
                        999$
                      </p>
                    </span>
                    <button
                      class="sm:float-right "
                      style={{
                        height: "36px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "18px",
                        padding: "4px",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #E61B1E, #4E47E5)",
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  borderRadius: "15px",
                  marginBottom: "16px",
                  marginTop: "10px",
                  padding: "5px",
                  width: "260px",
                }}
              >
                <Card.Body>
                  <p class="text-xl text-left mt-2">
                    House Driver Required in Qatar
                  </p>
                  <div
                    class="flex"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="">
                      <img className="h-16 w-16 mt-1 float-left" />

                      <p class="text-left mb-0 ml-4 float-right">Tags</p>
                    </div>

                    <span
                      class="flex"
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        style={{
                          marginBottom: "4px",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#4E47E5",
                        }}
                      >
                        Full Time
                      </a>
                      <a
                        style={{
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#E61B1E",
                        }}
                      >
                        Full Time
                      </a>
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span class="flex items-baseline">
                      <img
                        src={bookmark}
                        class="mr-0"
                        style={{ height: "11px", width: "8px" }}
                      />
                      <p class="text-left mb-0" style={{ fontSize: "16px" }}>
                        999$
                      </p>
                    </span>
                    <button
                      class="sm:float-right "
                      style={{
                        height: "36px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "18px",
                        padding: "4px",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #E61B1E, #4E47E5)",
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  borderRadius: "15px",
                  marginBottom: "16px",
                  marginTop: "10px",
                  padding: "5px",
                  width: "260px",
                }}
              >
                <Card.Body>
                  <p class="text-xl text-left mt-2">
                    House Driver Required in Qatar
                  </p>
                  <div
                    class="flex"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="">
                      <img className="h-16 w-16 mt-1 float-left" />

                      <p class="text-left mb-0 ml-4 float-right">Tags</p>
                    </div>

                    <span
                      class="flex"
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        style={{
                          marginBottom: "4px",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#4E47E5",
                        }}
                      >
                        Full Time
                      </a>
                      <a
                        style={{
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#E61B1E",
                        }}
                      >
                        Full Time
                      </a>
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span class="flex items-baseline">
                      <img
                        src={bookmark}
                        class="mr-0"
                        style={{ height: "11px", width: "8px" }}
                      />
                      <p class="text-left mb-0" style={{ fontSize: "16px" }}>
                        999$
                      </p>
                    </span>
                    <button
                      class="sm:float-right "
                      style={{
                        height: "36px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "18px",
                        padding: "4px",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #E61B1E, #4E47E5)",
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  borderRadius: "15px",
                  marginBottom: "16px",
                  marginTop: "10px",
                  padding: "5px",
                  width: "260px",
                }}
              >
                <Card.Body>
                  <p class="text-xl text-left mt-2">
                    House Driver Required in Qatar
                  </p>
                  <div
                    class="flex"
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="">
                      <img className="h-16 w-16 mt-1 float-left" />

                      <p class="text-left mb-0 ml-4 float-right">Tags</p>
                    </div>

                    <span
                      class="flex"
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        style={{
                          marginBottom: "4px",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#4E47E5",
                        }}
                      >
                        Full Time
                      </a>
                      <a
                        style={{
                          color: "white",
                          fontSize: "12px",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#E61B1E",
                        }}
                      >
                        Full Time
                      </a>
                    </span>
                  </div>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span class="flex items-baseline">
                      <img
                        src={bookmark}
                        class="mr-0"
                        style={{ height: "11px", width: "8px" }}
                      />
                      <p class="text-left mb-0" style={{ fontSize: "16px" }}>
                        999$
                      </p>
                    </span>
                    <button
                      class="sm:float-right "
                      style={{
                        height: "36px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "18px",
                        padding: "4px",
                        borderRadius: "5px",
                        backgroundImage:
                          "linear-gradient(to right, #E61B1E, #4E47E5)",
                      }}
                    >
                      Apply Now
                    </button>
                  </span>
                </Card.Body>
              </Card>
            </div>
          </Carousel>

          <div class="mt-4 w-full overflow-hidden" style={{ margin: "0 auto" }}>
            <Card
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "10px",
                marginLeft: "5px",
                marginRight: "5px",
                justifyContent: "center",
              }}
            >
              <Card.Body class="p-2">
                <div class="oneline pb-2">
                  <h2 class="md:float-left text-base">Jobs by Location : </h2>
                  <div class="md:text-left">
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Delhi
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Mumbai
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Banglore
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Lucknow
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Ahmedabad
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Madras
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      London
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Paris
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Chicago
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      New York
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      California
                    </a>
                  </div>
                </div>
                <div class="oneline pb-2">
                  <h2 class="md:float-left text-base">Jobs by Location : </h2>
                  <div class="md:text-left">
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Delhi
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Mumbai
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Banglore
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Lucknow
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Ahmedabad
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Madras
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      London
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Paris
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Chicago
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      New York
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      California
                    </a>
                  </div>
                </div>
                <div class="oneline pb-2">
                  <h2 class="md:float-left text-base">Jobs by Location : </h2>
                  <div class="md:text-left">
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Delhi
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Mumbai
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Banglore
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Lucknow
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Ahmedabad
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Madras
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      London
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Paris
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Chicago
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      New York
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      California
                    </a>
                  </div>
                </div>
                <div class="oneline pb-2">
                  <h2 class="md:float-left text-base">Jobs by Location : </h2>
                  <div class="md:text-left">
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Delhi
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Mumbai
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Banglore
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Lucknow
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Ahmedabad
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Madras
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      London
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Paris
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      Chicago
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      New York
                    </a>
                    <a class="text-slate-500 text-xs no-underline border-r-2 leading-3 px-2 border-slate-500">
                      California
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div class="float-right w-full md:w-1/4 text-sm">
          <Card
            class="sticky top-0"
            style={{
              position: "sticky",

              top: "0",
              marginBottom: "5px",
              borderRadius: "15px",
              backgroundImage: "linear-gradient(50deg, #E61B1E, #4E47E5)",
            }}
          >
            <Card.Body>
              <Card.Title class="text-left text-2xl text-white">
                Let Us Call You
              </Card.Title>

              <p class="text-left text-white label-input100 mb-0 mt-2">Name</p>
              <input
                class="input100 mb-0 h-8 rounded w-full margin10"
                style={{ paddingLeft: "5px" }}
                type="text"
                name="name"
                placeholder="Name"
              />
              <br />
              <p class="text-left text-white label-input100 mb-0 mt-2">
                Your Mobile
              </p>
              <input
                class="input100 rounded mb-0 h-8 w-full"
                style={{ paddingLeft: "5px" }}
                type="text"
                name="Mobile"
                placeholder="Mobile"
              />
              <br />
              <p class="text-left text-white label-input100 mb-0 mt-2">Email</p>
              <input
                class="rounded input100 mb-0 h-8 w-full"
                style={{ paddingLeft: "5px" }}
                type="text"
                name="email"
                placeholder="Email"
              />
              <br />
              <p class="text-left text-white label-input100 mb-0 mt-2">
                Message
              </p>
              <input
                class="rounded input100 mb-0 h-8 w-full"
                style={{ paddingLeft: "5px" }}
                type="text"
                name="Message"
                placeholder="Message"
              />
              <br />
              <br />
              <button class="bg-white text-black py-2 px-4 float-left rounded">
                Button
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
