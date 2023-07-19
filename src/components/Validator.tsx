export const emailValidator=(emailid)=>{
    const emailValid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailValid.test(emailid)
}

export const passwordValidator=(password)=>{
    const passwordValid= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return passwordValid.test(password)
}
export const phoneValidator=(phone)=>{
    const phoneValid= /^\d{10}$/;
    return phoneValid.test(phone)
}
export const confirmPassword=(confirmPassword,password)=>{




    let password_match=false;

    if(confirmPassword===password){

        password_match=true;

    }

    return password_match;

}
export const mobileValidator=(mobile)=>{

    const phoneValid= /^\d{10}$/;

    return phoneValid.test(mobile)


}
export const nameValidator=(name)=>{

    const userValid=/^[A-Za-z]+$/;

    return userValid.test(name);

}