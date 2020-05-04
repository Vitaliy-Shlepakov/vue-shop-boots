export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike red',
                descr: 'Задача организации, в особенности же новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации. Товарищи! новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.',
                img: require('../assets/img/1.png'),
                gallery: [
                    {
                        name: 'Nuke boots First',
                        img: require('../assets/img/1.png')
                    },
                    {
                        name: 'Nuke boots Second',
                        img: require('../assets/img/2.png')
                    },
                    {
                        name: 'Nuke boots Third',
                        img: require('../assets/img/3.png')
                    }
                ]
            },
            {
                id: 2,
                title: 'Nike default',
                descr: 'Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа систем массового участия. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки новых предложений.',
                img: require('../assets/img/4.png'),
                gallery: [
                    {
                        name: 'Nuke boots First',
                        img: require('../assets/img/4.png')
                    },
                    {
                        name: 'Nuke boots Second',
                        img: require('../assets/img/5.png')
                    },
                    {
                        name: 'Nuke boots Third',
                        img: require('../assets/img/6.png')
                    }
                ]
            },
            {
                id: 3,
                title: 'Nike green',
                descr: 'Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа систем массового участия. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки новых предложений.',
                img: require('../assets/img/7.png'),
                gallery: [
                    {
                        name: 'Nuke boots First',
                        img: require('../assets/img/7.png')
                    },
                    {
                        name: 'Nuke boots Second',
                        img: require('../assets/img/8.png')
                    },
                    {
                        name: 'Nuke boots Third',
                        img: require('../assets/img/9.png')
                    }
                ]
            },
            {
                id: 4,
                title: 'Nike street',
                descr: 'Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа систем массового участия. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки новых предложений.',
                img: require('../assets/img/10.png'),
                gallery: [
                    {
                        name: 'Nuke boots First',
                        img: require('../assets/img/10.png')
                    },
                    {
                        name: 'Nuke boots Second',
                        img: require('../assets/img/11.png')
                    },
                    {
                        name: 'Nuke boots Third',
                        img: require('../assets/img/12.png')
                    }
                ]
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList(state){
            return state.shopList
        },
        getProduct: state => id => {
            return state.shopList.find(product => product.id == id)
        }
    }
}

