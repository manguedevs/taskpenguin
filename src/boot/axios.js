import Vue from 'vue'
import auth from '../auth';
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(auth);