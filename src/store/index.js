import { observable, action, computed } from 'mobx'
import moment from 'moment'
class AppStore {
    @observable time = '2020'
    @observable todos = []
    @computed get desc(){
        return `${this.time} have ${this.todos.length} to finish`
    }
    @action addTodo(todo){
        this.todos.push(todo)
    }
    @action deleteTodo(){
        this.todos.pop()
    }
    @action resetTodo(){
        this.todos = []
    }
    @action getNow(){
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

setInterval(()=>{
    store.getNow()
},1000)

const store = new AppStore();
export default store;