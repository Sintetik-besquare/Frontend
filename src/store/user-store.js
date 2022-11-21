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
});
