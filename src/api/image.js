import axios from '@/axios'
export function reqGetImageList(id, page = 1) {
  return axios.get(`/admin/image_class/${id}/image/${page}`)
}
export function reqUpdateImage(id, name) {
  return axios.post(`/admin/image/${id}`, { name })
}
export function reqDeleteImage(ids) {
  return axios.post(`/admin/image/delete_all`, { ids })
}
//上传图片
export const reqUploadImageAction = '/api/admin/image/upload'
