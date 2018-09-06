<template>
  <section class="container pt-5">
    <div class="row">
      <div class="col-md-9 pr-0">
        <div class="input-group mb-3">
          <input @keyup="validate" 
            @keyup.enter="submit" 
            class="border-0 form-control" 
            v-model="user" 
            type="text" 
            placeholder="Enter Github Username">
          <div class="input-group-prepend" @click="submit">
            <check-mark-button :class="classObject" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckMarkButton from '~/assets/icon/CheckmarkButton.svg'
export default {
  components: {
    CheckMarkButton
  },
  data() {
    return {
      user: '',
      classObject: {
        checkmark: true,
        visible: false,
        invisible: true
      }
    }
  },
  methods: {
    validate() {
      if (this.user) {
        this.classObject['visible'] = true
        this.classObject['invisible'] = false
      } else {
        this.classObject['visible'] = false
        this.classObject['invisible'] = true
      }
    },
    submit() {
      if (this.user) {
        //if user has enter an username, redirect user to the repo page
        this.$router.replace({ name: 'user', params: { user: this.user } })
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  max-width: 500px;
}

input {
  border-radius: 5000px 0 0 5000px;
  &:focus {
    border-color: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    outline: 0 none;
    background-color: #f5f9fb;
  }
  padding: 30px;
  background-color: #f5f9fb;
}

.input-group-prepend {
  .checkmark {
    cursor: pointer;
    width: 45px;
    height: 45px;
    margin-top: 14px;
  }
  border-radius: 0 5000px 5000px 0;
  background-color: #f8f8f8;
}
</style>