import classNames from 'classnames'
import Zoom from 'react-reveal/Zoom'
import style from './SponsorList.module.scss'
import layout from '../../../styles/Layout.module.scss'

function SponsorList() {
  return (
    <section
      id='sponsors'
      className={classNames({
        [style.sponsor]: style.sponsor,
        [layout.section]: layout.section
      })}
    >
      <article
        className={classNames({
          [style.sponsor__container]: style.sponsor__container,
          [layout.container]: layout.container,
          [layout.grid]: layout.grid
        })}
      >
        <Zoom cascade>
            <div className={style.sponsor__contain}>
            <img
              src='/images/support.png'
              alt='Apple'
              title='Apple'
              className={style.sponsor__img}
            />
            <div className={style.sponsor__content}>
            <h1>
            100% Return Policy
            </h1>
            <p>
            Any Time Return Product
            </p>
            </div>
            </div>
         
            <div className={style.sponsor__contain}>
            <img
              src='/images/deal.png'
              alt='Apple'
              title='Apple'
              className={style.sponsor__img}
            />
            <div className={style.sponsor__content}>
            <h1>
            100% Return Policy
            </h1>
            <p>
            Any Time Return Product
            </p>
            </div>
            </div>

             <div className={style.sponsor__contain}>
            <img
              src='/images/save.png'
              alt='Apple'
              title='Apple'
              className={style.sponsor__img}
            />
            <div className={style.sponsor__content}>
            <h1>
            100% Return Policy
            </h1>
            <p>
            Any Time Return Product
            </p>
            </div>
            </div>

     
            <div className={style.sponsor__contain}>
            <img
              src='/images/exchange.png'
              alt='Apple'
              title='Apple'
              className={style.sponsor__img}
            />
            <div className={style.sponsor__content}>
            <h1>
            100% Return Policy
            </h1>
            <p>
            Any Time Return Product
            </p>
            </div>
            </div>
        </Zoom>
      </article>
    </section>
  )
}

export default SponsorList
