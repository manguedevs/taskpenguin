import axios from "axios";
import {API_URL, handleRequest} from '../utils';

export class PersonAPI {
  constructor() {}

  async create(person) {
    const url = `${API_URL}/person`;
    let res = await handleRequest(axios.post(url, person));
    return res.data;
  } 

  async getById(id) {
    const url = `${API_URL}/person/${id}`;
    let res = await handleRequest(axios.get(url, { crossDomain: true }));
    return res.data;
  }

  async getByEmail(email) {
    const url = `${API_URL}/person/email/${email}`;
    let res = await handleRequest(axios.get(url, { crossDomain: true }));
    return res.data;
  }

}
