import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import style from './Home.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Home() {
  return (
    <section
      id='home'
      className={classNames({
        [style.home]: style.home,
        [layout.section]: layout.section
      })}
    >
      <article
        className={classNames({
          [style.home__container]: style.home__container,
          [layout.container]: layout.container,
          [layout.grid]: layout.grid
        })}
      >
        <div>
          <Fade top>
            <img
              src='/images/home.png'
              className={style.home__img}
              alt='Beats Studio 3'
              title='Beats Studio 3'
            />
          </Fade>
        </div>
        <div className={style.home__data}>
          <Fade bottom>
            <div className={style.home__header}>
              <h1 className={style.home__title}>Live Organic for Live Healthy</h1>
            </div>
            <div className={style.home__footer}>
              <p className={style.home__description}>
              {"Introducing India's largest farmer's community, where we bring the freshest, raw farm food straight to your kitchen. Our mission is to connect consumers with the bounty of our local farmers, ensuring the highest quality every step of the way."}
              </p>
              <a
                href='#'
                className={classNames({
                  [layout.button]: layout.button,
                  [layout['button--flex']]: layout['button--flex']
                })}
              >
                <span className={layout['button--flex']} title='Add to bag'>
                  <i
                    className={classNames('ri-shopping-bag-line', {
                      [layout.button__icon]: layout.button__icon
                    })}
                  ></i>
                  Download Now
                </span>
              </a>
            </div>
          </Fade>
        </div>
      </article>
    </section>
  )
}

export default Home
