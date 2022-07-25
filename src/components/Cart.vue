<template>
    <div class="wrap">
        <div class="mini-cart">
            <div class="mini-cart__slots">
                <span class="mini-cart__title"> Ваша корзина</span>
                <span class="mini-cart__card-count">{{ $store.state.cart.length }} товара</span>
                <span class="mini-cart__price-text">{{ $store.state.cartTotalPrice.toLocaleString('ru-RU')
                }} &#8381;</span>
            </div>
            <div class="mini-cart__img">
                <img src="@/assets/cart_logo.png" />
            </div>
        </div>
        <section>
            <nav class="nav">
                <a class="nav__item"> Главная </a>
                <img class="nav__item" src="@/assets/dot.png" />
                <a class="nav__item nav__item__active"> Корзина </a>
            </nav>
            <div class="cart-header">
                <h2 class="cart-header__title"> Ваша корзина </h2>
                <div class="cart-header__card-count"> {{ $store.state.cartCount }} товара</div>
                <div class="cart-header__clear-btn" @click="$store.commit('clearCart')">Очистить корзину</div>
            </div>
            <div class="cart-detail" v-if="$store.state.cart.length > 0">
                <div class="cart-detail__left-side">
                        <div class="product" v-for="item in $store.state.cart" :key="item.id">
                            <Product :product="item" :key="item.title"/>
                        </div>
                    <div>
                        <input type="checkbox" @click="$store.commit('setInstall')" name="install" />
                        <label for="install">Установка</label>
                    </div>
                </div>
                <div class="cart-detail__right-side">
                    <div class="navbar-item">
                        Итого:
                        <p>Сумма заказа {{ $store.state.cartTotalPrice.toLocaleString('ru-RU') }} руб</p>
                        <p> Количество {{ $store.state.cartCount }} </p>
                        <p> Установка:
                            <span v-if="$store.state.install === true"> да </span>
                            <span v-else> нет</span>
                        </p>
                    </div>
                    <p class="navbar-item">
                        Стоимость товара {{ $store.state.cartTotalPrice.toLocaleString('ru-RU') }} руб
                    </p>
                    <button @click="$store.dispatch('sendCart')">Оформить заказ</button>
                </div>
            </div>
            <div v-else class="navbar-dropdown is-boxed is-right">
                <a class="navbar-item" href="">
                    Корзина пуста
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
    name: "Cart",
    components: {
        Product
    },
    computed: {

    },
    methods: {
        removeFromCart(item) {
            this.$store.commit("removeFromCart", item);
            this.$store.commit("setCartCount");
        }
    },
    mounted() {
        this.$store.commit("setCartCount");
        this.$store.commit('cartTotalPrice')
    },
    components: { Product }
}
</script>
<style>
.prod:not(:last-child){
   border-bottom: 1px #C4C4C4 solid;
}
.wrap {
    margin: auto;
    max-width: 1440px;
}

.mini-cart {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 82px;
}

.mini-cart__img {
    align-self: center;
    padding: 12px;
}

.mini-cart__slots {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.mini-cart__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #1F2432;
    line-height: 21px;
    letter-spacing: 0em;
}

.mini-cart__card-count {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #797B86
}

.mini-cart__price-text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #1F2432
}

.nav {
    display: flex;
    align-items: baseline;
}

.nav__item {
    margin-right: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #33374E;
}

.nav__item__active {
    color: #797B86;
}

.cart-header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
}

.cart-header__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 120.52%;
    color: #1F2432;
    margin-right: 22px;
}

.cart-header__card-count {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;
    color: #797B86;
}

.cart-header__clear-btn {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    text-decoration-line: underline;
    color: #797B86;
    margin-left: 20%;
    align-self: baseline;
    cursor: pointer;
}

.product-container {
    width: 100%;
    display: inline-flex;
    align-items: center;
    align-content: space-around;
    padding: 20px;
}

.product:not(:last-child){
   border-bottom: 1px #C4C4C4 solid;
}

.cart-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.cart-detail__left-side {
    width: 60%;
}

.cart-detail__right-side {
    width: 40%;
}
</style>