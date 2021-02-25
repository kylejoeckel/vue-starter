import api from "../api";

export function temp() {
  return api.get(`/`);
}