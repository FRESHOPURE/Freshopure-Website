import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import style from './Case.module.scss'
import layout from '../../../styles/Layout.module.scss'
import './Case.module.css'

function Case() {
  return (
    <section
      id='case'
      className={classNames({
        [style.case]: style.case,
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
            Blogs
          </h2>
        </Fade>
       
          <Fade bottom>

          <div className={style.container}>
	<div className={style.card}>
		<figure className={style.card__thumb}>
			<img src="/images/blog6.jpg" alt="Picture by David Monje" className={style.card__image}/>
			<figcaption className={style.card__caption}>
				<h2 className={style.card__title}>Non GMO Crops and Organic farming</h2>
				<p className={style.card__snippet}>Non-GMO crops are a critical aspect of organic farming. Organic farmers understand the importance of growing crops that are free from genetically modified organisms (GMOs). Non-GMO crops not only protect the environment but also provide consumers with healthier, more nutritious food.
</p>
<a href="" className={style.card__button}>Read more</a>

			</figcaption>
		</figure>
	</div>

  <div className={style.card}>
		<figure className={style.card__thumb}>
			<img src="/images/blog5.jpg" alt="Picture by David Monje" className={style.card__image}/>
			<figcaption className={style.card__caption}>
				<h2 className={style.card__title}>Crop Rotation and Organic farming</h2>
				<p className={style.card__snippet}>Crop rotation is a crucial component of organic farming. It involves alternating the type of crops grown in a particular field over a set period. This practice helps to improve soil health, control pests and diseases, and increase crop yields.</p>
				<a href="" className={style.card__button}>Read more</a>
			</figcaption>
		</figure>
	</div>

  <div className={style.card}>
		<figure className={style.card__thumb}>
			<img src="/images/blog4.jpg" alt="Picture by David Monje" className={style.card__image}/>
			<figcaption className={style.card__caption}>
				<h2 className={style.card__title}>Composting and Orgainc farming</h2>
				<p className={style.card__snippet}>Composting is an essential aspect of organic farming. It involves the conversion of organic waste, such as food scraps and yard waste, into nutrient-rich soil. Composting is an eco-friendly and sustainable method for managing waste while also promoting healthy soil and reducing the need for synthetic fertilisers.</p>
				<a href="" className={style.card__button}>Read more</a>
			</figcaption>
		</figure>
	</div>

  

</div>
          

          </Fade>
      </article>
    </section>
  )
}

export default Case
