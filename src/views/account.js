   
import AddAccount from '../components/AddAcount'
import AccountList from '../components/AccountList'
import axios from 'axios'
export default {
            name: "Account",
            components: {
                AddAccount,
                AccountList
            },
            created() {
              var yourConfig = {
                headers: {
                   Authorization: "Bearer " + localStorage.getItem("token")
                }
             }
             
             axios.get('http://192.168.32.127:5500/account',yourConfig)
      .then(res => {
        
        
        this.account = res.data
        
        })
      .catch(err => {
        console.log(err)
        window.location.replace("/");
      });
            },        
            
    data() {
      return{
         account: []
          }                
          },
        
    methods: {
      home(){
        window.location.replace("/admin")
      },
       deleteAccount(username){
        if(confirm("delete account?"))
                  {
                    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"))
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"username":username});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("http://192.168.32.127:5500/account", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result)
    this.account = this.account.filter(account => account.username !== username)
})
  .catch(error => {console.log('error', error)
  document.getElementById("notif").innerHTML="ERROR ADDING"});
                }
                },


                addAccount(newAccount){
                    const { username, password } = newAccount;
                    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"))
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"username":username,"password":password});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://192.168.32.127:5500/account", requestOptions)
  .then(response => response.text())
  .then(result => {
    JSON.parse(result)
    
    if (result!="bad")
    {
    
    document.getElementById("notif").innerHTML="ADDED"
    location.reload()
    }
    else{
    
    document.getElementById("notif").innerHTML="ERROR ADDING"
    }
})
  .catch(error => {console.log('error', error)
  document.getElementById("notif").innerHTML="ERROR ADDING"});
                }
            },
        };