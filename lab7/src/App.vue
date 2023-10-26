<template>
  <div class="container mt-5 p-5  border border-5">
    <div class="row justify-content-center">
      <div class="col-md-6 ">
        <h2 class="text-center mb-3">Реєстрація</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-user fa-lg me-3 fa-fw"></i></span>
            <input type="text" class="form-control" v-model="user.firstName" id="firstName" placeholder="Введіть ім'я"
                   @input="clearError('firstName')">
            <div class="invalid-feedback" v-bind:class="{ 'd-block' : !firstNameIsValid}">Введіть коректно ім'я</div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-user fa-lg me-3 fa-fw"></i></span>
            <input type="text" class="form-control" id="lastName" v-model="user.lastName" placeholder="Введіть прізвище"
                   @input="clearError('lastName')">
            <div class="invalid-feedback" v-bind:class="{ 'd-block' : !lastNameIsValid}">Введіть коректно прізвище</div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-user fa-lg me-3 fa-fw"></i></span>
            <input type="text" class="form-control" id="father" v-model="user.father" placeholder="Введіть по батькові"
                   @input="clearError('father')">
            <div class="invalid-feedback" v-bind:class="{ 'd-block' : !fatherIsValid}">Введіть коректно дані</div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-user fa-lg me-3 fa-fw"></i></span>
            <div class="form-control">
              <label class="form-check-label">
                <input type="text" class="border-0 bg-transparent" name="gender"
                       value="Оберіть вашу стать: " readonly disabled>
              </label>
              <label class="form-check-label" v-for="option in genderOptions" :key="option.value">
                <input type="radio" class="form-check-input mx-2" name="gender" v-model="user.gender"
                       :value="option.value" @change="clearError('gender')">{{ option.label }}
              </label>
            </div>
            <div class="invalid-feedback" v-bind:class="{'d-block' : !genderIsValid}">Виберіть вашу стать</div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-envelope fa-lg me-3 fa-fw"></i></span>
            <input type="email" class="form-control" id="email" v-model="user.email"
                   placeholder="Введіть електронну пошту" @input="clearError('email')">
            <div class="invalid-feedback" v-bind:class="{'d-block' : !emailIsValid }">Введіть коректну електронну
              пошту
            </div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fa fa-phone fa-lg me-3 fa-fw"></i></span>
            <input type="text" class="form-control" id="phone" placeholder="+38(0__) -___-__-__"
                   v-mask="'+38(0##)###-##-##'" v-model="user.phoneNumber" @input="clearError('phoneNumber')">
            <div class="invalid-feedback" v-bind:class="{'d-block' : !phoneNumberIsValid }">Введіть коректний номер
              телефону
            </div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-lock fa-lg me-3 fa-fw"></i></span>
            <input type="password" class="form-control" id="password" v-model="user.password"
                   placeholder="Введіть пароль" @input="clearError('password')">
            <div class="invalid-feedback" v-bind:class="{'d-block' : !passwordIsValid }">Введіть коректний пароль</div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fa-regular fa-calendar-check fa-lg me-3 fa-fw"></i></span>
            <input type="date" class="form-control" id="birthday" placeholder="Введіть дату народження"
                   v-model="user.date" min="1900-01-01" max="2023-10-25" @input="clearError('date')">
            <div class="invalid-feedback" v-bind:class="{'d-block' : !dateIsValid }">Введіть коректну дату народження
            </div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fa-solid fa-list fa-lg me-3 fa-fw"></i></span>
            <select class="form-select" v-model="user.group" @input="clearError('group')">
              <option v-for="(group, index) in groups"
                      :value="group.value"
                      :key="index"
              > {{ group.label }}
              </option>
            </select>
            <div class="invalid-feedback" v-bind:class="{'d-block' : !groupIsValid }">Оберіть вашу групу</div>
          </div>
          <div class="form-group d-flex align-items-center mb-3">
            <span><i class="fas fa-download fa-lg me-3 fa-fw"></i></span>
            <input type="file" class="form-control" id="file" ref="fileInput" @change="onFileChange" multiple
                   placeholder="Оберіть декілька файлів">
            <div class="invalid-feedback">Виберіть хоча б один файл</div>
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-primary btn-block">Зареєструватися</button>
          </div>
        </form>
      </div>
    </div>
  </div>


  <p class="text-center mt-3">Маєте аккаунт? Авторизація - <a class="text-decoration-none text-success"
                                                              href="login.html">тут</a>
  </p>
  <div v-if="users.length > 0" class="table-responsive small menu">
    <table class="table" id="users">
      <thead>
      <tr>
        <th scope="col">№</th>
        <th scope="col">Ім'я</th>
        <th scope="col">Прізвище</th>
        <th scope="col">По батькові</th>
        <th scope="col">Стать</th>
        <th scope="col">E-mail</th>
        <th scope="col">Номер</th>
        <th scope="col">Пароль</th>
        <th scope="col">Дата народження</th>
        <th scope="col">Група</th>
        <th scope="col">Оберіть користувача(ів)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user">
        <td>{{ user.num }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.father }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phoneNumber }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.date }}</td>
        <td>{{ user.group }}</td>
        <td><input type="checkbox" v-model="user.check"></td>

      </tr>
      </tbody>

    </table>
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-center">
          <button type="submit" @click="del" class="btn btn-primary btn-block mx-2">Видалити</button>
          <button type="submit" @click="copy" class="btn btn-primary btn-block">Продублювати</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
@import '~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import {mask} from 'vue-the-mask'

export default {
  directives: {mask},
  data() {
    return {

      groups: [
        {
          label: "Оберіть вашу групу",
          value: "1"
        },
        {
          label: "ІА-21",
          value: "IA-21"
        },
        {
          label: "ІА-22",
          value: "IA-22"
        },
        {
          label: "ІА-23",
          value: "IA-23"
        },
        {
          label: "ІА-24",
          value: "IA-24"
        },
      ],
      genderOptions: [
        {value: 'male', label: 'Чоловік'},
        {value: 'female', label: 'Жінка'},
        {value: 'other', label: 'Інше'},
      ],

      firstNameIsValid: true,
      lastNameIsValid: true,
      fatherIsValid: true,
      genderIsValid: true,
      emailIsValid: true,
      phoneNumberIsValid: true,
      passwordIsValid: true,
      groupIsValid: true,
      dateIsValid: true,


      user: {
        firstName: '',
        lastName: '',
        father: '',
        group: '1',
        gender: '',
        email: '',
        phoneNumber: '',
        password: '',
        date: '',
        file: [],
        check: false,
        num: 0,
      },
      users: [],
      n: 1,
    };
  },

  methods: {
    submitForm() {
      this.firstNameIsValid = this.validateName(this.user.firstName);
      this.lastNameIsValid = this.validateName(this.user.lastName);
      this.fatherIsValid = this.validateName(this.user.father);
      this.genderIsValid = this.validateGender(this.user.gender);
      this.emailIsValid = this.validateEmail(this.user.email);
      this.phoneNumberIsValid = this.validatePhone();
      this.passwordIsValid = this.validatePassword(this.user.password);
      this.groupIsValid = this.validateGroup(this.user.group);
      this.dateIsValid = this.validateDate(this.user.date);


      if (this.firstNameIsValid && this.lastNameIsValid && this.fatherIsValid && this.genderIsValid && this.emailIsValid && this.phoneNumberIsValid && this.passwordIsValid && this.groupIsValid && this.dateIsValid) {
        this.user.num = this.n++;
        this.users.push(Object.assign({}, this.user));

        // alert("Форма пройшла валідацію");
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.father = '';
        this.user.email = '';
        this.user.gender = '';
        this.user.phoneNumber = '';
        this.user.password = '';
        this.user.date = '';
        this.user.group = '1';
        this.user.file = '';
      }
    },
    validateName(name) {
      if (name.trim() === '' || /\d/.test(name)) {
        return false;
      } else {
        return true;
      }
    },
    validateGender(gen) {
      if (gen.trim() === '') {
        return false;
      } else {
        return true;
      }
    },
    validateEmail(mail) {
      let emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (emailPattern.test(mail)) {
        return true;
      } else
        return false;
    },
    validatePhone() {
      if (this.user.phoneNumber.length === 17) {
        return true;
      } else {
        return false;
      }
    },
    validatePassword(password) {
      if (password.trim() === '' || password.length < 8) {
        return false;
      } else {
        return true;
      }
    },
    validateGroup(group) {
      if (group.trim() === '1') {
        return false;
      } else {
        return true;
      }
    },
    validateDate(date) {
      if (date.trim() === "") {
        return false;
      } else {
        return true;
      }
    },
    clearError(fieldName) {
      // Метод для приховання помилок при виправленні полів
      this[fieldName + "IsValid"] = true;
    },

    onFileChange() {
      const fileInput = this.$refs.fileInput;
      const files = fileInput.files;

      if (files.length > 0) {
        // Зберігаємо перший вибраний файл в властивості 'file' об'єкта 'user'
        this.user.file = files;
      }
    },
    del() {
      this.users = this.users.filter(user => !user.check)
    },
    copy() {
      this.users.forEach(user => {
        if (user.check) {
          user.check = false
          let newUser = Object.assign({}, user)
          newUser.num = this.n++
          this.users.push(newUser)
        }
      })
    }
  },

};
</script>