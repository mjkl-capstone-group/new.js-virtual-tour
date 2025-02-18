"use client";

import { useEffect } from "react";
import AOS from "aos";
import "./page.css";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 150,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section"
        id="home"
        data-aos="fade-up"
        style={{
          height: "100vh",
        }}
      >
        <div className="container text-white text-center">
          <h1 className="display-5 mb-4">Explore Southern Leyte's Hidden Paradise</h1>
          <p className="lead-6 mb-4">
            Virtual tours of pristine beaches, majestic islands, and rich marine life
          </p>
          <a href="#tours" className="btn btn-primary btn-lg px-5">
            Start Exploring
          </a>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-5 leyte-bg-pattern" id="destinations">
        <div className="container py-5">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            <strong>Featured Destinations</strong>
          </h2>

          <div className="row g-4">
            {/* Sogod Bay */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="destination-card">
                <Image
                  src="/assets/photos/sogod-bay.jpg"
                  width={600}
                  height={400}
                  className="img-fluid"
                  alt="Sogod Bay"
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <div className="p-3 bg-white">
                  <h4>Sogod Bay</h4>
                  <p>Dive into the whale shark capital of Southern Leyte</p>
                  <button className="btn btn-primary" onClick={() => navigateToSample()}>
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>

            {/* Tangkaan Beach */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="destination-card">
                <Image
                  src="/assets/photos/tangkaan.jpg"
                  width={600}
                  height={400}
                  className="img-fluid"
                  alt="Tangkaan Beach"
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <div className="p-3 bg-white">
                  <h4>Tangkaan Beach</h4>
                  <p>White sand beach with stunning sunset views</p>
                  <button className="btn btn-primary" onClick={() => navigateToSample()}>
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>

            {/* Napantao Marine Sanctuary */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="destination-card">
                <Image
                  src="/assets/photos/bitoon.jpg"
                  width={600}
                  height={400}
                  className="img-fluid"
                  alt="Bitoon Beach"
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <div className="p-3 bg-white">
                  <h4>Bitoon Beach</h4>
                  <p>Secluded paradise with crystal-clear waters</p>
                  <button className="btn btn-primary" onClick={() => navigateToSample()}>
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light" id="about">
        <div className="container py-5">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            <strong> Why Choose Us </strong>
          </h2>

          <div className="row g-4 text-center">
            {/* Local Expertise */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className="fas fa-map-marked-alt feature-icon mb-3"></i>
              <h4>Local Expertise</h4>
              <p>Guided by Southern Leyte natives with deep cultural knowledge</p>
            </div>

            {/* 360° Experience */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-vr-cardboard feature-icon mb-3"></i>
              <h4>360° Experience</h4>
              <p>Immersive virtual tours of our province's best spots</p>
            </div>

            {/* Marine Conservation */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-fish feature-icon mb-3"></i>
              <h4>Marine Conservation</h4>
              <p>Supporting local conservation efforts</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
