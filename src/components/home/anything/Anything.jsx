import React from 'react';

const Anything = () => {
  return (
    <section className="anything">
      <div className="container">
        <div className="title">
          <h1>Don't Want to Miss Anything?</h1>
          <img src="images/arrowsanything.svg" alt="" />
        </div>
        <div className="checksbox">
          <div className="checktitle">
            <h5>Sign up for <br /> Newsletters</h5>
          </div>
          <div className="inner-container">
            <div className="check">
              <input type="checkbox" id="checkbox1" name="group" />
              <label htmlFor="checkbox1">Daily Newsletter</label><br />

              <input type="checkbox" id="checkbox2" name="group" />
              <label htmlFor="checkbox2">Event Updates</label><br />
            </div>
            <div className="check">
              <input type="checkbox" id="checkbox3" name="group" />
              <label htmlFor="checkbox3">Advertising Updates</label><br />

              <input type="checkbox" id="checkbox4" name="group" />
              <label htmlFor="checkbox4">Startups Weekly</label><br />
            </div>
            <div className="check">
              <input type="checkbox" id="checkbox5" name="group" />
              <label htmlFor="checkbox5">Week in Review</label><br />

              <input type="checkbox" id="checkbox6" name="group" />
              <label htmlFor="checkbox6">Podcasts</label><br />
            </div>
          </div>
        </div>
        <div className="subscribecheck" >
          <input type="email" className="input-with-icon" placeholder="Your Email" />
          <button className="btn-theme">Subscribe*</button>
        </div>
        <p>*Yes, I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.</p>
      </div>
    </section>
  );
}

export default Anything;
