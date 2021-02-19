// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import Vue from "vue";

import { Tabs, Tab } from "vue-tabs-component";
import "vue-tabs-component/docs/resources/tabs-component.css";
let lodash = require("lodash");
Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
Vue.use(Chartkick.use(Chart));


function chartData(content) {//getting all data
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("token")
    );

    //var raw = "";

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        //body: raw,
        redirect: "follow",
    };

<<<<<<< HEAD
    fetch("http://localhost:5500/all", requestOptions)
=======
    fetch("http://192.168.32.127:5500/all", requestOptions)
>>>>>>> refs/remotes/turnstile-app/master
        .then((response) => response.text())
        .then((result) => {
            var testobj = JSON.parse(result);
            testobj.sort((a, b) => (a.daterecord > b.daterecord ? 1 : -1));
           /* var arrCont1 = new Array();
            var counter = 0;
            testobj.forEach((element) => {
                arrCont1[counter] =
                    '"' + element.daterecord + '":' + element.customer;

                counter++;
            });*/
		document.getElementById("qwert").innerHTML="Series Number: "+testobj[testobj.length-1].seriesnum
		testobj.forEach((element)=>{
                element.customer=element.customer*5
            });
            var arrCont = testobj.reduce(function(prev, curr) {
                prev[curr.daterecord.substr(0, 10)] = curr.customer;
                return prev;
            }, {});

           
            
            content(arrCont);
        })
        .catch((error) => {
            console.log("error", error);
            console.log(window.location.href);

            window.location.replace("/login");
        });
}
function chartDataWeek(content) {//getting last 7 records
    try {var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Bearer " + localStorage.getItem("token")
        );
    
        //var raw = "";
    
        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            //body: raw,
            redirect: "follow",
        };
        
        
    } catch (error) {
        console.log("error", error);
            console.log(window.location.href);

            window.location.replace("/login");
    }
    
    fetch("http://192.168.32.127:5500/all", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            var testobj = JSON.parse(result);
            testobj.sort((a, b) => (a.daterecord > b.daterecord ? 1 : -1));

            let newArray = lodash.slice(
                testobj,
                testobj.length - 7,
                testobj.length
            );
		newArray.forEach((element)=>{
                element.customer=element.customer*5
            });
            var arrCont = newArray.reduce(function(prev, curr) {
                prev[curr.daterecord.substr(0, 10)] = curr.customer;
                return prev;
            }, {});
            
            
            content(arrCont);
        })
        .catch((error) => {
            console.log("error", error);
            console.log(window.location.href);

            window.location.replace("/login");
        });
}
function chartDataMonth(content) {//getting lsat 30 records
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("token")
    );

    //var raw = "";

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        //body: raw,
        redirect: "follow",
    };

<<<<<<< HEAD
    fetch("http://localhost:5500/all", requestOptions)
=======
    fetch("http://192.168.32.127:5500/all", requestOptions)
>>>>>>> refs/remotes/turnstile-app/master
        .then((response) => response.text())
        .then((result) => {
            var testobj = JSON.parse(result);
            testobj.sort((a, b) => (a.daterecord > b.daterecord ? 1 : -1));
            let newArray = lodash.slice(
                testobj,
                Math.max(testobj.length - 30, 0),
                testobj.length
            );
		newArray.forEach((element)=>{
                element.customer=element.customer*5
            });

            var arrCont = newArray.reduce(function(prev, curr) {
                prev[curr.daterecord.substr(0, 10)] = curr.customer;
                return prev;
            }, {});
            

            content(arrCont);
        })
        .catch((error) => {
            console.log("error", error);
            console.log(window.location.href);

            window.location.replace("/login");
        });
}
export default {
    name: "Home",
    data() {
        return {
            chartData,
            chartDataWeek,
            chartDataMonth,
            
            message: "",
        };
    },
    

    components: {},
	/*created: function() {
        console.log("Starting connection to WebSocket Server")
        this.connection = new WebSocket("ws://192.168.32.127:4000")
    
        this.connection.onmessage = function(event) {
          console.log(event.data);    
          //document.getElementById("qwert").innerHTML=event.data
          Chartkick.eachChart( function(chart) {
            // refresh all
            chart.refreshData()
          })
        }
    
        this.connection.onopen = function(event) {
          console.log(event)
          console.log("Successfully connected to the echo websocket server...")
        }
        
        
    
      },*/
    methods: {
        logout() {
            localStorage.removeItem("token");
            location.replace("/login");
        },
    },
};
