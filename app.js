// Initialize Firebase
var config = {
    apiKey: "AIzaSyDvVaAQPx_vOq3CJqqnZEcADEGf9tjPy8U",
    authDomain: "testprj2-f55a0.firebaseapp.com",
    databaseURL: "https://testprj2-f55a0.firebaseio.com",
    projectId: "testprj2-f55a0",
    storageBucket: "testprj2-f55a0.appspot.com",
    messagingSenderId: "662692880607"
};

firebase.initializeApp(config);
var database = firebase.database();

console.log("1111");


$("#btn-submit").on("click", function (event) {
    event.preventDefault();
    console.log("hehhehe");
    var employeeName = $("#employeeName").val();
    var startDate = $("#startDate").val();
    var monthsWorked = $("#monthsWorked").val();
    // console.log(employeeName + startDate);

    var dataToPush = {
        "employeeName": employeeName,
        "startDate": startDate,
        "monthsWorked": monthsWorked,
    }
    database.ref().push(dataToPush);
});