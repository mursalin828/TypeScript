interface APIResponse<T> {
    status: number;
    data: T;
}

let textRespone: APIResponse<string> = {
    status: 101,
    data: "Success"
}

console.log(textRespone);