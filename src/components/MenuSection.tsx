import { motion } from 'framer-motion'
import { useState } from 'react'
import { COOKED_TO_ORDER_NOTE, MENU, type MenuCategory, type MenuItem } from '../data/menu'
import { EASE, ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './Section'
import { AwardIcon, FlameIcon, LeafIcon } from './Icons'

function ItemTag({ tag }: { tag: NonNullable<MenuItem['tag']> }) {
  const styles = {
    award: { cls: 'bg-honey-300/60 text-espresso-800', Icon: AwardIcon, label: 'Award Winner' },
    challenge: { cls: 'bg-sunrise-600 text-cream-50', Icon: FlameIcon, label: 'Challenge' },
    veggie: { cls: 'bg-[#DDEBC8] text-[#3F5A22]', Icon: LeafIcon, label: 'Veggie' },
  }[tag]
  const { cls, Icon, label } = styles
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide ${cls}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  )
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <motion.li variants={fadeUp} className="group py-2.5">
      <div className="flex items-baseline gap-2">
        <span className="font-bold text-espresso-800 transition-colors group-hover:text-sunrise-700">
          {item.name}
        </span>
        {item.tag && <ItemTag tag={item.tag} />}
        <span
          aria-hidden="true"
          className="mx-1 flex-1 border-b-2 border-dotted border-espresso-800/15 group-hover:border-sunrise-400/60"
        />
        <span className="font-display text-lg font-semibold text-sunrise-700">{item.price}</span>
      </div>
      {item.description && (
        <p className="mt-0.5 max-w-[52ch] text-sm leading-relaxed text-espresso-600">{item.description}</p>
      )}
    </motion.li>
  )
}

function CategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <motion.div
      variants={stagger(0.035)}
      initial={ENTRANCE}
      whileInView="visible"
      viewport={viewportOnce}
      className="break-inside-avoid rounded-3xl bg-cream-50 p-6 shadow-soft sm:p-8"
    >
      <motion.h3 variants={fadeUp} className="font-display text-2xl font-semibold text-espresso-800">
        {category.title}
      </motion.h3>
      {category.note && (
        <motion.p variants={fadeUp} className="mt-1.5 text-sm font-semibold italic text-espresso-500">
          {category.note}
        </motion.p>
      )}
      <ul className="mt-4 divide-y divide-espresso-800/5">
        {category.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </ul>
      {category.footnote && (
        <motion.p variants={fadeUp} className="mt-4 text-xs leading-relaxed text-espresso-500">
          {category.footnote}
        </motion.p>
      )}
    </motion.div>
  )
}

export default function MenuSection() {
  const [active, setActive] = useState<string>(MENU[0].id)

  return (
    <Section id="menu" className="bg-cream-200/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="menu"
          eyebrow="The Menu"
          title="Breakfast all morning, lunch till two"
          intro="Everything is made fresh in our kitchen — from scratch-made French toast to the white cheddar mac that took home two festival titles."
        />

        <div
          role="tablist"
          aria-label="Menu sections"
          className="mx-auto mt-10 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-cream-50 p-1.5 shadow-soft"
        >
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
                className={`relative whitespace-nowrap rounded-full px-5 py-2.5 font-bold transition-colors ${
                  selected ? 'text-cream-50' : 'text-espresso-600 hover:text-sunrise-700'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    transition={{ duration: 0.35, ease: EASE }}
                    className="absolute inset-0 rounded-full bg-sunrise-600"
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* All panels stay in the DOM (crawlable text); inactive ones are hidden. */}
        {MENU.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== active}
            className="mt-10 columns-1 gap-6 space-y-6 lg:columns-2"
          >
            {tab.categories.map((cat) => (
              <CategoryBlock key={cat.title} category={cat} />
            ))}
          </div>
        ))}

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-espresso-500">
          {COOKED_TO_ORDER_NOTE} ** Beyond Burger® contains pea protein — no gluten, soy, peanuts or tree nuts.
        </p>
      </div>
    </Section>
  )
}
