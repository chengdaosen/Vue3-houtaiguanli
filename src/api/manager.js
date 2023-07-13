import axios from '@/axios'

export function reqLogin(username, password) {
  return axios.post('/admin/login', {
    username,
    password,
  })
}

export function reqGetInfo() {
  return axios.post('/admin/getinfo')
}

export function reqLogout() {
  return axios.post('/admin/logout')
}

export function reqUpdatePassword(data) {
  return axios.post('/admin/updatepassword', data)
}
