<template>
    <div class="">
        <p>{{ product.title }}</p>
        <p>{{ product.content }}</p>
        <button @click.prevent="this.$store.commit('multiPriceDecrise', product)">-</button>
        <p>{{ product.amount }}</p>
        <button @click.prevent="this.$store.commit('multiPriceIncrise', product)">+</button>
        <p v-if="product.amount > 1"> {{ product.price }}</p>
        <p>{{ product.totalPrice }} руб</p>
    </div>
</template>

<script>
export default {
    name: 'product',
    props: {
        product: {
            type: Object,
            require: true
        }
    },
}
</script>
<style>
</style>