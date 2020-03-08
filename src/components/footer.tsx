import ExtLink from './ext-link'
import Twitter from './svgs/twitter'
import GitHub from './svgs/github'
import contactStyles from '../styles/contact.module.css'
const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/fabrec_jp',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/reeq20',
  },
]
export default () => (
  <>
    <footer>
      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
      <p>©RikuSugawara</p>
    </footer>
  </>
)
