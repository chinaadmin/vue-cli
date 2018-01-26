<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <h1 v-text="title" :message="message" ></h1>
    <input v-model="newitem" v-on:keyup.enter="addnew()"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isfinsed}" v-on:click="togglefinish(item)">
       {{ item.label }}
      </li>
    </ul>
    <router-link to="/">Go to Foo</router-link>
    <router-link to="/hello">Go to Bar</router-link>
    <router-view :message="message"/>
  </div>

</template>

<script>
import Store from './store'
export default {
  name: 'App',
  data: function () {
    return {
      title: 'a new todo list2e',
      items: Store.fetch(),
      newitem: "",
      message: "avc"
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  methods: {
   togglefinish: function (item) {
     item.isfinsed = !item.isfinsed
   },
   addnew: function () {
     this.items.push({
      label: this.newitem,
      isfinsed: false
     })
     this.newitem= ""
   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  text-decoration:underline;
}
</style>
