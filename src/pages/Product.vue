<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <div class="product__wrapper">

                    <div class="product-slider">
                        <carousel
                            :perPage="1"
                        >
                            <slide v-for="item in product.gallery">
                                <img :src="item.img" :alt="item.name">
                            </slide>
                        </carousel>

                    </div>

                    <div class="product-content">
                        <h1 class="title">{{product.title}}</h1>
                        <p>{{product.title}}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              product: null
          }
        },
        created() {
            const id = this.$route.params.id;
            this.product = this.$store.getters.getProduct(id);
        }
    }
</script>

<style lang="sass">
    .product__wrapper
        display: flex
        justify-content: space-between
        align-items: center

    .product-slider,
    .product-content
        max-width: 48%
        text-align: center
        width: 100%

</style>