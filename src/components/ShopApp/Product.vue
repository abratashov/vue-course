<template>
  <div>
    <h1>{{ product.title }}</h1>
    <router-link :to="{name: 'products'}">Back to products</router-link>
    <hr>
    <div class="alert alert-success">
      {{ product.price }}
    </div>

    <button v-if="inCart"
            @click="removeFromCart(id)"
            class="btn btn-primary"
    >
      Remove from cart
    </button>
    <button v-else
        @click="addToCart(id)"
        class="btn btn-warning"
    >
      Add to cart
    </button>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

  export default {
    computed: {
      ...mapGetters('cart', {products: 'products'}),
      id(){
        return parseInt(this.$route.params.id);
      },
      product(){
        return this.$store.getters['products/item'](this.id);
      },
      inCart(){
        return this.products.indexOf(this.id) !== -1;
      }
    },
    methods: {
      ...mapActions('cart', {
        addToCart: 'add',
        removeFromCart: 'remove',
      }),
    }
  }
</script>
