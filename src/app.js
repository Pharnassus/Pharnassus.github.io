import Vue from 'vue';
const axios = require('axios').default;

var app = new Vue(
    {
        el: "#app",
        data: {

        },
        mounted: function () {
            alert("Vue funziona!");
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(function (response) {
                    console.log(response.data);
                });
        },
    },
);