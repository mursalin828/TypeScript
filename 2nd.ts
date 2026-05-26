interface User {
    username: string;
    roll: number;
    isClassRe: boolean;
    phoneNumber?: number;
}

let currentUser: User = {
    username: "Mursalin",
    roll: 96,
    isClassRe: true,
    phoneNumber: 12344899
};

console.log(currentUser);