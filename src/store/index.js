import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    watched: [
      {
        id: 51,
        title: "BXC",
        content:
          "Вытяжное устройство для механической системы вентиляции",
        price: '6 848 ₽ – 56 584 ₽' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/bhc-big.png")
      },
      {
        id: 52,
        title: "G2H",
        content:
          "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
        price: '6 848 ₽ – 56 584 ₽ ' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/g2h-big.png")
      },
      {
        id: 53,
        title: "GHN",
        content:
          "Вытяжное устройство с датчиком присутствия",
        price: '6 848 ₽ – 56 584 ₽ ' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/ghn-big.png")
      },
      {
        id: 54,
        title: "TDA",
        content:
          "Вытяжное устройство с датчиком присутствия",
        price: '6 848 ₽ – 56 584 ₽ ' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/tda-big.png")
      },
      {
        id: 55,
        title: "BXC/2",
        content:
          "Вытяжное устройство для механической системы вентиляции",
        price: '6 848 ₽ – 56 584 ₽' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/bhc-big.png")
      },
      {
        id: 56,
        title: "G2H/2",
        content:
          "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
        price: '6 848 ₽ – 56 584 ₽ ' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/g2h-big.png")
      },
      {
        id: 57,
        title: "GHN/2",
        content:
          "Вытяжное устройство с датчиком присутствия",
        price: '6 848 ₽ – 56 584 ₽ ' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/ghn-big.png")
      },
      {
        id: 58,
        title: "TDA/2",
        content:
          "Вытяжное устройство с датчиком присутствия",
        price: '6 848 ₽ – 56 584 ₽ ' ,
        euroPrice: '77.60 € – 643.86 €',
        image: require("@/assets/tda-big.png")
      },
    ],
    cart: [
      {
        id: 1,
        title: "Вытяжное устройство G2H",
        content:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        art: "Артикул: G2H1065",
        price: 12644,
        amount: 1,
        totalPrice: 12644,
        image: require("@/assets/g2h.png")
      },
      {
        id: 2,
        title: "Вытяжное устройство BXC",
        content:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        art: "Артикул: G2H1065",
        price: 12644,
        amount: 1,
        totalPrice: 12644,
        image: require("@/assets/bhc.png")
      },
      {
        id: 3,
        title: "Вытяжное устройство GHN",
        content:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        art: "Артикул: G2H1065",
        price: 12644,
        amount: 1,
        totalPrice: 12644,
        image: require("@/assets/ghn.png")
      },
    ],
    cartCount: 0,
    cartTotalPrice: 0,
    install: false,
    user: 'test_user',
    sliderCounter: 1
  },
  getters: {
   
  },
  mutations: {
    incSlide(state){
      state.sliderCounter < state.watched.length / 4 ? state.sliderCounter++ : state.sliderCounter = 1,
      state.watched.unshift(state.watched.pop())
      
    },
    decSlide(state){
      state.sliderCounter < state.watched.length / 4 ? state.sliderCounter++ : state.sliderCounter = 1
      let i = 0;
      while (i<4){
      state.watched.push(state.watched.shift()) 
      i++
    }    
    },
    clearCart(state){
      state.cart=[]
    },
    setInstall(state){
      state.install == true ? state.install = false : state.install = true 
    },
    cartTotalPrice(state) {
      state.cartTotalPrice  = 0; 
      for (let item of state.cart) {
        state.cartTotalPrice += item.price * item.amount;
      }
      return state.cartTotalPrice.toFixed(2);
  },
    multiPriceIncrise(state, item) {
      let found = state.cart.find((i) => i.id == item.id);
      found.amount += 1;
      found.totalPrice = found.amount * found.price;
      this.commit("cartTotalPrice")
      this.commit("setCartCount")
    },
    multiPriceDecrise(state, item) {
      let found = state.cart.find((i) => i.id == item.id);
      if (found.amount > 0) {
        found.amount -= 1;
        found.totalPrice = found.amount * found.price;
        this.commit("cartTotalPrice")
        this.commit("setCartCount")
      } 
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;
        state.cart.splice(index, 1);
       }  
       item.amount = 0

      this.commit("setCartCount")
      this.commit("cartTotalPrice")
    },
    setCartCount(state) {
      let total = 0;
      for (let item of state.cart) {
        total +=item.amount
      }
      state.cartCount = total;
    },
  },
  actions: {   
      sendCart() {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            params: {
              user_key_id: this.user_key_id,
            },
            data: {
              userID: this.state.user,
              products: this.state.cart,
              install: this.state.install,
            },
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
  },
  modules: {},
});
