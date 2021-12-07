import http from "./httpServices";

export default function getContacts() {
    return http.get("/contacts");
}