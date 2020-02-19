import axios from "axios";
import { API_URL, handleRequest } from '../utils';

export class BillAPI {
  constructor() {}

  async get() {
    const url = `${API_URL}/bill`;
    let res = await handleRequest(axios.get(url, { crossDomain: true }))
    return res.data;
  }

  async getByUserId(id) {
    const url = `${API_URL}/bill/${id}`;
    let res = await handleRequest(axios.get(url, { crossDomain: true }))
    return res.data;
  }
  
}
