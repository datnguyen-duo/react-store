import { ADD_TO_CART } from './actions/action-types/cart-actions';

const initState = {
  products: [
    {
      id: '0',
      name: 'Agave',
      sci: 'agave americana',
      price: '$60',
      description:
        'While agave (pronounced ah-GAH-vay) is best recognized as the plant from which tequila is made, it has also been used for thousands of years as an ingredient in food. The nectar made from the plant is known in Mexico as aguamiel, or “honey water.”',
      img: require('../assets/agave.png')
    },
    {
      id: '1',
      name: 'Aloe Vera',
      sci: 'aloe vera',
      price: '$20',
      description:
        'Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula but grows wild in tropical climates around the world and is cultivated for agricultural and medicinal uses',
      img: require('../assets/aloe-vera.png')
    },
    {
      id: '2',
      name: 'Dudleya',
      sci: 'echeveria spp.',
      price: '$25',
      description:
        'Dudleya is a genus of succulent perennials, consisting of about 45 species in southwest North America. Many plants in the Dudleya genus were formerly classified as Echeveria. The fleshy and glabrous leaves occur in basal rosettes, in colors generally ranging from green to gray.',
      img: require('../assets/dudleya.png')
    },
    {
      id: '3',
      name: 'Hens & Chicks',
      sci: 'sempervivum tectorum',
      price: '$10',
      description:
        'Hen and chicks is a common name for a group of small succulent plants, a term that indicates a plant that possesses enlarged parts to store water. It belongs to the flowering plant family Crassulaceae, native to southern Europe and northern Africa.',
      img: require('../assets/hens-and-chicks.png')
    },
    {
      id: '4',
      name: 'Jade Plant',
      sci: 'crassula ovata',
      price: '$35',
      description:
        'The jade plant is similar to a bonsai plant in the way that it grows and is maintained. It has a thick trunk with branches that jut out like a miniature tree. This succulent has thick, shiny, dark green leaves that grow into an oval shape. Some varieties of the jade plant develop a red color at the tip of the leaf. Once the plant matures and if the conditions are right, the jade plant can develop beautiful white or pink flowers that bloom in the shape of a star.',
      img: require('../assets/jade.png')
    },
    {
      id: '5',
      name: 'Zebra Plant',
      sci: 'aphelandra squarrosa',
      price: '$30',
      description:
        'Aphelandra squarrosa is a plant species in the family Acanthaceae, which is native to Atlantic Forest vegetation of Brazil. This plant is often used as a house plant. This plant is cited in Flora Brasiliensis by Carl Friedrich Philipp von Martius.',
      img: require('../assets/zebra.png')
    }
  ],
  addedProducts: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedProduct = state.products.find(product => product.id === action.id);
    let existed_product = state.addedProducts.find(
      product => action.id === product.id
    );

    if (existed_product) {
      addedProduct.quantity += 1;

      return {
        ...state,
        total: state.total + addedProduct.price
      };
    } else {
      addedProduct.quantity = 1;
      let newTotal = state.total + addedProduct.price;
      return {
        ...state,
        addedProducts: [...state.addedProducts, addedProduct],
        total: newTotal
      };
    }
  }
  return state;
};

export default cartReducer;
