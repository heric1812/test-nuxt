<template>
  <div>
    <h1>Login</h1>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: this.title,
        meta: [
          {hid: 'description', name: 'description', content: 'My custom description'}
        ]
      }
    },
    data () {
      return {
        title: 'Login - Blog',
        credentials: {
          email: '',
          password: '',
          password_confirmation: ''
        }
      }
    }
  }
</script>