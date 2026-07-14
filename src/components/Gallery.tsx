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
    label: 'Award-winning mac & cheese',
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
    palette: 'fresh',
  },
  {
    label: 'The dining room',
    alt: 'Warm, sunlit dining room at Sunrise Cafe',
    palette: 'interior',
  },
  {
    label: 'Chicken & waffles',
    alt: 'Crispy chicken over a golden waffle with hot honey drizzle',
    palette: 'morning',
  },
  {
    label: 'The Big Sammy Challenge',
    alt: 'The Big Sammy Challenge — four Hangover Skillets stacked and topped with sausage gravy',
    palette: 'griddle',
    span: 'sm:col-span-2',
  },
]

export default function Gallery() {
  return (
    <Section id="gallery" className="bg-cream-200/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="gallery"
          eyebrow="Gallery"
          title="A look at the good stuff"
          intro="Real photos coming soon — every tile below is reserved for a shot of the food, the room, and the people who make Sunrise Cafe what it is."
        />

        <motion.ul
          variants={stagger(0.07)}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid auto-rows-[11rem] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[10rem] lg:auto-rows-[12rem]"
        >
          {SHOTS.map((shot) => (
            <motion.li
              key={shot.label}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
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
