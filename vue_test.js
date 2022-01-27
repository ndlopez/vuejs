var hello_app = new Vue({
    el: '#hello_app',
    data: {
      message: 'Hello Vue!'
    }
})
var load_app = new Vue({
    el: '#load_app',
    data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
var load_list = new Vue({
    el: '#load_list',
    data: {
      todos: [
        { text: 'Learn Vue, it\'s independent' },
        { text: 'Vue does NOT depend on google nor facebook assholes' },
        { text: 'Must learn something new' }
      ],
      newItem:""
    },
    methods:{
      addItem: function(){
        this.todos.push({text:this.newItem})
        this.newItem = ""
      }
    },
    filters:{
      addPeriod: function(value){
        return value + '.'
      }
    }
})
load_list.todos.push({text:'Build something'});

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Vue is not involved with google asshole!'
    }
})
//adding HTML components
Vue.component('todo-item', {
  /* The todo-item component now accepts a
   "prop", which is like a custom attribute.
   This prop is called todo.*/
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Ricotta Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})

new Vue({
  el: '#hideShow',
  data: {
    show: true,
    donotshow: false
  },
  computed:{
    btnName: function(){
      if(this.show == true){
        return "Toggle Hide"
      }
      else{
        return "Toggle Show"
      }
    }
  }
})

new Vue({
  el: '#list-demo',
  data: {
    items: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }
})