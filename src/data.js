// Store details, menu and deals from the printed Khalsa G Pizza menu.

export const STORE = {
  name: 'Khalsa G Pizza',
  phone: '+1 780-626-1313',
  email: 'info@sopranopizza.ca',
  website: 'www.khalsagpizza.ca',
  orderUrl: 'https://www.skipthedishes.com/khalsa-g-pizza',
  address: '3422 Ewing Trail SW, Edmonton, AB T6X 2X2',
  deliveryArea: 'South Edmonton',
  hours: [
    { days: 'Monday – Saturday', time: '11:00 AM – 10:00 PM' },
    { days: 'Sunday', time: '12:01 PM – 10:00 PM' },
  ],
};

export const SIZES = [
  { id: 'S', label: 'Small' },
  { id: 'M', label: 'Medium' },
  { id: 'L', label: 'Large' },
  { id: 'XL', label: 'XL' },
];

// icon = key in components/Icon.jsx; tint/bg = icon colours
export const CATEGORIES = [
  { id: 'cheese', label: 'Cheese', icon: 'pizza', tint: '#8A5A00', bg: '#F7E5B4' },
  { id: 'pizzas', label: 'Regular Pizzas', icon: 'pizza', tint: '#A9490A', bg: '#FCE3C4' },
  { id: 'special', label: 'Special Pizzas', icon: 'fire', tint: '#B3221B', bg: '#F8D3CF' },
  { id: 'pasta', label: 'Pasta', icon: 'dough', tint: '#2F6B2A', bg: '#D7EBD3' },
  { id: 'sides', label: 'Appetizers', icon: 'fries', tint: '#8A5A00', bg: '#F7E5B4' },
  { id: 'extras', label: 'Dips & Extras', icon: 'gift', tint: '#1E2A57', bg: '#D6DCF0' },
  { id: 'drinks', label: 'Pop & Juices', icon: 'cup', tint: '#1D5E6E', bg: '#CFE6EC' },
];

// sized: true → every item shares the section's `prices` (by size id). A missing size means not offered.
export const MENU = [
  { id: 'cheese', label: 'Cheese Pizza & Bread Sticks', sized: true, prices: { S: 11, M: 14, L: 17 }, items: [
    { id: 'ch1', name: 'Cheese Pizza', desc: 'Pizza sauce and cheese on fresh dough.', veg: true },
    { id: 'ch2', name: 'Cheese Bread Sticks', desc: 'Baked with melted cheese.', veg: true },
  ]},
  { id: 'pizzas', label: 'Regular Pizzas', sized: true, prices: { S: 15, M: 19, L: 23, XL: 30 }, items: [
    { id: 'p1', name: 'Amritsari Vegetarian Pizza', desc: 'Pizza sauce with onions, ginger, mushrooms, pineapple, bell pepper, black olives, tomatoes, cheese and cilantro.', veg: true },
    { id: 'p2', name: 'Tandoori Paneer Pizza', desc: 'A vibrant pizza topped with pizza sauce, spiced tandoori paneer, ginger, onion, bell pepper, cilantro and cheese.', veg: true },
    { id: 'p3', name: 'Healthy Spinach Pizza', desc: 'Pizza sauce, fresh garlic, baby spinach, onion, bell pepper, jalapeño, cilantro and cheese topped with fresh feta.', veg: true },
    { id: 'p4', name: 'Creamy Corn Pizza', desc: 'White sauce, onion, ginger, sweet corn, black olives, cheese and cilantro.', veg: true },
    { id: 'p5', name: 'Spice Lovers Pizza', desc: 'Spicy pizza sauce, onion, ginger, jalapeño, green chilies, bell pepper, red chilli, corn, cilantro and cheese.', veg: true, spicy: true },
    { id: 'p6', name: 'Herb & Garlic Pizza', desc: 'Garlic sauce, onion, ginger, mushrooms, bell peppers, cilantro and cheese.', veg: true },
  ]},
  { id: 'special', label: 'Special Pizzas', sized: true, prices: { S: 17, M: 21, L: 25, XL: 30 }, note: 'Split pizza is only available with half cheese pizza', items: [
    { id: 'sp1', name: 'Khalsa G Special Pizza', desc: 'Pizza sauce, onion, ginger, tomatoes, corn, olives, mushroom, pineapple, paneer, bell pepper, cilantro and cheese.', veg: true },
    { id: 'sp2', name: 'Shahi Paneer Pizza', desc: 'Creamy rich Indian-inspired sauces, paneer, blend of spices, bell peppers, ginger, onions, banana pepper, cilantro and cheese.', veg: true },
    { id: 'sp3', name: 'Paneer Supreme Pizza', desc: 'Pizza sauce, paneer, bell peppers, corn, onions, ginger, jalapeño, pepper, cilantro and cheese.', veg: true },
    { id: 'sp4', name: 'Palak Paneer Pizza', desc: 'Palak puree, paneer, bell peppers, onions, ginger, cilantro and cheese.', veg: true },
  ]},
  { id: 'pasta', label: 'Khalsa G Special Pasta', note: 'Penne & spaghetti, your own spice level', items: [
    { id: 'pa1', name: 'Pasta with Pasta Sauce', desc: 'Penne & spaghetti baked with onion, corn, bell peppers and cheese.', price: 14, veg: true },
    { id: 'pa2', name: 'Pasta with Alfredo Sauce', desc: 'Penne & spaghetti baked with onion, corn, bell peppers and cheese.', price: 17, veg: true },
  ]},
  { id: 'sides', label: 'Appetizers', items: [
    { id: 's1', name: 'Freshly Baked Aloo Patty', desc: 'Baked fresh, spiced potato filling.', price: 6, veg: true },
    { id: 's2', name: 'Paneer Patty', desc: 'Baked fresh with paneer filling.', price: 7, veg: true },
    { id: 's3', name: 'Jalapeño Poppers (6 pc)', desc: 'Crisp, cheesy and spicy.', price: 10, veg: true, spicy: true },
    { id: 's4', name: 'Onion Rings', desc: 'Golden and crunchy.', price: 8, veg: true },
    { id: 's5', name: 'Cauliflower Bites', desc: 'Crispy cauliflower bites.', price: 9, veg: true },
    { id: 's6', name: 'French Fries (Regular)', desc: 'Crispy fries.', price: 7, veg: true },
    { id: 's7', name: 'French Fries (Large)', desc: 'Crispy fries, large portion.', price: 9, veg: true },
    { id: 's8', name: 'Poutine Regular (Large)', desc: 'Fries, cheese curds and gravy.', price: 13, veg: true },
    { id: 's9', name: 'Poutine Shahi (Large)', desc: 'Our shahi-style poutine.', price: 17, veg: true },
  ]},
  { id: 'extras', label: 'Dips & Extras', items: [
    { id: 'x1', name: 'Pizza Dip (eggless)', desc: 'Roasted garlic, cheese jalapeño or ranch.', price: 1.25, veg: true },
    { id: 'x2', name: 'Gluten Free Crust (Medium)', desc: 'Added to the medium pizza price.', price: 5.5, veg: true },
    { id: 'x3', name: 'Extra Topping — Large', desc: 'Onion, mushrooms, pineapple, bell peppers, black olives, tomatoes, spinach, garlic, ginger, cilantro, paneer, tofu, banana pepper, jalapeño, corn, cauliflower, crushed green chilli and more.', price: 3, veg: true },
    { id: 'x4', name: 'Extra Topping — Medium', desc: 'Same toppings, medium pizza.', price: 2, veg: true },
    { id: 'x5', name: 'Extra Topping — Small', desc: 'Same toppings, small pizza.', price: 1, veg: true },
    { id: 'x6', name: 'Extra Cheese / Vegan Cheese — Large', desc: 'Extra cheese or vegan cheese.', price: 5, veg: true },
    { id: 'x7', name: 'Extra Cheese / Vegan Cheese — Medium', desc: 'Extra cheese or vegan cheese.', price: 4, veg: true },
    { id: 'x8', name: 'Extra Cheese / Vegan Cheese — Small', desc: 'Extra cheese or vegan cheese.', price: 3, veg: true },
  ]},
  { id: 'drinks', label: 'Pop & Juices', items: [
    { id: 'k1', name: 'Pop (355 ml can)', desc: 'Choose from our cooler.', price: 2.5, veg: true },
    { id: 'k2', name: 'Indian Pop', desc: 'Indian soft drinks.', price: 3.5, veg: true },
    { id: 'k3', name: 'Pop (2 litre)', desc: 'Perfect for the whole table.', price: 6, veg: true },
    { id: 'k4', name: 'Indian Juice', desc: 'Chilled Indian juice.', price: 4, veg: true },
  ]},
];

export const OFFERS = [
  { id: 'o1', tag: 'MONDAY & TUESDAY', title: 'Large at Medium Price', sub: 'Buy any large pizza at the price of a medium pizza.', price: 'SAVE $4', when: 'Every Monday & Tuesday' },
  { id: 'o2', tag: 'WAHEGURU WEDNESDAY', title: 'Any Regular Large Pizza', sub: 'Any regular large pizza, all day Wednesday.', price: '$21.00', when: 'Every Wednesday' },
  { id: 'o3', tag: 'THURSDAY', title: 'Free Dips with Your Pizza', sub: 'Large at regular price: 2 dips. Medium: 1 dip. Small: 1 dip free.', price: 'FREE DIPS', when: 'Every Thursday' },
  { id: 'o4', tag: 'FAMILY FRIDAY & SATURDAY', title: '5 Large or 5 Medium Pizzas', sub: '5 large: 5 dips and a 2 litre pop free. 5 medium: 5 dips free.', price: 'FREE POP & DIPS', when: 'Every Friday & Saturday' },
  { id: 'o5', tag: 'SEVA SUNDAYS', title: 'Shahi Paneer Pizza', sub: 'Large $23 · Medium $20 · Small $16.', price: 'FROM $16', when: 'Every Sunday' },
  { id: 'o6', tag: 'FAMILY DEAL', title: 'Large Pizza + 10 Cauli Bites', sub: 'Any large regular pizza, 10 cauli bites and a 2 litre pop.', price: '$35', when: 'Any day' },
];

export const DEAL_FILTERS = [
  { id: 'all', label: 'All deals' },
  { id: 'weekday', label: 'Weekdays' },
  { id: 'weekend', label: 'Weekend' },
  { id: 'family', label: 'Family & groups' },
];

export const DEALS = [
  { id: 'k1', tag: 'MON & TUE', title: 'Large at Medium Price', price: 'SAVE $4', desc: 'Buy any large pizza at the price of a medium pizza.', when: 'Monday & Tuesday', cats: ['weekday'] },
  { id: 'k2', tag: 'WAHEGURU WEDNESDAY', title: 'Any Regular Large Pizza', price: '$21.00', desc: 'Any regular large pizza for one price.', when: 'Wednesday', cats: ['weekday'] },
  { id: 'k3', tag: 'THURSDAY', title: 'Free Dips with Your Pizza', price: 'FREE DIPS', desc: 'Large pizza at regular price: get 2 dips. Medium pizza: get 1 dip. Small pizza: get 1 dip free.', when: 'Thursday', cats: ['weekday'] },
  { id: 'k4', tag: 'FAMILY FRIDAY & SATURDAY', title: '5 Large Pizzas', price: 'FREE POP', desc: 'Buy any 5 large pizzas and get 5 dips and a 2 litre pop free.', when: 'Friday & Saturday', cats: ['weekend', 'family'] },
  { id: 'k5', tag: 'FAMILY FRIDAY & SATURDAY', title: '5 Medium Pizzas', price: '5 FREE DIPS', desc: 'Buy any 5 medium pizzas and get 5 dips free.', when: 'Friday & Saturday', cats: ['weekend', 'family'] },
  { id: 'k6', tag: 'SEVA SUNDAYS', title: 'Shahi Paneer Pizza', price: 'FROM $16', desc: 'Large $23 · Medium $20 · Small $16.', when: 'Sunday', cats: ['weekend'] },
  { id: 'k7', tag: 'FAMILY DEAL', title: 'Large Pizza + 10 Cauli Bites', price: '$35', desc: 'Any large regular pizza plus 10 cauli bites and a 2 litre pop.', when: 'Any day', cats: ['family'] },
  { id: 'k8', tag: 'GROUPS', title: 'Gurughar, Mandir, Corporate & Birthday', price: 'ASK US', desc: 'Special discount rates for gurughars and mandirs, corporates and birthday parties.', when: 'Call to arrange', cats: ['family'] },
];

export const FAQS = [
  { q: 'Is everything on the menu vegetarian?', a: 'Yes — Khalsa G Pizza is a 100% vegetarian place, with no meat or fish anywhere in our kitchen. We use 100% pure Khalis ingredients. If you have any allergies, please alert the cashier or phone-op.' },
  { q: 'Where are you located?', a: `We are at ${STORE.address}. You can find us on the map on our Contact page.` },
  { q: 'What are your opening hours?', a: `${STORE.hours.map((h) => `${h.days}: ${h.time}`).join('. ')}.` },
  { q: 'How do I place an order?', a: `Tap Order Online to order through SkipTheDishes, or call us at ${STORE.phone}.` },
  { q: 'Do you deliver?', a: 'Yes — order online through SkipTheDishes for delivery, or call us to arrange pickup.' },
  { q: 'What pizza sizes and prices do you have?', a: 'Regular pizzas are Small $15, Medium $19, Large $23 and XL $30. Special pizzas are Small $17, Medium $21, Large $25 and XL $30. Cheese pizza is Small $11, Medium $14 and Large $17.' },
  { q: 'Do you have vegan or gluten-free options?', a: 'Yes — you can add vegan cheese to any pizza (Large $5, Medium $4, Small $3), and we offer a gluten free crust on medium pizzas for $5.50 extra. Our pizza dips are eggless.' },
  { q: 'Can I choose how spicy my food is?', a: 'Yes — our Khalsa G Special pasta comes with your own spice level, and the Spice Lovers pizza brings the heat.' },
  { q: 'What are your weekly deals?', a: 'Monday & Tuesday: large pizza at the price of a medium. Waheguru Wednesday: any regular large pizza for $21. Thursday: free dips with your pizza. Family Friday & Saturday: free dips and pop on 5 pizzas. Seva Sundays: Shahi Paneer Pizza from $16. Family Deal: $35 any day. These are the only deals available.' },
  { q: 'Do you cater for gurughars, mandirs and parties?', a: `Yes — we offer special discount rates for gurughars, mandirs, corporates and birthday parties. Call us at ${STORE.phone} to arrange it.` },
];

export const CONTACT_TOPICS = ['General question', 'Catering & events', 'Large order', 'Feedback', 'Careers'];

export const money = (n) => '$' + n.toFixed(2);

export const priceFor = (section, item, sizeId) => {
  if (!section.sized) return money(item.price);
  const p = section.prices[sizeId];
  return p == null ? null : money(p);
};
