import axios from '@/axios'
export function reqGetImageClassList(page) {
  return axios.get('/admin/image_class/' + page)
}
