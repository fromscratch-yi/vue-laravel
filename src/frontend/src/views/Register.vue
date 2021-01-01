<template>
  <div>
    <h1>Register</h1>
    <!-- <ul id="errors">
      <li v-for="(item, index) in errors">
        {{ error.key }}
      </li>
    </ul> -->
    <form @submit.prevent="register">
      <div class="input_box">
        <div class="input_wrap">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="registerForm.name" />
        </div>
        <ul class="error_list" v-if="errors['name']">
          <li v-for="(error, idx) in errors['name']" :key="idx">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input_box">
        <div class="input_wrap">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="registerForm.email" />
        </div>
        <ul class="error_list" v-if="errors['email']">
          <li v-for="(error, idx) in errors['name']" :key="idx">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input_box">
        <div class="input_wrap">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="registerForm.password" />
        </div>
        <ul class="error_list" v-if="errors['password']">
          <li v-for="(error, idx) in errors['password']" :key="idx">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input_box">
        <div class="input_wrap">
          <label for="password_confirm">Confirm Password</label>
          <input
            type="password"
            id="password_confirm"
            v-model="registerForm.password_confirmation"
          />
        </div>
        <ul class="error_list" v-if="errors['password_confirm']">
          <li v-for="(error, idx) in errors['password_confirm']" :key="idx">
            {{ error }}
          </li>
        </ul>
      </div>
      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {},
  data () {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
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
    async register () {
      this.errors = []
      await this.$store.dispatch('auth/register', this.registerForm).then(() => {
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
