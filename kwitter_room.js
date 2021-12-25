import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1rVjATd9KRj2262B0t1LGotn9wnGMISM",
  authDomain: "kwitter-19542.firebaseapp.com",
  databaseURL: "https://kwitter-19542-default-rtdb.firebaseio.com",
  projectId: "kwitter-19542",
  storageBucket: "kwitter-19542.appspot.com",
  messagingSenderId: "1025194240115",
  appId: "1:1025194240115:web:7dd4b691bc5e8073fe2206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;
  
  function addRoom() {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_room.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
console.log("room name" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0 
    });
    document.getElementById("msg").value="";
}