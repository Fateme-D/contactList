import http from "./httpServices";

export default function addContact(data) {
    return http.post(`/contacts`, data);
}