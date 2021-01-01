<template>
  <div>
    <h1>login</h1>
    <form @submit.prevent="login">
      <div class="input_box">
        <div class="input_wrap">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="loginForm.email" />
        </div>
        <ul class="error_list" v-if="errors['email']">
          <li v-for="(error, idx) in errors['email']" :key="idx">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input_box">
        <div class="input_wrap">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="loginForm.password" />
        </div>
        <ul class="error_list" v-if="errors['password']">
          <li v-for="(error, idx) in errors['password']" :key="idx">
            {{ error }}
          </li>
        </ul>
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  beforeMount () {
    if (this.$store.getters['auth/token']) {
      this.$router.push({
        name: 'dashboard'
      })
    }
  },
  methods: {
    async login () {
      await this.$store.dispatch('auth/login', this.loginForm).then(() => {
        this.$router.push({
          name: 'dashboard'
        })
      }).catch(error => {
        this.errors = error.response.data.errors
      })
    }
  }
}
</script>
