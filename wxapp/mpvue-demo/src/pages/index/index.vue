<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <p>{{value}}</p>
    <input type="text" v-model="value"/>
    <button @click="addTodo">加一条</button>
    <button @click="clearTodo">清空</button>
    <ul class="todos">
      <!-- v-for v-key vue 循环指令 in 指定 key+index -->
      <!-- : 动态绑定属性 标签或属性的组件是与data相关 加:  -->
      <li v-key='i' v-for="(todo, i) in todos" 
      @click="toggle(i)"
      :class="{'done':todo.done}">{{todo.text}}</li>
      <li>{{todoNum}}/{{todos.length}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value: '',
      title:'Hello Mpvue',
      todos: [
        {
          'text':'吃饭', 
          done: false
        },
      ]
    }
  },

  components: {
  },
  computed: {
    // 计算属性一定有return
    todoNum () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    addTodo () {
      if (!this.value) {
        return 
      } 
      this.todos.push({text: this.value, done: true});
      this.value = ''
    },
    toggle (i) {
      console.log(i)
      // 状态切换？
      // vue 只要改变了数据，直接会改变界面
      // 状态 done true false
      this.todos[i].done = !this.todos[i].done
    },
    clearTodo () {
      this.todos = []
    }
  },

  created () {
  }
}
</script>

<style scoped>
  /* 单页面组件 */
.title {
  color: #ed12a3;
  text-align: center;
}
ul.todoa {
  margin: 20px;
}
input {
  border: 2px solid #ed12a3;
}
.done {
  text-decoration: line-through;
}
</style>
