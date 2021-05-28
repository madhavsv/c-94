
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAThoxEQWRQ7KO-_auP1RP9fbz2Q4OmpCc",
    authDomain: "practice-activity-c94-f6540.firebaseapp.com",
    databaseURL: "https://practice-activity-c94-f6540-default-rtdb.firebaseio.com",
    projectId: "practice-activity-c94-f6540",
    storageBucket: "practice-activity-c94-f6540.appspot.com",
    messagingSenderId: "387713208287",
    appId: "1:387713208287:web:fbca88aff87d7862597e6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser() {
      get_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(get_name).update({
          purpose:"adding user"
      });
      
  }
  