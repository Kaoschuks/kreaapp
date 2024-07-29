import { AbstractControl, ValidatorFn } from "@angular/forms";

export const confirmPassword = (form: AbstractControl) => {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('rpassword')?.value;
  
    if (password && confirmPassword && confirmPassword !== password) {
      return { mismatch: true };
    }
  
    return null;
  };


export function emailValidator(): ValidatorFn {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = emailRegex.test(control.value);
      return valid ? null : { 'invalidEmail': { value: control.value } };
    };
  }


  export const convertFileToBase64String = (file: File): Promise<{type: string, data: string | ArrayBuffer | null}> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const response = {
        type: file.type,
        data: ''
      };
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        response.data = reader.result as string;
        resolve(response);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };
    
export const getCSSVariableValue = (variableName: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}