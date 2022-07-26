import React from "react";
import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "ea2b68a0-62d3-4ad3-a991-50d084b8bd82" }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  // follow(userId = 1) {
  //   return instance.post(`follow/${userId}`)
  //     .then(response => {
  //       return response.data;
  //     })
  // },
  // unfollow(userId = 1) {
  //   return instance.delete(`follow/${userId}`)
  //     .then(response => {
  //       return response.data;
  //     })
  // },
  follow(userId) {
    return instance.post(`follow/${userId}`)

  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)

  },
  getProfile(userId){
    return instance.get(`profile/${userId}`)
    
  }
}
export const authAPI = {
  getLoginMe() {
    return instance.get(`auth/me`)
  }
}

