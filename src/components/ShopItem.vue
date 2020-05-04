<template>
    <div class="item">
        <router-link
            class="item-inner"
            :to="`/shop/${product.id}`"
        >
            <img :src="product.img" :alt="product.title">
            <p>{{product.title}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="sass" scoped>
    .item
        max-width: 50%
        text-align: center

        p
            font-size: 22px

    .item-inner
        padding: 20px
        display: inline-block
        margin: 0 20px 50px
        box-shadow: 3px 3px 10px rgba(0,0,0, .1)
        transition: .2s all
        border-radius: 3px
        color: #222

        &:hover
            box-shadow: 1px 1px 10px rgba(0,0,0, .1)
            border-radius: 10px

</style>