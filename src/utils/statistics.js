import { get } from "./request"


export function getTrendData() {
    return get("/stat/trend")
}


export function getAllCount() {
    return get("/stat/all_count")
}


export function totalPackageCount() {
    return get("/stat/package_count")
}


export function totalFileCount() {
    return get("/stat/file_count")
}


export function totalDownloadUserCount() {
    return get("/stat/download_user_count")
}


export function totalDownloadCount() {
    return get("/stat/download_total_count")
}


export function saveTimeHour() {
    return get("/stat/save_time_hour")
}
