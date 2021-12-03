const VARIABLE_SYMBOLE = "%d%";
const messages:any= {
  required: "وارد کردن این فیلد اجباری است",
  email: "پست الکترونیکی وارد شده معتبر نمی باشد",
  minPassword: `کلمه عبور باید حداقل ${VARIABLE_SYMBOLE} کاراکتر داشته باشد`,
  username: "نام کاربری وارد شده معتبر نمی باشد"
} 

const ErrorMessages = function (key:string) {
  let counter = 1
  if (!messages.hasOwnProperty(key)) {
    return ""
  }
  if (arguments.length === 1) {
    return messages[key]
  }
  let output = messages[key]
  while (output.indexOf("%d%") !== -1) {
    output = output.replace(/%d%/, arguments[counter++])
  }
  return output
}

export default ErrorMessages
