<template>
    <div class="about">
        <h1>Usuarios Registrados</h1>
        <table class="table table-dark table-hover">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in usuarios" :key="item.id" v-on:click="consultarSeleccion(item.nombre)">
                <td>{{item.nombre}}</td>
                <td>{{item.edad}}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
    import Firebase from 'firebase'

    let config = {
        apiKey: "AIzaSyAoQF7y9Y9v1SwJ7BDxbuNi7BWaIa_VNTw",
        authDomain: "...",
        databaseURL: "https://person-d350a.firebaseio.com",
        storageBucket: "...",
        messagingSenderId: "..."
    };

    let app = Firebase.initializeApp(config);
    let db = app.database();
    let usersRef = db.ref('personas');

    export default {
        name: 'about',
        firebase: {
            usuarios: usersRef
        },
        methods: {
            consultarSeleccion(itemNombre) {
                this.$router.push('localhost:8081/detail/' + itemNombre)
            }
        }
    }
</script>
<style scoped>
    tr {
        cursor: pointer;
    }
</style>

