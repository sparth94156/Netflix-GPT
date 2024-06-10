export const formValidation = (email, password) => {

    // const isNameValid = /[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)

    if(!isEmailValid && !isPasswordValid){
        return {
            email: 'Please enter a valid email address or phone number.',
            password: 'Your password must contain between 8 and 50 characters.'
        }
    }
    if(!isEmailValid){
        return {email: 'Please enter a valid email address or phone number.'}
    }
    if(!isPasswordValid){
        return {password: "Your password must contain between 8 and 60 characters."}
    }
    return {};
}