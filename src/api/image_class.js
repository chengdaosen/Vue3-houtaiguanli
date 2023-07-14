import axios from '@/axios'
export function reqGetImageClassList(page) {
  return axios.get('/admin/image_class/' + page)
}
export function reqCreateImageClass(data) {
  return axios.post('/admin/image_class', data)
}
export function reqUpdateImageClass(id, data) {
  return axios.post('/admin/image_class/' + id, data)
}
export function reqDeleteImageClass(id) {
  return axios.post(`/admin/image_class/${id}/delete`)
}
