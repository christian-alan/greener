<template>
    <div>
        This is Login
    </div>

    <div>
        <input type="text" v-model="newTodo">
        <button @click="addTodo()">Add Btn</button>
    </div>
    
    <pre>
        {{ todos }}
    </pre>
    



</template>
<script>
export default{
    data(){
        return {
            id:0,
            newTodo:'',
            todos:[
                {
                    id:this.id++,
                    text:'hey'
                }
            ]
        }
    },
    methods:{
        addTodo(){
            console.log(this.newTodo);
            this.todos.push({id:this.id++,text:this.newTodo});
        },
        removeTodo(){

        }
    },
    async created(){
        
    }
}
</script>
<style>
</style>