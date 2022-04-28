import axios from "axios"

export default class UserService {
  static getUsers() {
    let dataURL = 'https://jsonplaceholder.typicode.com/users'
    return axios.get(dataURL)
  }
}