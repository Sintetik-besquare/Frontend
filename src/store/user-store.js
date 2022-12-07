import { observable, decorate, action } from "mobx";

export default class UserStore {
  age = "";
  client_id = "";
  date_join = "";
  education = "";
  email = "";
  first_name = "";
  last_name = "";
  gender = "";
  occupation = "";
  residence = "";

  setAge(age) {
    this.age = age;
  }

  setId(id) {
    this.client_id = id;
  }

  setDateJoin(date) {
    this.date_join = date;
  }

  setEducation(education) {
    this.education = education;
  }

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
  education: observable,
  email: observable,
  first_name: observable,
  gender: observable,
  occupation: observable,
  last_name: observable,
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
});
