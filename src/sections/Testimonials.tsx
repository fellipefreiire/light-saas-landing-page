import avatar1 from '@/assets/avatar-1.png'
import avatar2 from '@/assets/avatar-2.png'
import avatar3 from '@/assets/avatar-3.png'
import avatar4 from '@/assets/avatar-4.png'
import avatar5 from '@/assets/avatar-5.png'
import avatar6 from '@/assets/avatar-6.png'
import avatar7 from '@/assets/avatar-7.png'
import avatar8 from '@/assets/avatar-8.png'
import avatar9 from '@/assets/avatar-9.png'
import { TestimonialsColumn } from '@/components/TestimonialsColumn'

const testimonials = [
  {
    id: 1,
    text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
    imageSrc: avatar1.src,
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
  },
  {
    id: 2,
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: 'Josh Smith',
    username: '@jjsmith',
  },
  {
    id: 3,
    text: 'This app has completely transformed how I manage my projects and deadlines.',
    imageSrc: avatar3.src,
    name: 'Morgan Lee',
    username: '@morganleewhiz',
  },
  {
    id: 4,
    text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
    imageSrc: avatar4.src,
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    id: 5,
    text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
    imageSrc: avatar5.src,
    name: 'Taylor Kim',
    username: '@taylorkimm',
  },
  {
    id: 6,
    text: 'The customizability and integration capabilities of this app are top-notch.',
    imageSrc: avatar6.src,
    name: 'Riley Smith',
    username: '@rileysmith1',
  },
  {
    id: 7,
    text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
    imageSrc: avatar7.src,
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
  },
  {
    id: 8,
    text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
    imageSrc: avatar8.src,
    name: 'Sam Dawson',
    username: '@dawsontechtips',
  },
  {
    id: 9,
    text: 'Its user-friendly interface and robust features support our diverse needs.',
    imageSrc: avatar9.src,
    name: 'Casey Harper',
    username: '@casey09',
  },
]

const firstColumns = testimonials.slice(0, 3)
const secondColumns = testimonials.slice(3, 6)
const thirdColumns = testimonials.slice(6, 9)

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden mt-10">
          <TestimonialsColumn testimonials={firstColumns} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumns}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumns}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
