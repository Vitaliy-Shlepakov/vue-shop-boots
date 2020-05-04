<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <h1>Shop Page</h1>
                <div class="item-wrapper">
                    <shopItem
                        v-for="shopItem in shopList"
                        :key="shopItem.id"
                        :product="shopItem"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import shopItem from '../components/ShopItem';

    export default {
        components: {
            shopItem,
        },
        data() {
            return {
                shopList: null
            }
        },
        created() {
            this.shopList = this.$store.getters.getShopList
        }
    }
</script>

<style lang="sass">
    .item-wrapper
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
</style>
