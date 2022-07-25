import { createStore } from "vuex";

export default createStore({
  state: {
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
      },
    ],
    cartCount: 0,
    cartTotalPrice: 0,
    install: false
  },
  getters: {
   
  },
  mutations: {
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
  },
  modules: {},
});
