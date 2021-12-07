import http from "./httpServices";

export default function addOneContact(data) {
    return http.post(`/contacts`, data);
}