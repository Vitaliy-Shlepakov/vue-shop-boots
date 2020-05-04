<template>
    <div class="wrapper">
        <header class="header">
            <div class="navbar">
                <div class="container">
                    <div class="navbar-content">
                        <router-link to="/" class="logo">VUE-CLI</router-link>
                        <ul class="navbar-list">
                            <li class="navbar-item" v-for="(link, index) in links" :key="index">
                                <router-link :to="link.url">{{link.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <router-view/>

        <footer>

        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
                links: [
                    {
                        title: 'Home',
                        url: '/'
                    },
                    {
                        title: 'Shop',
                        url: '/shop'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    .logo
        display: inline-block
        cursor: pointer
        color: #222
        font-weight: bold
</style>