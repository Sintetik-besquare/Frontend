import { observable, action, decorate } from "mobx";

export default class UserStore {
  first_name = " ";
  last_name = " ";
  age = " ";
  gender = [];
  country = [];
  education = [];
  occupation = [];

  setFirstName(first_name) {
    this.first_name = first_name;
  }

  setLastName(last_name) {
    this.last_name = last_name;
  }

  setAge(age) {
    this.age = age;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setCountry(country) {
    this.country = country;
  }

  setEducation(education) {
    this.education = education;
  }

  setOccupation(occupation) {
    this.occupation = occupation;
  }
}
decorate(UserStore, {
  first_name: observable,
  last_name: observable,
  age: observable,
  gender: observable,
  country: observable,
  education: observable,
  occupation: observable,
});
