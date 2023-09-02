// Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 

export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;