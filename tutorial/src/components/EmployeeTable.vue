<template>
    <div id="employee-table">
        <p v-if="employees.length < 1" class="empty-table">No employees</p>
        <table>
            <thead><tr><th>Employee Name</th><th>Email</th></tr></thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td v-if="editing === employee.id">
                        <input type="text" v-model="employee.name" /></td>
                    <td v-else>{{ employee.name }}</td>
                    <td v-if="editing === employee.id">
                        <input type="text" v-model="employee.email" />
                    </td>
                    <td v-else>{{ employee.email }}</td>
                    <td v-if="editing === employee.id">
                        <button @click="editEmployee(employee)">Save</button>
                        <button class="muted-button" @click="cancelEdit(employee)">Cancel</button>
                    </td>
                    <td v-else>
                        <button @click="editMode(employee)">Edit</button>
                        <button class="del-button" @click="$emit('delete:employee',employee.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'employee-table',
    props:{
        employees: Array,
    },
    data(){
        return{
            editing:null,
        }
    },
    methods:{
        editMode(employee){
            this.cachedEmployee = Object.assign({},employee)
            this.editing = employee.id
        },
        cancelEdit(employee){
            Object.assign(employee, this.cachedEmployee)
            this.editing = null
        },
        editEmployee(employee){
            if(employee.name === '' || employee.email === '') return
            this.$emit('edit:employee',employee.id,employee)
            this.editing = null
        }
    }
}
</script>

<style scoped>
button{
    margin:0 0.5rem 0 0;
}
.del-button{
    background-color: red;
}
</style>
