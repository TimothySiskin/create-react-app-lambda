import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <h1 className="about">About us</h1>
      {/* {Who we are} */}
      <section className="about-section">
        <header>
          <h2>Who we are</h2>
        </header>

        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          iaculis magna non porta imperdiet. Nam euismod sem ex, quis rutrum
          erat lobortis nec. Aliquam erat volutpat. Integer et tellus velit.
          Vivamus quis sapien at tortor eleifend faucibus sit amet a nisi. Donec
          laoreet tellus eget justo porta, in mollis nibh auctor. Donec urna
          leo, porta sit amet ligula nec, sagittis rhoncus libero. Donec pretium
          tristique suscipit. Curabitur quis lectus massa. Sed feugiat quam
          lectus, ut semper nunc consequat vel. Ut iaculis diam in consequat
          laoreet. Morbi viverra scelerisque augue, in imperdiet odio ultrices
          nec. In eleifend gravida nisl, sit amet volutpat nunc volutpat ac.
          Integer a suscipit neque.
        </article>
        <article>
          Donec iaculis pulvinar odio, et hendrerit arcu faucibus in. Aenean
          consequat vitae ipsum a consequat. Proin non interdum ex, in fringilla
          nunc. Nulla tempor velit nibh, in commodo lorem eleifend quis. Vivamus
          eu tellus fringilla, mollis elit non, vulputate mi. Vivamus sit amet
          neque sed mi finibus ultrices nec ut dolor. Pellentesque non sagittis
          diam, at euismod sem. Duis at velit neque.
        </article>
      </section>
      {/* {some pictures} */}
      <div className="img-container">
        <p>działam</p>
        <img
          src="images\merakist-l5if0iQfV4c-unsplash.jpg"
          alt="letters making SEO word"
          className="img-1"
        />
        <img
          src="images\diggity-marketing-s8HyIEe7lF0-unsplash.jpg"
          alt="a men writing on translucent board"
          className="img-2"
        />
      </div>
      {/* {WHO WE WORK WITH} */}
      {/* {some pictures}   */}

      {/* {MARKETPLACE DIFFERENTIATION} */}

      {/* {Testimonials} */}
      <Footer />
    </>
  );
}
