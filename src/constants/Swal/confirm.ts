import Swal from "sweetalert2";

const Toast = Swal.mixin({
  showCancelButton: true, 
  confirmButtonColor: '#3085d6', 
  cancelButtonColor: '#d33', 
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  reverseButtons: true, 

});

export const ConfirmToast = (icon, title, text, confirmIcon, confirmTitle, confirmText) => {
  Toast.fire({
    icon,
    title,
    text,
  }).then(result =>{
    if(result.isConfirmed){
      Swal.fire(confirmIcon, confirmTitle, confirmText);
      return true
    }
  })
};
