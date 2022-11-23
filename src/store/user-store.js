<<<<<<< HEAD
import { observable, action, decorate } from "mobx";

export default class UserStore {
  user_detail = [];
  first_name = " ";
  last_name = " ";
  age = " ";
  gender = " ";
  country = " ";
  education = " ";
  occupation = " ";

  setFirstName(first_name) {
    this.first_name = first_name;
  }

  setLastName(last_name) {
    this.last_name = last_name;
  }
=======
import { observable, decorate, action } from "mobx";

export default class UserStore {
  age = '';
  client_id = '';
  date_join = ''
  education = '';
  email = '';
  first_name = '';
  gender = '';
  last_name = '';
  occupation = '';
  residence = '';
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275

  setAge(age) {
    this.age = age;
  }

<<<<<<< HEAD
  setGender(gender) {
    this.gender = gender;
  }

  setCountry(country) {
    this.country = country;
=======
  setId(id) {
    this.id = id;
  }

  setDateJoin(date) {
    this.date = date;
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
  }

  setEducation(education) {
    this.education = education;
  }

<<<<<<< HEAD
  setOccupation(occupation) {
    this.occupation = occupation;
  }

  updateUserDetail(stream) {
    // console.log(stream);
    this.user_detail = { ...stream };
  }
}
decorate(UserStore, {
  user_detail: observable,
  first_name: observable,
  last_name: observable,
  age: observable,
  gender: observable,
  country: observable,
  education: observable,
  occupation: observable,
  setFirstName: action,
  setLastName: action,
  setAge: action,
  setGender: action,
  setCountry: action,
  setEducation: action,
  setOccupation: action,
  updateUserDetail: action,
=======
  setEmail(email) {
    this.email = email;
  }

  setFirstName(firstName) {
    this.first_name = firstName;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setLastName(lastName) {
    this.last_name = lastName;
  }
  setOccupation(occupation) {
    this.occupation = occupation;
  }
  setResidence(residence) {
    this.residence = residence;
  }
}

decorate(UserStore, {
  age: observable,
  client_id: observable,
  date_join: observable,
  educatio: observable,
  email: observable,
  first_name: observable,
  gender: observable,
  occupatio: observable,
  last_nam: observable,
  residence: observable,
  setAge: action,
  setId: action,
  setDateJoin: action,
  setEducation: action,
  setEmail: action,
  setFirstName: action,
  setGender: action,
  setLastName: action,
  setOccupation: action,
  setResidence: action,
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
});
