import coffeeMug from '../images/twilio-coffeemug.png';
import ahoySticker from '../images/twilio-ahoy-sticker.png';
import converseRed from '../images/twilio-converse-red.png';
import jacket from '../images/twilio-jacket.png';
import owlShirt from '../images/twilio-owl-shirt.png';
import socks from '../images/twilio-socks.png';
import wineTumbler from '../images/twilio-wine-tumbler.png';

const twilioProducts = [
  {
    id: '1',
    brand: 'Twilio',
    description: 'Twilio Coffee Mug',
    image: coffeeMug,
    isFeatured: true,
    isRecommended: true,
    keywords: ['mug'],
    maxQuantity: 2,
    name: 'Coffee Mug',
    price: 20,
    quantity: 10,
    sizes: [100]
  },
  {
    id: '2',
    brand: 'Twilio',
    description: 'Twilio Ahoy Sticker',
    image: ahoySticker,
    isFeatured: true,
    isRecommended: true,
    keywords: ['sticker'],
    maxQuantity: 2,
    name: 'Ahoy Sticker',
    price: 3,
    quantity: 10,
    sizes: [10]
  },
  {
    id: '3',
    brand: 'Twilio',
    description: 'Twilio Converse Red',
    image: converseRed,
    isFeatured: true,
    isRecommended: true,
    keywords: ['shoes'],
    maxQuantity: 1,
    name: 'Converse Red',
    price: 90,
    quantity: 5,
    sizes: [10, 11, 12, 13, 14, 15]
  },
  {
    id: '4',
    brand: 'Twilio',
    description: 'Twilio Jacket',
    image: jacket,
    isFeatured: true,
    isRecommended: true,
    keywords: ['jacket'],
    maxQuantity: 1,
    name: 'Jacket',
    price: 150,
    quantity: 4,
    sizes: ['sm', 'md', 'lg', 'xl']
  },
  {
    id: '5',
    brand: 'Twilio',
    description: 'Twilio Owl Shirt',
    image: owlShirt,
    isFeatured: true,
    isRecommended: true,
    keywords: ['shirt'],
    maxQuantity: 1,
    name: 'Owl Shirt',
    price: 30,
    quantity: 3,
    sizes: ['sm', 'md', 'lg', 'xl']
  },
  {
    id: '6',
    brand: 'Twilio',
    description: 'Twilio Socks',
    image: socks,
    isFeatured: true,
    isRecommended: true,
    keywords: ['socks'],
    maxQuantity: 2,
    name: 'Socks',
    price: 20,
    quantity: 10,
    sizes: [100]
  },
  {
    id: '7',
    brand: 'Twilio',
    description: 'Twilio Wine Tumbler',
    image: wineTumbler,
    isFeatured: true,
    isRecommended: true,
    keywords: ['mug'],
    maxQuantity: 1,
    name: 'Wine Tumbler',
    price: 25,
    quantity: 10,
    sizes: [100]
  }
];

export default twilioProducts;
