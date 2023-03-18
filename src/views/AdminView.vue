<template>
    <div class="users">
        <h1>Users</h1>
        <AddUser/>
    </div>
    <div class="container">
        <div class="row">
            <table class="table">
                <th>FirstName</th>
                <th>LastName</th>
                <th>EmailAdd</th>
                <th>UserRole</th>
                <th>userProfile</th>
                <th>Edit</th>
                <th>Delete</th>
                <tbody>
                    <tr v-for="user in users" :key="user.userID">
                    <td>
                        {{ user.firstName }}
                    </td>
                    <td>
                        {{ user.lastName }}
                    </td>
                    <td>
                        {{ user.emailAdd }}
                    </td>
                    <td>
                        {{ user.userRole }}
                    </td>
                    <td>
                        <img :src="user.userProfile" :alt="user.firstname">
                    </td>
                    <td>
                        <button class="btn btn-primary">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-dark">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="name">
        <h1>Products</h1>
        <AddProduct/>
    </div>
    <div class="container">
        <div class="row">
            <table class="table">
                <th>ProdName</th>
                <th>Category</th>
                <th>Price</th>
                <th>ProdQuantity</th>
                <th>ProdImage</th>
                <th>Edit</th>
                <th>Delete</th>
                <tbody>
                    <tr v-for="product in products" :key="product.prodID">
                    <td>
                        {{ product.prodName }}
                    </td>
                    <td>
                        {{ product.category }}
                    </td>
                    <td>
                        {{ product.price }}
                    </td>
                    <td>
                        {{ product.prodQuantity }}
                    </td>
                    <td>
                        <img :src="product.imgURL" :alt="product.prodName">
                    </td>
                    <td>
                        <button class="btn btn-primary">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-dark">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import AddUser from '@/components/AddUser.vue';
import AddProduct from '@/components/AddProduct.vue';
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
export default{
    components: {
        AddUser,
        AddProduct
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        const users =
        computed( ()=>store.state.users);
        const products =
        computed( ()=>store.state.products)
        return {
           users,
           products
        }
    }
}
</script>
<style scoped>
.table img{
    height: 130px;
}
.container{
    margin-top: 30px;
}
 h1{
    margin-top: 30px;
}
</style>