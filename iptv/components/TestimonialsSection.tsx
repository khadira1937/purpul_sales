import Image from "next/image";
import Icon from "@/components/Icon";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-bg-overlay"></div>
      <div className="section-container">
        <div className="stars-rating">
          <Image
            src="/5-stars-1-copy.webp"
            alt="Five-star Premium IPTV UK reviews"
            width={200}
            height={41}
            loading="lazy"
            sizes="200px"
          />
        </div>
        <h2 className="section-title white">
          What UK Customers Say About IPTV Premium UK Service
        </h2>
        <p className="testimonials-subtitle">
          Trusted by 50,000+ happy UK customers across the country.
        </p>

        <div className="testimonials-slider" id="testimonials-slider">
          <div className="testimonials-track" id="testimonials-track">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
              </div>
              <p className="testimonial-text">
                &ldquo;
                  The best IPTV Premium UK service I've tried. 4K streams are brilliant and the sports channels never buffer.
                  &rdquo;
              </p>
              <div className="testimonial-author">
                <h4>James T. &mdash; Manchester</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
              </div>
              <p className="testimonial-text">
                &ldquo;
                I switched from Sky last year and I am saving over &pound;80 a month. Every channel I need is here. The setup took 5 minutes. Support was brilliant when I had a question.&rdquo;
              </p>
              <div className="testimonial-author">
                <h4>Sarah K. &mdash; London</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
              </div>
              <p className="testimonial-text">
                &ldquo;The 4K sports streams are brilliant. I expected buffering during big games. It never happened. The best IPTV service I have tried.&rdquo;
              </p>
              <div className="testimonial-author">
                <h4>Dave R. &mdash; Birmingham</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
              </div>
              <p className="testimonial-text">
                &ldquo;I tried 3 different IPTV providers before finding this one. Nothing came close. The built-in VPN is a great touch. Great value for money.&rdquo;
              </p>
              <div className="testimonial-author">
                <h4>Emma L. &mdash; Leeds</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
              </div>
              <p className="testimonial-text">
                &ldquo;I was not sure at first so I chose the 1 month plan. It won me over in the first hour. A cheap IPTV subscription that delivers premium quality.&rdquo;
              </p>
              <div className="testimonial-author">
                <h4>Paul M. &mdash; Glasgow</h4>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
              </div>
              <p className="testimonial-text">
                &ldquo;The VOD library is massive. My whole family uses it now. Kids watch cartoons, my husband watches sport, and I watch box sets. One plan covers everyone.&rdquo;
              </p>
              <div className="testimonial-author">
                <h4>Rachel O. &mdash; Bristol</h4>
              </div>
            </div>
          </div>
          <div className="slider-dots" id="slider-dots"></div>
        </div>
        <div className="spacer-20"></div>
        <div style={{ textAlign: "center" }}>
          <a href="/iptv-reviews">Read more reviews &rarr;</a>
        </div>
      </div>
    </section>
  );
}
