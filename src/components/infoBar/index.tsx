import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
})

export default function InfoBar() {
  return (
    <section className="flex items-center justify-between my-4">
      <div className="flex-1">
        <span className={permanentMarker.className}>Dhalgüin Hernández</span>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Dhalguin" target="_blank">
          <i className="fa fa-github" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/dhalguin-hdz/" target="_blank">
          <i className="fa fa-linkedin-square" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.instagram.com/dhalguin_hdz/" target="_blank">
          <i className="fa fa-instagram" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="mailto:dhalguin.hdz@gmail.com">
          <i className="fa fa-envelope" style={{ fontSize: '24px' }}></i>
        </a>
      </div>
    </section>
  )
}
