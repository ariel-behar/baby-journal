// Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter and one number
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; 

export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;