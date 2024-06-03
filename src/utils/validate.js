export const formValidation = (email, password) => {

    // regex checks. It returns a boolean value
    // const isNameValid = /[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)

// If both email and password are not valid (false)
    if(!isEmailValid && !isPasswordValid){
        return {
            email: 'Please enter a valid email address or phone number.',
            password: 'Your password must contain between 8 and 60 characters.'
        }
    }
// If email is not valid (false)
    if(!isEmailValid){
        return {email: 'Please enter a valid email address or phone number.'}
    }
// If password is not valid (false)
    if(!isPasswordValid){
        return {password: "Your password must contain between 8 and 60 characters."}
    }
    // if(!isNameValid){
    //     return {userName: 'Username is not valid.'}
    // }
    return null;
}