import { get } from "./request";


export function searchPackage(search) {
    return get("/search", {package: search});
}


export function allPackage() {
    return get("/package", {package: ""});
}