import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import style from './Specs.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Specs() {
  return (
    <section
      id='specs'
      className={classNames({
        [style.specs]: style.specs,
        [layout.section]: layout.section,
        [layout.grid]: layout.grid
      })}
    >
      <article>
        <Fade bottom>
          <h2
            className={classNames({
              [layout.section__title]: layout.section__title,
              [layout['section__title-gradient']]:
                layout['section__title-gradient']
            })}
          >
            Specs
          </h2>
        </Fade>
        <div
          className={classNames({
            [style.specs__container]: style.specs__container,
            [layout.container]: layout.container,
            [layout.grid]: layout.grid
          })}
        >
          <div
            className={classNames({
              [style.specs__content]: style.specs__content,
              [layout.grid]: layout.grid
            })}
          >
            <Fade left cascade>
              <div className={style.specs__data}>
                <i
                  className={classNames('ri-links-line', {
                    [style.specs__icon]: style.specs__icon
                  })}
                ></i>
                <h3 className={style.specs__title}>Innovative SaaS Platform</h3>
                <span className={style.specs__subtitle}>Cutting-edge technology for efficiency.</span>
              </div>

              <div className={style.specs__data}>
                <i
                  className={classNames('ri-shopping-cart-line', {
                    [style.specs__icon]: style.specs__icon
                  })}
                ></i>
                <h3 className={style.specs__title}>Simple Order Management</h3>
                <span className={style.specs__subtitle}>Streamlined process for convenience.</span>
              </div>

              <div className={style.specs__data}>
                <i
                  className={classNames('ri-bar-chart-line', {
                    [style.specs__icon]: style.specs__icon
                  })}
                ></i>
                <h3 className={style.specs__title}>Real-time Analytics Insights</h3>
                <span className={style.specs__subtitle}>
                Instant data for informed decisions.
                </span>
              </div>

              <div className={style.specs__data}>
                <i
                  className={classNames('ri-user-line', {
                    [style.specs__icon]: style.specs__icon
                  })}
                ></i>
                <h3 className={style.specs__title}>Efficient Vendor Collaboration</h3>
                <span className={style.specs__subtitle}>
                Seamless coordination for smooth operations.
                </span>
              </div>
            </Fade>
          </div>
          <div>
            <Fade right>
              <img
                src='/images/specs.png'
                className={style.specs__img}
                alt='Beats Studio 3 specs'
                title='Beats Studio 3 specs'
              />
            </Fade>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Specs
