export type MenuItem = {
  name: string
  description?: string
  price: string
  tag?: 'award' | 'challenge' | 'veggie'
}

export type MenuCategory = {
  title: string
  note?: string
  footnote?: string
  items: MenuItem[]
}

export type MenuTab = {
  id: 'breakfast' | 'lunch' | 'kids'
  label: string
  categories: MenuCategory[]
}

export const COOKED_TO_ORDER_NOTE =
  '* Ask your server about items cooked to order. Consuming raw or undercooked meats, eggs, poultry, seafood or shellfish may increase your risk of foodborne illness.'

export const MENU: MenuTab[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    categories: [
      {
        title: 'Omelets',
        note: 'Served with toast and hash browns. Try a small pancake in place of toast.',
        items: [
          { name: 'Western Omelet', description: 'Ham, onion, green peppers and cheese', price: '$13' },
          { name: "Meat Lover's Omelet", description: 'Ham, bacon, sausage and cheese', price: '$14' },
          { name: 'Veggie Omelet', description: 'Mushroom, green peppers, onion, tomato and cheese', price: '$12', tag: 'veggie' },
          { name: "Farmer's Omelet", description: 'Ham, onion, green peppers, potatoes and cheese', price: '$14' },
          { name: "George's Southern Omelet", description: 'Sausage, onion, potatoes and cheese, topped with sausage gravy', price: '$14' },
          { name: 'Brisket Omelet', description: 'Brisket burnt ends, cheese and choice of veggies', price: '$16' },
          { name: 'Mexican Omelet', description: 'Chorizo, onion, green peppers, tomato, jalapeños and cheese', price: '$14' },
          { name: "Rancher's Omelet", description: 'Chopped rib eye steak, onion, mushroom and cheese', price: '$14' },
          { name: 'Cheese Omelet', description: 'Omelet with cheese', price: '$9' },
          { name: 'Irish Omelet', description: 'Corned beef hash and Swiss cheese', price: '$14' },
        ],
      },
      {
        title: 'Griddle',
        items: [
          { name: 'Pancake Combo*', description: '1 pancake served with 2 eggs and choice of meat', price: '$11' },
          { name: 'French Toast Combo*', description: '2 slices French toast served with 2 eggs and choice of meat', price: '$13' },
          { name: 'Belgian Waffle Combo*', description: '1 Belgian waffle served with 2 eggs and choice of meat', price: '$13' },
          { name: 'Lucky Duck Mini Plate', description: '4 silver dollar pancakes, ½ order hash browns, 2 pieces of bacon', price: '$10' },
          { name: 'Pancake Single', description: 'Short stack $7 / Full stack $8', price: '$5' },
          { name: 'French Toast Single', description: '(2) pieces $7 / (3) pieces $9', price: '$6' },
          { name: 'French Toast Ultimate', description: 'Our Ultimate Breakfast Sandwich: 2 eggs, choice of meat, cheese and a hash brown patty stacked on French toast', price: '$12' },
          { name: 'Breakfast Burrito*', description: 'Choice of meat, green peppers, onions, cheese and scrambled egg. Add hash browns $2. Sub chorizo $2. Sub brisket $4.', price: '$12' },
          { name: 'Brisket Sandwich*', description: 'Burnt end brisket with melted cheddar cheese, scrambled egg and maple syrup drizzle on Texas toast', price: '$14' },
        ],
      },
      {
        title: 'Eggs & More',
        items: [
          { name: 'Sunrise Sampler*', description: '1 biscuit & gravy, 1 egg, 2 sausage links & hash browns', price: '$12' },
          { name: 'Biscuits & Gravy (Full Order)', description: 'Half order $6', price: '$10' },
          { name: 'Sunrise Sandwich*', description: '1 egg, choice of meat and cheese (substitute a bagel $2)', price: '$8' },
          { name: 'The Jake*', description: '2 eggs over hard with choice of meat', price: '$8' },
          { name: 'Eggs, Meat & Potatoes*', description: '2 eggs, choice of meat, potatoes and toast', price: '$13' },
          { name: 'Eggs and Meat*', description: '2 eggs, choice of meat and toast', price: '$10' },
          { name: 'Eggs & Corned Beef Hash*', description: '2 eggs, CB hash and toast', price: '$12' },
          { name: 'Eggs & Potatoes*', description: '2 eggs, potatoes and toast', price: '$9' },
          { name: 'Eggs & Toast*', description: '2 eggs and toast', price: '$7' },
        ],
      },
      {
        title: 'Comfort Food',
        items: [
          { name: 'Ultimate Sunrise Sandwich*', description: '2 eggs, choice of meat, cheese and a hash brown patty stacked on Texas toast', price: '$10' },
          { name: 'Breakfast Bowl*', description: 'Choice of meat, green peppers, onions, cheese, scrambled egg and hash brown potatoes', price: '$11' },
          { name: 'Mexican Breakfast Bowl*', description: 'Chorizo, green peppers, onions, cheese, jalapeños, scrambled egg over hash browns. Served with large warm tortilla.', price: '$14' },
          { name: 'The Hunt Special*', description: 'Diced potatoes fried to golden perfection with sautéed onions, green pepper, jalapeños, topped with 2 over medium eggs and crumbled bacon', price: '$13' },
          { name: 'Hangover Skillet*', description: 'Hash browns, scrambled or over easy eggs, cheese, choice of meat sandwiched between 2 pancakes and topped with a toasted marshmallow. Add sausage gravy $2.', price: '$15' },
          { name: 'The Big Sammy Challenge*', description: 'The Hangover Skillet (×4) topped with sausage gravy — serves 4. Finish it all and score a FREE Sunrise Cafe T-shirt.', price: '$34', tag: 'challenge' },
          { name: 'Chicken & Waffles', price: '$12' },
          { name: 'Hot Honey & Brown Sugar Chicken & Waffles', price: '$13' },
          { name: 'Country Fried Steak & Eggs*', description: 'Country fried steak covered with sausage gravy, 2 eggs and toast', price: '$14' },
        ],
      },
      {
        title: 'Toast & Oats',
        items: [
          { name: 'Toast', description: 'White, wheat, sourdough, cinnamon, raisin, rye, Texas toast or English muffin', price: '$3' },
          { name: 'Oatmeal & Toast', description: 'Add raisins or nuts $1 each', price: '$8' },
          { name: 'Grits', price: '$4' },
          { name: 'Bagels', description: 'Everything or plain', price: '$4' },
        ],
      },
      {
        title: 'Add Ons',
        footnote: COOKED_TO_ORDER_NOTE,
        items: [
          { name: 'Cup of Gravy', price: '$3' },
          { name: 'Hashbrowns or American Fries', price: '$4' },
          { name: 'Ham, Bacon or Sausage', price: '$4' },
          { name: 'Belgian Waffle', price: '$8' },
          { name: 'Cheese, Peppers, Mushrooms or Onions', price: '$2' },
          { name: 'One Egg*', price: '$2' },
          { name: 'Hash Brown Patty', price: '$3' },
          { name: 'Corned Beef Hash', price: '$5' },
        ],
      },
    ],
  },
  {
    id: 'lunch',
    label: 'Lunch',
    categories: [
      {
        title: 'Lunch Favorites',
        items: [
          {
            name: 'White Cheddar Mac with Brisket Burnt Ends',
            description:
              'Winner of “People’s Choice” and “Loaded” at Battle Creek’s Mac & Cheese Festival “The Big Cheese” 2023. White cheddar mac topped with brisket burnt ends, fresh tomatoes and parmesan cheese.',
            price: '$13',
            tag: 'award',
          },
          { name: 'Chicken Tenders & Fries', description: 'Substitute onion rings $2', price: '$12' },
        ],
      },
      {
        title: 'Burger Baskets',
        note: 'Served with fries — substitute onion rings $2. Add a slice of cheese $1. Make it “Deluxe” (lettuce, tomato & mayo) or “Everything” (mustard, ketchup, onion and pickle).',
        items: [
          { name: 'Smash Burger*', price: '$12' },
          { name: 'Cheeseburger*', price: '$13' },
          { name: 'Bacon Cheeseburger*', price: '$14' },
          { name: 'Double Cheeseburger*', price: '$15' },
          { name: 'Double Bacon Cheeseburger*', price: '$16' },
          { name: 'Rita Burger*', description: 'Pepper jack cheese, bacon, olives, lettuce, tomato and mayo', price: '$14' },
          { name: 'The Bully Burger*', description: 'Beyond Burger® seasoned to perfection with American cheese, mustard and onion, drizzled with BBQ sauce, topped with crispy fried onions (also available with regular patty)', price: '$14' },
          { name: 'Olive Burger*', price: '$13' },
          { name: 'Mushroom Swiss Burger*', price: '$13' },
          { name: 'Patty Melt*', price: '$13' },
          { name: 'Hamburger*', price: '$10' },
          { name: 'Veggie Burger**', description: 'Beyond Burger® patty can be substituted on any burger or sandwich for $3', price: '$12', tag: 'veggie' },
        ],
      },
      {
        title: 'Sandwiches & Wraps',
        note: 'Add fries $2 or onion rings $4.',
        items: [
          { name: 'Bonsai BBQ Chicken Sandwich*', description: "Grilled chicken, cheddar cheese, Sweet Baby Ray's BBQ sauce, bleu cheese crumbles, topped with crispy fried onions", price: '$12' },
          { name: 'Steak Sandwich*', description: 'Chopped rib eye steak, onion, mushroom, Swiss cheese on Texas toast', price: '$12' },
          { name: 'Chicken Bacon Wrap', description: 'Crispy chicken, ranch, bacon, cheese, lettuce and tomato', price: '$11' },
          { name: 'Southwest Chicken Wrap', description: 'Crispy chicken, southwest sauce, cheese, lettuce and tomato', price: '$11' },
          { name: 'Grilled Chicken Deluxe', price: '$10' },
          { name: 'Grilled Ham and Cheese', price: '$9' },
          { name: 'BLT', price: '$8' },
          { name: 'Grilled Cheese', price: '$6' },
        ],
      },
      {
        title: 'Appetizers',
        footnote: COOKED_TO_ORDER_NOTE,
        items: [
          { name: 'Cheese Fries', price: '$7' },
          { name: 'Fried Pickle Chips', price: '$7' },
          { name: 'Onion Rings', price: '$7' },
          { name: 'Cheese Curds', price: '$7' },
          { name: 'Fried Mushrooms', price: '$7' },
          { name: 'Mozzarella Sticks', price: '$6' },
          { name: 'French Fries', price: '$5' },
        ],
      },
    ],
  },
  {
    id: 'kids',
    label: 'Kids & Drinks',
    categories: [
      {
        title: 'Kids Menu',
        note: 'Age 12 and under. 1 drink included with meal; refills for milk, juice or hot chocolate are full price.',
        items: [
          { name: 'French Toast Sticks', description: 'Homemade French toast (1 piece) cut into sticks. Served with choice of meat.', price: '$7' },
          { name: "Kid's Pancake", description: '1 character pancake (plain or chocolate chip). Served with choice of meat.', price: '$8' },
          { name: "Kid's Scramble*", description: '1 scrambled egg served with choice of meat', price: '$7' },
          { name: 'Kids Chicken Strips', description: '2 chicken tenders served with French fries', price: '$8' },
          { name: 'Kids Grilled Cheese', description: 'Grilled cheese served with French fries', price: '$8' },
          { name: 'Kids Mac & Cheese', description: 'White cheddar mac served with French fries', price: '$9' },
        ],
      },
      {
        title: 'Beverages',
        footnote: 'Free refills on soft drinks, tea and coffee only.',
        items: [
          { name: 'Soft Drinks', description: 'Coke, Diet Coke, Root Beer, Sprite & Lemonade — free refills', price: '$3' },
          { name: 'Iced Tea (Unsweetened)', description: 'Free refills', price: '$3' },
          { name: 'Coffee or Hot Tea', description: 'Free refills', price: '$3' },
          { name: 'Hot Chocolate', price: '$4' },
          { name: 'Milk', price: '$3' },
          { name: 'Juice', description: 'Orange & apple', price: '$3' },
        ],
      },
    ],
  },
]
