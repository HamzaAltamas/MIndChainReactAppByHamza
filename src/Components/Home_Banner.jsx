import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Tilt from 'react-parallax-tilt'
import { Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

export const HomeBanner = () => {
  return (
    <>
      <div className="container-fluid bannerContainer">
        <div className="container banner_inner_container">
          <div className="row banner_content">
            <div className="col-lg-6 col-md-6 d-flex align-items-center">
              <div className="banner_texts">
                <img src='https://i.postimg.cc/50mQS8Sh/258486006-1043790149740423-6395229818010712532-n.png' className='mt-2 mb-2 banner_logo_image img-fluid'/>
                <p className="banner_medium_text">
                  THE WORLD'S MOST POWERFUL STORE OF VALUE CURRENCY
                </p>
                <p className="banner_small_text">
                  THE FIRST STABLE PROGRESSIVE COIN
                </p>
                <Tilt>
                  <button className="btn btn-danger mt-3">
                    <Nav.Link
                      style={{ marginLeft: '0' }}
                      className="d-flex align-items-center"
                      as={Link}
                      to="/read"
                    >
                      Read More
                    </Nav.Link>
                  </button>
                </Tilt>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner_img_animation d-flex align-items-center">
                <Tilt>
                  <img
                    className="img-fluid common_animation"
                    src="https://i.postimg.cc/tJM0KmzF/herobanerimage-6f1ab60e-1.png"
                  />
                </Tilt>
              </div>
            </div>
          </div>
          <div className="banner_down_svg row">
            <a
              href="#PricingTab"
              className="common_animation d-flex justify-content-center align-items-center"
            >
              <svg
                stroke="#fff"
                fill="#fff"
                viewBox="0 0 16 16"
                stroke-width="0"
                class="white"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
