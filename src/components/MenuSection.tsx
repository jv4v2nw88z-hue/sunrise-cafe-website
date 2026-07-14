import { motion } from 'framer-motion'
import { useState } from 'react'
import { COOKED_TO_ORDER_NOTE, MENU, type MenuCategory, type MenuItem } from '../data/menu'
import { EASE, ENTRANCE, fadeUp, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './Section'
import { AwardIcon, FlameIcon, LeafIcon } from './Icons'

function ItemTag({ tag }: { tag: NonNullable<MenuItem['tag']> }) {
  const styles = {
    award: { cls: 'bg-yolk text-ink-deep', Icon: AwardIcon, label: 'Award Winner' },
    challenge: { cls: 'bg-brick text-paper', Icon: FlameIcon, label: 'Challenge' },
    veggie: { cls: 'bg-crust text-umber', Icon: LeafIcon, label: 'Veggie' },
  }[tag]
  const { cls, Icon, label } = styles
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-caps ${cls}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  )
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="group py-2.5">
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-ink transition-colors group-hover:text-brick">{item.name}</span>
        {item.tag && <ItemTag tag={item.tag} />}
        <span
          aria-hidden="true"
          className="mx-1 flex-1 border-b-2 border-dotted border-umber/25 transition-colors group-hover:border-yolk"
        />
        <span className="font-display text-lg font-bold text-ink">{item.price}</span>
      </div>
      {item.description && (
        <p className="mt-0.5 max-w-[52ch] text-sm leading-relaxed text-umber">{item.description}</p>
      )}
    </li>
  )
}

function CategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <motion.div
      variants={fadeUp}
      initial={ENTRANCE}
      whileInView="visible"
      viewport={viewportOnce}
      className="break-inside-avoid pb-10"
    >
      <h3 className="flex items-center gap-2.5 font-display text-2xl font-extrabold tracking-tight text-ink">
        <span aria-hidden="true" className="inline-block h-3 w-3 bg-yolk" />
        {category.title}
      </h3>
      {category.note && <p className="mt-1.5 text-sm font-semibold italic text-umber">{category.note}</p>}
      <ul className="mt-3">
        {category.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </ul>
      {category.footnote && <p className="mt-3 text-xs leading-relaxed text-umber/80">{category.footnote}</p>}
    </motion.div>
  )
}

export default function MenuSection() {
  const [active, setActive] = useState<string>(MENU[0].id)

  return (
    <Section id="menu" className="bg-paper py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="menu"
            eyebrow="The Menu"
            title="Breakfast all morning. Lunch till two."
            intro="Everything made fresh in our kitchen — from scratch-made French toast to the white cheddar mac that took home two festival titles."
            animate
          />

          <div role="tablist" aria-label="Menu sections" className="flex gap-6 border-b-4 border-ink/10">
            {MENU.map((tab) => {
              const selected = tab.id === active
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`relative -mb-1 whitespace-nowrap pb-3 font-display text-lg font-bold tracking-tight transition-colors sm:text-xl ${
                    selected ? 'text-ink' : 'text-umber/60 hover:text-umber'
                  }`}
                >
                  {tab.label}
                  {selected && (
                    <motion.span
                      layoutId="menu-tab-underline"
                      transition={{ duration: 0.35, ease: EASE }}
                      className="absolute inset-x-0 bottom-0 h-1 bg-yolk"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* All panels stay in the DOM (crawlable text); inactive ones are hidden. */}
        {MENU.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== active}
            className="mt-12 columns-1 gap-14 lg:columns-2"
          >
            {tab.categories.map((cat) => (
              <CategoryBlock key={cat.title} category={cat} />
            ))}
          </div>
        ))}

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-umber/80">
          {COOKED_TO_ORDER_NOTE} ** Beyond Burger® contains pea protein — no gluten, soy, peanuts or tree nuts.
        </p>
      </div>
    </Section>
  )
}
