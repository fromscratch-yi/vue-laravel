import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:5000'

const state = {
  user: null,
  token: window.localStorage.getItem('token')
}

const getters = {
  check: state => !!state.user,
  user: state => state.user ? state.user : '',
  token: state => state.token ? state.token : ''
}

const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    console.log(token)
    window.localStorage.setItem('token', token)
  }
}

const actions = {
  async register (context, data) {
    await axios.post(BASE_URL + '/api/register', data).then((result) => {
      console.log(result)
      context.commit('setUser', result.data.user)
      context.commit('setToken', result.data.token)
    })
  },
  async login (context, data) {
    await axios.post(BASE_URL + '/api/login', data).then((result) => {
      context.commit('setUser', result.data.user)
      context.commit('setToken', result.data.token)
    })
  },
  async logout (context) {
    console.log(state.token)
    await axios.post(BASE_URL + '/api/logout', null, {
      headers: {
        Authorization: `Bearer ${state.token}`
      },
      data: {}
    }).then((result) => {
      console.log(result)
      context.commit('setUser', null)
      context.commit('setToken', null)
    }).catch(error => {
      console.log(`Error! HTTP Status: ${error}`)
    })
  },
  async fetchUser (context) {
    await axios.get(BASE_URL + '/api/user', {
      headers: {
        Authorization: `Bearer ${state.token}`
      },
      data: {}
    }).then((result) => {
      context.commit('setUser', result.data.user)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
