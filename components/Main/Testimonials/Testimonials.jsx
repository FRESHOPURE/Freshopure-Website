import classNames from "classnames";
import Fade from "react-reveal/Fade";
import style from "./Testimonials.module.scss";
import layout from "../../../styles/Layout.module.scss";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className={classNames({
        [style.specs]: style.specs,
        [layout.section]: layout.section,
        [layout.grid]: layout.grid,
      })}
    >
      <article>
        <Fade bottom>
          <h2
            className={classNames({
              [layout.section__title]: layout.section__title,
              [layout["section__title-gradient"]]:
                layout["section__title-gradient"],
            })}
          >
            Testimonials
          </h2>
        </Fade>
        <div
          className={classNames({
            [style.specs__container]: style.specs__container,
            [layout.container]: layout.container,
            [layout.grid]: layout.grid,
          })}
        >
          <div
            className={classNames({
              [style.specs__content]: style.specs__content,
              [layout.grid]: layout.grid,
            })}
          >
            <Fade left cascade>
            <div className='wrapper'>
  <div className='carousel'>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-1.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Girraj (Chef)</p>
        <p>As a partner with freshopure, I guarantee the finest quality of vegetables. Each produce is carefully selected, sorted based on color and size, ensuring that only the best reaches your kitchen. With freshopure, you can also count on timely deliveries, ensuring that you always have access to the freshest ingredients for your culinary creations.</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-2.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Shakti Singh (The Fren)</p>
        <p>{"At The Fern, we proudly serve freshopure's exceptional quality food. Our commitment to using chemical-free vegetables guarantees a truly refreshing and natural taste in every dish. With freshopure, we ensure that you experience the true essence of pure and wholesome flavors, providing a delightful dining experience for our valued guests."}</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-3.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Rajesh Gupta (RK Hotels & Resort)</p>
        <p>We have partnered with freshopure to bring you the assurance of fresh and chemical-free food sourced directly from the farm. We prioritize the use of natural ingredients, allowing the true flavors to shine through in our dishes. With freshopure, we aim to provide the best culinary experience to each and every one of our esteemed customers, ensuring that every bite is a testament to our commitment to quality and taste.</p>
      </div>
    </div>
   
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-1.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Girraj (Chef)</p>
        <p>As a partner with freshopure, I guarantee the finest quality of vegetables. Each produce is carefully selected, sorted based on color and size, ensuring that only the best reaches your kitchen. With freshopure, you can also count on timely deliveries, ensuring that you always have access to the freshest ingredients for your culinary creations.</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-2.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Shakti Singh (The Fren)</p>
        <p>{"At The Fern, we proudly serve freshopure's exceptional quality food. Our commitment to using chemical-free vegetables guarantees a truly refreshing and natural taste in every dish. With freshopure, we ensure that you experience the true essence of pure and wholesome flavors, providing a delightful dining experience for our valued guests."}</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-3.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Rajesh Gupta (RK Hotels & Resort)</p>
        <p>We have partnered with freshopure to bring you the assurance of fresh and chemical-free food sourced directly from the farm. We prioritize the use of natural ingredients, allowing the true flavors to shine through in our dishes. With freshopure, we aim to provide the best culinary experience to each and every one of our esteemed customers, ensuring that every bite is a testament to our commitment to quality and taste.</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-1.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Girraj (Chef)</p>
        <p>As a partner with freshopure, I guarantee the finest quality of vegetables. Each produce is carefully selected, sorted based on color and size, ensuring that only the best reaches your kitchen. With freshopure, you can also count on timely deliveries, ensuring that you always have access to the freshest ingredients for your culinary creations.</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-2.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Shakti Singh (The Fren)</p>
        <p>{"At The Fern, we proudly serve freshopure's exceptional quality food. Our commitment to using chemical-free vegetables guarantees a truly refreshing and natural taste in every dish. With freshopure, we ensure that you experience the true essence of pure and wholesome flavors, providing a delightful dining experience for our valued guests."}</p>
      </div>
    </div>
    <div className='carousel__item'>
      <div className='carousel__item-head'>
        <img
                src='/images/avatar-3.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
      </div>
      <div className='carousel__item-body'>
        <p className='title'>Rajesh Gupta (RK Hotels & Resort)</p>
        <p>We have partnered with freshopure to bring you the assurance of fresh and chemical-free food sourced directly from the farm. We prioritize the use of natural ingredients, allowing the true flavors to shine through in our dishes. With freshopure, we aim to provide the best culinary experience to each and every one of our esteemed customers, ensuring that every bite is a testament to our commitment to quality and taste.</p>
      </div>
    </div>
  </div>
</div>
             
            </Fade>
          </div>
          <div>
            <Fade right>
              <img
                src="/images/testimonials.png"
                className={style.specs__img}
                alt="Beats Studio 3 specs"
                title="Beats Studio 3 specs"
              />
            </Fade>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Testimonials;
