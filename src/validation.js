const Validations = (datas) => {
    let errors ={};

    if(!datas.fullname){
        errors.fullname="Name is Required.";
    }
    if(!datas.email){
        errors.email="Email is Required.";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,}$/i.test(datas.email)){
        errors.email="Email address is invalid.";
    }
    if(!datas.password){
        errors.password="Password is required.";
    }
    else if(datas.password.length<7){
        datas.password="Password need to be atlist 6 characters.";
    }
    if(!datas.phone){
        errors.phone="Number is required.";
    }
    return errors;
};
export default Validations;