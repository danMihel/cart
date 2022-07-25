<template>
    <div class=""><p>{{$store.state.cart.length}}</p>
        <p class="navbar-link" href="">
           Ваша корзина ({{ $store.state.cartCount }})
        </p>

        <div v-if="$store.state.cart.length > 0" class="card-container">
            <a v-for="item in $store.state.cart" :key="item.id" class="card" href="">
                <span class="removeBtn" title="Удалить из корзины" @click.prevent="removeFromCart(item)">X</span>
                <Product :product="item" :key="item.title" />
            </a>

            <div class="navbar-item">
                Итого:
                <p>Сумма заказа {{ $store.state.cartTotalPrice }} руб</p>
                <p> Количество {{ $store.state.cartCount }} </p>

            </div>

            <hr class="navbar-divider">

            <p class="navbar-item">
               Стоимость товара {{ $store.state.cartTotalPrice }} руб
            </p>
        </div>

        <div v-else class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="">
                Корзина пуста
            </a>
        </div>
    </div>
</template>

<script>
import Product from "./Product.vue";
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
.card-container {
    margin-left: 7%;
    display: flex;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>