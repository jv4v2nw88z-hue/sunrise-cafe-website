import { motion } from 'framer-motion'
import ImagePlaceholder, { type PlaceholderPalette } from './ImagePlaceholder'
import { ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './Section'

type Shot = {
  label: string
  alt: string
  palette: PlaceholderPalette
  span?: string
}

const SHOTS: Shot[] = [
  {
    label: 'Hangover Skillet',
    alt: 'The Hangover Skillet — hash browns, eggs and cheese stacked between two pancakes',
    palette: 'griddle',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'The winning mac',
    alt: 'White cheddar mac and cheese topped with brisket burnt ends, tomatoes and parmesan',
    palette: 'mac',
  },
  {
    label: 'Fresh coffee, always',
    alt: 'A hot cup of coffee being poured at the counter',
    palette: 'coffee',
  },
  {
    label: 'Belgian waffle combo',
    alt: 'Belgian waffle with eggs and bacon on a diner plate',
    palette: 'morning',
  },
  {
    label: 'The dining room',
    alt: 'Warm, sunlit dining room at Sunrise Cafe',
    palette: 'interior',
  },
  {
    label: 'Chicken & waffles',
    alt: 'Crispy chicken over a golden waffle with hot honey drizzle',
    palette: 'griddle',
  },
  {
    label: 'The Big Sammy Challenge',
    alt: 'The Big Sammy Challenge — four Hangover Skillets stacked and topped with sausage gravy',
    palette: 'mac',
    span: 'sm:col-span-2',
  },
]

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="gallery"
          eyebrow="Gallery"
          title="A look at the good stuff"
          intro="Real photos coming soon — every tile below is reserved for a shot of the food, the room, and the people who make Sunrise Cafe what it is."
          tone="dark"
          animate
        />

        <motion.ul
          variants={stagger(0.06)}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid auto-rows-[11rem] grid-cols-1 gap-2 sm:auto-rows-[10rem] sm:grid-cols-3 lg:auto-rows-[12rem]"
        >
          {SHOTS.map((shot) => (
            <motion.li
              key={shot.label}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className={shot.span ?? ''}
            >
              <ImagePlaceholder label={shot.label} alt={shot.alt} palette={shot.palette} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
