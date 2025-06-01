const formLoginEl = document.querySelector("#form-login")
let account = JSON.parse(localStorage.getItem("users")) || [];

formLoginEl.addEventListener("submit", (e) =>{
    e.preventDefault();

    const usernameVal = formLoginEl.username.value.trim()
    const pwdVal = formLoginEl.password.value;

    const validate = () => {
        if(usernameVal === "" || pwdVal === "") {
            alert("Nhập thông tin");
            return false;
        }
        return true;
    }

    if (validate()) {
        const user = account.find(
            (acc) => acc.username === usernameVal && acc.password === pwdVal
        )
        
        if (user) {
            alert("Đăng nhập thành công!");
            window.location.href = "../index.html";
        } else {
            alert("Tên người dùng không chính xác!")
        }
        
    }
})