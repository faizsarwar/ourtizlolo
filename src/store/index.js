import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated:false,
    token:'',
    isLoading:false,
    userid:''
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')){
        state.cart=JSON.parse(localStorage.getItem('cart'))
      }else{
        localStorage.setItem('cart',JSON.stringify(state.cart))
      }

      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
          state.token = ''
          state.isAuthenticated = false
      } 
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => (i.product.id === item.product.id) && (i.category==item.category))
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
        exists[0].price = parseInt(exists[0].price) + parseInt(item.price)
        if (!exists[0].price){
          exists[0].price=item.price
        }
        
      } else {
        state.cart.items.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },    
    clearCart(state) {
      state.cart = { items: [] }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    setUserId(state, Id) {
      state.userid = Id
    },
    removeUserId(state) {
        state.userid = ''
    },  
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})