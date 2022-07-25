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
                <div class="cart-detail__left-side ">
                    <div>
                        <div class="product" v-for="item in $store.state.cart" :key="item.id">
                            <Product :product="item" :key="item.title" class="product-container" />
                        </div>
                    </div>
                    <div class="install-block">
                        <input type="checkbox" @click="$store.commit('setInstall')" name="install" />
                        <img src="@/assets/wrench.png" />
                        <div class="install-block__text">
                            <div class="install-block__title">Установка</div>
                            <div class="install-block__subtitle">Отметьте, если Вам необходима консультация
                                профессионала по монтажу выбранных товаров.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-detail__right-side">
                    <div class="sum">
                        <p class="sum__title">Итого:</p>
                        <div class="sum__row">
                            <div class="sum__subtitle">Сумма заказа </div>
                            <div class="sum__subtitle">{{ $store.state.cartTotalPrice.toLocaleString('ru-RU') }}
                                &#8381;</div>
                        </div>
                        <div class="sum__row">
                            <div class="sum__subtitle">
                                Количество
                            </div>
                            <div class="sum__subtitle">
                                {{ $store.state.cartCount }} шт
                            </div>
                        </div>
                        <div class="sum__row">
                            <div class="sum__subtitle">
                                Установка:
                            </div>
                            <div class="sum__subtitle">
                                <div class="sum__subtitle" v-if="$store.state.install === true"> Да </div>
                                <div class="sum__subtitle" v-else> Нет</div>
                            </div>
                        </div>
                        <hr />
                        <div class="sum__row">
                            <div class="sum__calc-text">
                                Стоимость товара
                            </div>
                            <div class="sum__calc-value">
                                {{ $store.state.cartTotalPrice.toLocaleString('ru-RU') }} &#8381;
                            </div>
                        </div>
                        <button class="order-btn" @click="$store.dispatch('sendCart')">Оформить заказ</button>
                        <button class="order-btn-express" @click="$store.dispatch('sendCart')">Купить в 1 клик</button>
                    </div>
                </div>
            </div>
            <div v-else class="navbar-dropdown is-boxed is-right">
                <div class="">
                    Корзина пуста
                </div>
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

.product-container:last-child {
    width: 100%;
    display: inline-flex;
    align-items: center;
    align-content: space-around;
    padding: 20px;

}

.product:not(:last-child) {
    border-bottom: 1px #C4C4C4 solid;
}

.cart-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.cart-detail__left-side {
    width: 60%;
    margin: 10px;
}

.cart-detail__right-side {
    width: 40%;
}

.install-block {
    background: #F6F8FA;
    border-radius: 5px;
    padding: 26px;
    display: flex;
    align-items: center;
}

.install-block img {
    margin-right: 20px;
    margin-left: 20px;
}

.install-block__text {
    text-align: left;
}

.install-block__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1F2432;
}

.install-block__subtitle {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
}

.sum {
    background: #F6F8FA;
    border-radius: 5px;
    margin-left: 10%;
    padding: 35px;
}

.sum__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120.52%;
    color: #1F2432;
    text-align: left;
}

.sum__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
}

.sum__subtitle {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #1F2432;
    text-align: left;
}

.sum__calc-text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #1F2432;
}

.sum__calc-value {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    letter-spacing: 0.005em;
    color: #1F2432;
}

.order-btn {
    background: #0069B4;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 54px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #FFFFFF;
    margin-bottom: 12px;
}

.order-btn-express {
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #0069B4;
    width: 100%;
    height: 54px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #0069B4;
}

.order-btn:hover {
    background-color: #053e68;
    transition: 0.2s linear;
}
.order-btn:active {
    background-color: #8a8d99;
    border: #4f505228 solid 3px;
}

.order-btn-express:hover {
   border: 2px solid #0069B4;
    transition: 0.2s linear;
}
.order-btn-express:active {
    background-color: #8a8d99;
    color: #fdfdfd;
}
</style>