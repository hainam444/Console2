// Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAo9526iKke809dBoLkofF83U5X2ppzKds",
          authDomain: "du-an-hai-nam-an-cam.firebaseapp.com",
          projectId: "du-an-hai-nam-an-cam",
          storageBucket: "du-an-hai-nam-an-cam.firebasestorage.app",
          messagingSenderId: "734967803010",
          appId: "1:734967803010:web:def3e718ac2c66b940589b",
          measurementId: "G-L1GX9RXWBD"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();
console.log(firebase.app().name)


document.getElementById("submit").addEventListener('click', function(e){
  set(ref(db, 'user/' + document.getElementById("username").value),
  {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    repassword: document
  })

})

// const formRegisterEl = document.querySelector("#form-register");
// let account = JSON.parse(localStorage.getItem("users")) || [];
// formRegisterEl.addEventListener("submit", (e) => {
//   e.preventDefault(); 
// });
// function submit(){debugger
//     const usernameVal = formRegisterEl.username.value;
//   const emailVal = formRegisterEl.email.value;
//   const pwdVal = formRegisterEl.password.value;
//   const re_pwdVal = formRegisterEl.re_password.value;
//   // Validate form
//   const validate = () => {
//     if (
//       usernameVal == "" ||
//       emailVal == "" ||
//       pwdVal == "" ||
//       re_pwdVal == ""
//     ) {
//         alert("Vui lòng không được bỏ trống các trường thông tin!!");
//         return false;
//       }

//       if(pwdVal.length < 6) {
//         alert('Mật khẩu phải có ít nhất 6 kí tự');
//         return false
//       }

//       if(pwdVal !== re_pwdVal) {
//         alert("Mật khẩu nhập lại không khớp");
//         return false
//       }
  
//       return true;
//     };
//     if (validate()) {
//       const user = {
//         username: usernameVal,
//         email: emailVal,
//         password: pwdVal,
//         re_password: re_pwdVal,
//       };
//       let search;
//       for (let i in account) {
//         if (account[i].username === user.username) {
//           search = account[i];
//         }
//       }
//       function validateEmail(email) {
//         // Biểu thức chính quy dùng để kiểm tra email
//         const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
//         // Kiểm tra email xem có phù hợp không
//         return regex.test(email);
//       }
      
//       // Ví dụ sử dụng hàm validateEmail
//       const email = "example@domain.com";
//       if (validateEmail(email)) {
//         return search
//       } else {
//         alert("Email không hợp lệ");
//       }
//       if (search) {
//         alert(
//           "Tài khoản " +
//           user.username +
//           "đã được đăng ký rồi, vui lòng dùng dùng user khác"
//       );
//     } else {
//       account.push(user);
//       localStorage.setItem("users", JSON.stringify(account));
//       alert("đăng ký thành công")
//     }
//     return
//   }
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // Thông tin người dùng
//             let userData = {
//                 username,
//                 email,
//                 password,
//                 role_id: role_id,
//                 balance: 0, // số dư ví mặc định là 0
//             }

//             // Thêm user vào Firestore
//             db.collection("users").add(userData)
//                 .then((docRef) => {
//                     alert("Đăng ký thành công");
//                     window.location.href = "/components/signin.html";
//                     console.log("Document written with ID: ", docRef.id);
//                 })
//                 .catch((error) => {
//                     alert("Đăng ký thất bại");
//                     console.error("Error adding document: ", error);
//                 });
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//             alert(`Lỗi: ${errorMessage}`);
//             console.log(errorMessage);
//         }); 
// }

