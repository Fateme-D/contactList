import http from "./httpServices";

export default function deleteContact(id) {
    return http.delete(`/contacts/${id}`);
}