import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useCrud = () => {

  const [response, setResponse] = useState()
  const baseUrl = 'https://booking-app-api-zckc.onrender.com'

  //GED
  const getApi = (path) => {
    const url = `${baseUrl}${path}`
    axios.get(url, getConfigToken())
      .then(res => setResponse(res.data))
      .catch(err => {
        if (err.response.status === 403) {
          console.log(err)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      })
  }

  //POST
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}`
    axios.post(url, data, getConfigToken())
      .then(res => setResponse(res.data))
      .catch(err => {
        if (err.response.status === 403) {
          console.log(err)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      })
  }

  //DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}`
    axios.delete(url, getConfigToken())
      .then(res => {
        setResponse(response.filter(elem => elem.id !== id))
      })
      .catch(err => {
        if (err.response.status === 403) {
          console.log(err)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      })
  }

  //UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}`
    axios.patch(url, data, getConfigToken())
      .then(res => console.log(res.data))
      .catch(err => {
        if (err.response.status === 403) {
          console.log(err)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      })
  }

  return [response, getApi, postApi, deleteApi, updateApi]

}

export default useCrud