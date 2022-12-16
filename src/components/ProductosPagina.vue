/* eslint-disable */
<template>
    <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" />
    <transition name="fade">
        <span
            v-if="loading"
        >
            <i ></i>
        </span>
    </transition>
    <div>
        <div >
            <h1 >Products</h1>
            <v-btn
                @click="$router.push('/principal')"
            >Atrás</v-btn>
        </div>
        <br>
        <br>

        <div >
            <div
                v-for="product in products"
                :key="product.id"
                :style="{'display': 'flex', 'justify-content': 'center', 'margin-bottom':'2rem'}"
            >
                <v-card elevation="6" :style="{'padding': '1rem'}">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-img
                                max-height="243"
                                max-width="250"
                                v-bind:src="`${product.image}`"
                            />
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <div>
                                <h1>{{ product.title }}</h1>
                                <p >{{ product.description }}</p>
                                <div :style="{'display': 'flex', 'justify-content': 'center', 'align-items': 'center', 'flex-direction': 'column'}">
                                    <h1 >${{ product.price }}</h1>
                                    <v-btn>Calificar</v-btn>
                                    <star-rating  rating=0 v-model:rating="rating" @rating-selected ="setRating"></star-rating> 
                                    <!-- rating es el rating inicial que va a tener, este tráiganlo de la db
                                        setRating es la función que se ejecuta cuando se pone un rating, está implementada abajo
                                        pónganle por favor que lo guarde en mongo de la forma {idProducto rating} y que cuando lo
                                        mande a llamar, que ponga el rating previamente guardado en la propiedad rating.
                                     -->
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </div>
    </div>
</template> 


<script>

import axios from 'axios'

export default {
    data() {
        return {
            products: [],
            loading: true,
            rating: 0
        }
    },
    async created() {
        try {
            const res = await axios.get(
                "https://fakestoreapi.com/products/category/men's%20clothing"
            )
            this.loading = false;
            this.products = res.data
    
        } catch (e) {
            console.error(e)
        }
    },
    methods: {
        async setRating(rating){
            this.rating = rating;
        }
    }
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>