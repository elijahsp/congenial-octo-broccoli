import tests from "../components/tests";
      
export default {
    name: "Login",
    components: {
        tests,
    },
    data() {
        return {
            username: "",
            password: "",
        };
    },

    methods: {
        login() {
            
                        
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                username: this.username,
                password: this.password,
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch("http://192.168.32.127:5500/login", requestOptions)
                .then((response) =>{
                if(response.status!==200)
                throw new Error(response.status)
                 return response.text();
                })
                .then((result) => {
                    var token=result.split(" ")[1];
                    localStorage.setItem("token", token);
                    
                    //console.log("hello" + localStorage.getItem("token"));
                    this.username = "";
                    this.password = "";
                    var admin=result.split(" ")[0];
                    
                    if(admin=="admin")
                    window.location.replace("/admin");
                    else
                    window.location.replace("/");
                })
                .catch((error) => {
                    let errorMessage
                    if(error.message==401)
                        errorMessage="Incorrect Login Details"
                    else
                        errorMessage="Login Error"
                    document.getElementById("errorText").innerHTML=errorMessage});
        },
        
    },
};
