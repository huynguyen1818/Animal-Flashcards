const cardEle = document.querySelector('.card');
const heartEle = document.querySelector('#heart');

const signupModal = new bootstrap.Modal(document.querySelector('#signupModal'));
const signupFormEle = document.querySelector('#signupForm');
const usernameSignupEle = document.querySelector('#UsernameSignup');
const passwordSignupEle = document.querySelector('#PasswordSignup');
const passwordRepeatEle = document.querySelector('#PasswordRepeat');

const loginModal = new bootstrap.Modal(document.querySelector('#loginModal'));
const loginFormEle = document.querySelector('#loginForm');
const usernameLoginEle = document.querySelector('#UsernameLogin');
const passwordLoginEle = document.querySelector('#PasswordLogin');

const successModal = new bootstrap.Modal(document.querySelector('#successModal'));
const failModal = new bootstrap.Modal(document.querySelector('#failModal'));
const failMessageEle = document.querySelector('#failMessage');

const loginBtnEle = document.querySelector('#loginBtn');
const signupBtnEle = document.querySelector('#signupBtn');
const logoutBtnEle = document.querySelector('#logoutBtn');
const logoutConfirmEle = document.querySelector('#logoutConfirmBtn');

const welcomeEle = document.querySelector('#welcomeMessage');
var user = 'bạn';


let checkLoginStatus = localStorage.getItem('loggedIn');
if (checkLoginStatus) {
  localStorage.setItem('loggedIn','false');
} else {
  var loginStatus = JSON.parse(checkLoginStatus);
}

let check = localStorage.getItem('allAccount');
if (check) {
  var account = JSON.parse(check);
  console.log(account);
} else { 
  var account = [];
}

//Check if username exists
function usernameExist(newUsername) {
  if (account !== null) {
    for (let i = 0; i < account.length; i++) {
      if (account[i].username === newUsername) return true;
    }
    return false;
  } else {
    return false;
  }
}

//Check login
function loginOK(inputUsername, inputpassword) {
  for (let i = 0; i < account.length; i++) {
    if (account[i].username === inputUsername) { 
      if (account[i].password === inputpassword) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}

function beforeAfterLogin() {
  localStorage.setItem('loggedIn',JSON.stringify(loginStatus));
  if (loginStatus) {
    loginBtnEle.style.display = 'none';
    signupBtnEle.style.display = 'none';
    logoutBtnEle.style.display = 'block';
    welcomeEle.innerText = `Xin chào, ${user}`;
    welcomeEle.style.display = 'block';
  } else {
    loginBtnEle.style.display = 'block';
    signupBtnEle.style.display = 'block';
    logoutBtnEle.style.display = 'none';
    welcomeEle.style.display = 'none';
  }
}
beforeAfterLogin();

//Sign up JS
signupFormEle.addEventListener('submit', (e) => {

  e.preventDefault();
  if (usernameExist(usernameSignupEle.value)) { 
    failMessageEle.innerText = 'Email này đã được sử dụng.';
    failModal.show();
  } else {
    if (passwordSignupEle.value === passwordRepeatEle.value) {
      let acc = {
        'username':usernameSignupEle.value, 
        'password':passwordSignupEle.value 
      };
      account.push(acc);
      localStorage.setItem('allAccount', JSON.stringify(account));
      signupModal.hide();
      successModal.show();
      loginModal.show();
    } else {
      failMessageEle.innerText = 'Mật khẩu không khớp.';
      failModal.show();
    }
  }
  
  usernameSignupEle.value = '';
  passwordSignupEle.value = '';
  passwordRepeatEle.value = '';
  
})

//Login JS
loginFormEle.addEventListener('submit', (e) => {

  e.preventDefault();

  if (account !== null) {
    if (loginOK(usernameLoginEle.value,passwordLoginEle.value)) {
      //Successfully logged in
      user = usernameLoginEle.value.split('@')[0];
      successModal.show();
      loginModal.hide();
      loginStatus = true;
      beforeAfterLogin();
    } else {
    //Login fail
      failMessageEle.innerText = 'Nhập sai email hoặc mật khẩu.';
      failModal.show();
      loginModal.show();
    }
  } else {
    failMessageEle.innerText = 'Nhập sai email hoặc mật khẩu.';
    failModal.show();
    loginModal.show();
  }

  usernameLoginEle.value = '';
  passwordLoginEle.value = '';

});

//Logout JS
logoutConfirmEle.addEventListener('click', () => {
  loginStatus = false;
  beforeAfterLogin();
})

// Card JS
cardEle.addEventListener('click', () => {
  cardEle.classList.toggle('is-flipped');
});
// Heart JS
heartEle.addEventListener('click', () => {
  heartEle.classList.toggle('liked');
})
