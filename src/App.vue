<template>
  <div id="page-wrap">
    <div class="center-cont">
      <div class="image-cover">
        <div :class="{'splash-cont': true, 'show': splash}">
          <div class="surtext">I Dream of</div>
          <div class="subtext">RyuKyu</div>
        </div>
        <div :class="{'splash-cont': true, 'show': !splash}">
          <div class="signup-toggle-cont">
            <div class="toggle-btn login-btn" 
                 :class="{'shrink':signup,'highlight':login}" 
                 @click="toggleLogin()">Log In</div>
            <div class="form-cont login-form" :class="{'show':login}">
              <label :class="{'has-error':usernameLabelClass}">
                {{usernameLabel}}
                <div>
                  <input type="text" v-model="username"/>
                  <span class="error">{{ usernameError }}</span>
                </div>
              </label>
              <label :class="{'has-error':passwordLabelClass}">
                {{passwordLabel}}
                <div>
                  <input type="password" v-model="password"/>
                  <span class="error">{{ passwordError }}</span>
                </div>
              </label>
            </div>
            <div class="toggle-btn signup-btn" 
                 :class="{'shrink':login,'highlight':signup}"
                 @click="toggleSignup()">Sign Up</div>
            <div class="form-cont signup-form" :class="{'show':signup}">
              <div class="form-column">
                <label :class="{'has-error':usernameLabelClass}">
                  {{usernameLabel}}
                  <div>
                    <input type="text" v-model="username"/>
                    <span class="error">{{ usernameError }}</span>
                  </div>
                </label>
                <label :class="{'has-error':emailLabelClass}">
                  {{emailLabel}}
                  <div>
                    <input type="email" v-model="email"/>
                    <span class="error">{{ emailError }}</span>
                  </div>
                </label>
              </div>
              <div class="form-column">
                <label :class="{'has-error':passwordLabelClass}">
                  {{passwordLabel}}
                  <div>
                    <input type="password" v-model="password"/>
                    <span class="error">{{ passwordError }}</span>
                  </div>
                </label>
                <label :class="{'has-error':rpasswordLabelClass}">
                  {{rpasswordLabel}}
                  <div>
                    <input type="password" v-model="rpassword"/>
                    <span class="error">{{ rpasswordError }}</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="submit-btn" 
               :class="{'show':signup || login}"
               @click="submit()">
            submit
          </div>
        </div>
      </div>
    </div>
    <div class="idork-btn"
         :class="{'hide':!splash}"
         @click="toggleSplash()">
      enter
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      splash: true,
      login: false,
      signup: false,
      username: '',
      email: '',
      password: '',
      rpassword: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      rpasswordError: ''
    } 
  },
  computed: {
    usernameLabel() {
      return 'username'
    },
    usernameLabelClass() {
      return this.usernameError.length > 0
    },
    emailLabel() {
      return 'email'
    },
    emailLabelClass() {
      return this.emailError.length > 0
    },
    passwordLabel() {
      return 'password'
    },
    passwordLabelClass() {
      return this.passwordError.length > 0
    },
    rpasswordLabel() {
      return 'repeat password'
    },
    rpasswordLabelClass() {
      return this.rpasswordError.length > 0
    } },

  methods: {
    toggleSplash() {
      this.clearValidation()
      this.splash = !this.splash
    },
    toggleSignup() {
      this.clearValidation()
      this.signup = !this.signup
    },
    toggleLogin() {
      this.clearValidation()
      this.login = !this.login
    },
    clearValidation() {
      this.usernameError = ''
      this.emailError = ''
      this.passwordError = ''
      this.rpasswordError = ''
    },
    validate() {
      this.clearValidation()

      if (this.signup) {
        if (this.username.length === 0) {
          this.usernameError = 'Please input a username'
          return
        }
        if (this.password.length === 0) {
          this.passwordError = 'Please input a password'
          return
        }
        let regex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+"

        if (this.email.length === 0) {
          this.emailError = 'Please enter your email'
          return
        }
        if (regex.test(this.email)) {
          this.emailError = 'Please enter a valid email'
          return
        }
        if (this.password !== this.rpassword) {
          this.rpasswordError = 'Passwords do not match'
          return
        }
      } else {

        if (this.username.length === 0) {
          this.usernameError = 'Please input your username'
          return
        }
        if (this.password.length === 0) {
          this.passwordError = 'Please input your password'
          return
        }
      }

      return this.usernameError.length + this.emailError.length + this.passwordError.length + this.rpasswordError.length === 0
    },
    submit() {
      this.validate()

      // nothing here yet ~
    } 
  } 
}
</script>
<style lang="scss">
  html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#page-wrap {
  font-family: monospace;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1F1F1F;
  background-image: url("https://cdn.glitch.com/7f0ff9b8-7bbb-474d-8078-5b7f262e5ed3%2Fstardust.png?1558924100374");
  .center-cont {
    border-radius: 3px;
    width: 33%;
    min-width: 400px;
    height: 200px;
    border: 3px solid white;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://cdn.glitch.com/7f0ff9b8-7bbb-474d-8078-5b7f262e5ed3%2Fsloccc.gif?1558924106590");
  
    .image-cover {
      width: 100%;
      height: 100%;
      background-color: rgba(240, 90, 127, 0.5);
      position: relative;
      .splash-cont {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: 350ms ease;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #303030;

        &.show {
          opacity: 1;
          visibility: visible;
        }
        .surtext {
          font-family: 'Sarina', cursive;
          font-size: 30px;
          font-weight: 600;
          text-align: center;
          text-shadow: 0 1px white;
        }
        .subtext {
          font-family: 'Sarina', cursive;
          font-size: 50px;
          font-weight: 600;
          text-shadow: 0 1px white;
        }
        .signup-toggle-cont {
          .login-btn,
          .signup-btn {
            transition: 350ms ease;
            text-align: center;
            padding-bottom: 0;
            cursor: pointer;
            max-width: 80px;
            width: 100%;
            margin: 0 auto;
            color: #f1f1f1;
            border: 1px solid #f1f1f1;
            padding: 10px 20px;
          }
          .login-btn.hide,
          .signup-btn.hide {
            opacity: 0;
            padding: 0;
            margin-bottom: 0;
            border: none;
            visibility: hidden;
          }
          .login-btn.shrink,
          .signup-btn.shrink {
            height: 0;
            opacity: 0;
            padding: 0;
            margin-bottom: 0;
            border: none;
            visibility: hidden;
          }
          .login-btn.highlight,
          .signup-btn.highlight {
            margin-bottom: 0;
            border-color: transparent;
            color: #f1f1f1;
          }
          .signup-btn {
            margin-top: 10px;
          }
          .form-cont {
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: 350ms ease;
            max-height: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            &.show {
              opacity: 1;
              visibility: visible;
              max-height: 300px;
            }
            label {
              display: block;
              color: #f1f1f1;
              display:flex;
              input {
                  margin-bottom: 5px;
              }
              &.has-error {
                
                .error {
                  display: block;
                  width: 141px;
                  margin-bottom: 5px;
                  
                }
              }
            }
            &.login-form {

              label {
                margin-top: 10px;
                display: flex;
                justify-content: center;
                > div {
                  margin-left: 5px;
                }
              }
            }
            &.signup-form {
              display: flex;
              flex-direction: row;
              padding-bottom: 5px;
            
              .form-column {
                padding: 0 5px;
                width: 50%;
                input {
                  display: block;
                }
                label {
                  color: #f1f1f1;
                  display: block;
                }
              }
            }
          }
        }
        .submit-btn {
          margin-top: 0;
          opacity: 0;
          visibility: hidden;
          transition: 350ms ease;
          cursor: pointer;
          color: #f1f1f1;
          max-height: 0;
        }
        .submit-btn.show {
          margin-top: 5px;
          opacity: 1;
          visibility: visible;
          max-height: 50px;
        }
      }
    }
  }
  .idork-btn {
    cursor: pointer;
    margin-top: 10px;
    padding: 10px;
    color: #f05a7f;
    border-radius: 5px;
    background-color: #f0f0f0;
    opacity: 1;
    visibility: visible;
    transition: 350ms ease;
    &.hide {
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>