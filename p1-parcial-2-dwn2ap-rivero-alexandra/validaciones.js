       //Crear parrafos para mensaje de error
       let errorMessage= document.createElement("p");
       errorMessage.classList.add("errorMessage");

       //Validacion de usuario
       function userValidation(){
   
           let username= document.getElementById("user").value;
           let userError=document.getElementById("userDiv");
           
           //regex de caracteres especiales
           let regex1 = /[!@#$%^&*():;<>,.?~|=-]/;
           //regex de numeros
           let regex2=/\d/;
           

           //validacion vacio
           if(username===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            userError.appendChild(errorMessage);
            //validacion1 caracteres
           }else if(!regex1.test(username)){
               errorMessage.textContent="Debe contener al menos 1 caracter especial entre: !@#$%^&*():;<>,.?~|=-";
               userError.appendChild(errorMessage);
           //validación2 numeros
           }else if (!regex2.test(username)){
               errorMessage.textContent="Debe contener al menos 1 número.";
               userError.appendChild(errorMessage);
           }else{
               user.classList.add("validation");
               errorMessage.textContent="";
           }
       }

       //validación de mail
       function mailValidation(){

           let email=document.getElementById("mail").value;
           let mailError=document.getElementById("mailDiv");
           let mailDomain=["gmail.com","hotmail.com","outlook.com"];
           
           //verificar que el dominio pertenezca
           const [ ,domain]=email.split("@");

           let validDomain=false;
           mailDomain.forEach(validDomains => {
               if(domain===validDomains){
                   validDomain=true
               }
           });
           
           //validacion vacio
           if(email===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            mailError.appendChild(errorMessage);
           //validación1 incluye @
           } else if(!email.includes("@")){
               errorMessage.textContent="Ingrese un mail válido.";
               mailError.appendChild(errorMessage);
           //validacion2 dominio valido
           }else if(!validDomain){
               errorMessage.textContent="Ingrese con un correo gmail.com, hotmail.com u outlook.com."
               mailError.appendChild(errorMessage);
           }else{
               mail.classList.add("validation");
               errorMessage.textContent="";
           }
       }
       
       //validación de contraseña
       function passwordValidation(){

           let user_password=document.getElementById("userPassword").value;
           let userCharacters=user_password.length;
           let passwordError=document.getElementById("passwordDiv");

           let confirmPassword=document.getElementById("confirm_password").value;
           let confirmPasswordError=document.getElementById("confirmDiv");
           //Regex de mayusculas
           let regex3=/[A-Z]/;

           
           //validacion vacio
           if(user_password===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            passwordError.appendChild(errorMessage);
           //validacion1 que tenga minimo 4 digitos
           }else if (userCharacters<4){
               errorMessage.textContent="La contraseña debe contener 4 caracteres como mínimo.";
               passwordError.appendChild(errorMessage); 
           //validacion1 que tenga al menos una mayuscula
           }else if (!regex3.test(user_password)){
               errorMessage.textContent="La contraseña debe contener al menos 1 letra mayúscula.";
               passwordError.appendChild(errorMessage);
           //validacion2 que la contraseña no tenga espacios
           }else if (user_password.includes(" ")){
               errorMessage.textContent="La contraseña no debe tener espacios en blanco.";
               passwordError.appendChild(errorMessage);
           //validacion3 que las contraseñas coincidan
           }else if (confirmPassword !==user_password){
               errorMessage.textContent="Las contraseñas no coinciden."
               confirmPasswordError.appendChild(errorMessage);
           }else{
               userPassword.classList.add("validation");
               confirm_password.classList.add("validation");
               errorMessage.textContent="";
           }
       }

       //validacion de calle
       function streetValidation(){
           let userStreet=document.getElementById("street").value;
           let streetError=document.getElementById("streetDiv");

           //Regex de caracteres especiales
           let regex1 = /[!@#$%^&*():;<>,.?~|=-]/;

           //validacion vacio
           if(userStreet===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            streetError.appendChild(errorMessage);
           //validacion1 que el campo no este vacio
           }else if (userStreet===""){
               errorMessage.textContent="El campo no puede estar vacío.";
               streetError.appendChild(errorMessage);
           } else if(regex1.test(userStreet)){
               errorMessage.textContent="Ingrese una calle válida."
               streetError.appendChild(errorMessage);
           //validacion2 que la calle no tenga caracteres especiales
           }else{
               street.classList.add("validation");
               errorMessage.textContent="";
           }
       }

       //validacion de altura
       function streetNumberValidation(){
           let userStreetNumber=document.getElementById("street_number").value;
           let streetNumberError=document.getElementById("streetNumberDiv");
           let streetNumberCharacters=userStreetNumber.length;
           
           //validacion vacio
           if(userStreetNumber===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            streetNumberError.appendChild(errorMessage);
           //Validacion1 máximo 7 caracteres 
           }else if (streetNumberCharacters>7){
               errorMessage.textContent="Ingrese una altura válida.";
               streetNumberError.appendChild(errorMessage);
           //Validacion2 no puede tener numeros negativos
           } else if (userStreetNumber<0){
               errorMessage.textContent="La altura no puede ser negativa, ingrese una altura válida.";
               streetNumberError.appendChild(errorMessage);
           }else{
               street_number.classList.add("validation");
               errorMessage.textContent="";
           }
       }
       
       //validacion de codigo postal
       function postalCodeValidation(){
           let postalCode=document.getElementById("postal_code").value;
           let postalCodeError=document.getElementById("postalCodeDiv");
           let postalCodeDigits=postalCode.length;

           //validacion vacio
           if(postalCode===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            postalCodeError.appendChild(errorMessage);
           //Validacion 1 que tenga 4 digitos
           }else if (postalCodeDigits !== 4){
               errorMessage.textContent="El código postal debe tener 4 dígitos";
               postalCodeError.appendChild(errorMessage);
           //validacion2 que sea un codigo postal valido
           } else if (postalCode<1001 || postalCode>9999){
               errorMessage.textContent="El código postal es inválido, ingrese un número válido";
               postalCodeError.appendChild(errorMessage);
           }else {
               postal_code.classList.add("validation");
               errorMessage.textContent="";
           }
       }

       //validacion de nombre
       function nameValidation(){
           let name_user=document.getElementById("nameUser").value;
           let nameError=document.getElementById("nameDiv");
           let nameCharacters=name_user.length;
           //regex para no repetir letras
           let regex4=/([a-zA-Z])\1{2,}/;
           //regex de numeros
           let regex2=/\d/;

           //validacion vacio
           if(name_user===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            nameError.appendChild(errorMessage);
           //validacion1 que el nombre tenga más de dos caracteres 
           }else if(nameCharacters<3){
               errorMessage.textContent="Ingrese un nombre válido.";
               nameError.appendChild(errorMessage);
           //validacion2 que no contenga numeros
           }else if(regex2.test(name_user)){
               errorMessage.textContent="Nombre inválido. Ingrese un nombre válido.";
               nameError.appendChild(errorMessage);
           //que no se repitan letras
           }else if (regex4.test(name_user)){
               errorMessage.textContent="Ingrese un nombre válido, no repitas más de 2 letras.";
               nameError.appendChild(errorMessage);
           }else{
               nameUser.classList.add("validation");
               errorMessage.textContent=""
           }
       }

       //validacion de apellido
       function lastNameValidation(){
           let lastName=document.getElementById("last_name").value;
           let lastNameError=document.getElementById("lastNameDiv");
           let lastNameCharacters=lastName.length;
           
           //regex de numeros
           let regex2=/\d/;
           
           //validacion vacio
           if(lastName===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            lastNameError.appendChild(errorMessage);
            //validacion2 que no contenga numeros
           }else if(regex2.test(lastName)){
            errorMessage.textContent="Apellido inválido. Ingrese un apellido válido.";
            lastNameError.appendChild(errorMessage);
           //validacion1 no puede quedar vacio
           }else if(lastName===""){
               errorMessage.textContent="Este campo no puede quedar vacio";
               lastNameError.appendChild(errorMessage);
           //validacion2 que el apellido tenga más de 2 letras 
           } else if(lastNameCharacters<2){
               errorMessage.textContent="Ingrese un apellido válido";
               lastNameError.appendChild(errorMessage);
           }else{
               last_name.classList.add("validation");
               errorMessage.textContent="";
           }
       }
       
       //validacion de dni
       function dniValidation(){
           let userDni=document.getElementById("dni").value;
           let userDniError=document.getElementById("dniDiv");
           let dniDigits=userDni.length; 

           //validacion vacio
           if(userDni===""){
            errorMessage.textContent="Este campo no puede quedar vacio";
            userDniError.appendChild(errorMessage);
           //validacion1 que no sea menor a 800mil
           }else if(userDni<800000){
               errorMessage.textContent="Dato erróneo, ingrese un DNI válido.";
               userDniError.appendChild(errorMessage);
           //validacion2 que no tenga mas de 10 digitos
           } else if (dniDigits>10){
               errorMessage.textContent="Ingrese un DNI válido.";
               userDniError.appendChild(errorMessage);
           } else{
               dni.classList.add("validation");
               errorMessage.textContent="";
           }
       }
       //validacion de fecha de nacimiento
       function birthDateValidation(){
       let birthDate = document.getElementById("birth_date").value;
       let birthError = document.getElementById("birthDiv");

       // Calcula la edad en base a la fecha de nacimiento
       let today = new Date();
       let birthDateObj = new Date(birthDate);
       let age = today.getFullYear() - birthDateObj.getFullYear();
       let monthDiff = today.getMonth() - birthDateObj.getMonth();

       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
           age--;
       }

       // Validacion1 La persona debe tener al menos 18 años
       if (age < 18) {
           errorMessage.textContent = "Debes ser mayor de 18 años para registrarte.";
           birthError.appendChild(errorMessage);
       }else if(birthDate===""){
        errorMessage.textContent="Este campo no puede quedar vacio";
        birthError.appendChild(errorMessage);
       // Validacion2 La persona no puede ser mayor de 120 años
       }else if (age > 120) {
           errorMessage.textContent = "La edad máxima permitida es 120 años.";
           birthError.appendChild(errorMessage);
       } else {
           birth_date.classList.add("validation");
           errorMessage.textContent = "";
           }
       }

       function checkboxValidation() {
       let checkbox = document.getElementById("validationFormCheck1");
       let checkboxFeedback = document.getElementById("validationFormCheck1");

       if (checkbox.checked) {
           checkbox.classList.remove("is-invalid")
           checkbox.classList.add("is-valid");
           errorMessage.textContent = '';
       } else {
           checkbox.classList.remove("is-valid");
           checkbox.classList.add("is-invalid");
           errorMessage.textContent = 'Debes aceptar para enviar';
       }
   }
        //Mensaje pop
        function like(){
            Toastify({
                text: "No me repruebe profe :c",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right,  #f0b9d5,#0d0419)",
                 }
                }).showToast();
        }

        //json
        function saveInfo(){ 
   
        document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); 


        let username= document.getElementById("user").value;
        let email=document.getElementById("mail").value;
        let user_password=document.getElementById("userPassword").value;
        let userStreet=document.getElementById("street").value;
        let userStreetNumber=document.getElementById("street_number").value; 
        let postalCode=document.getElementById("postal_code").value;
        let name_user=document.getElementById("nameUser").value;
        let lastName=document.getElementById("last_name").value;
        let userDni=document.getElementById("dni").value;
        let birthDate = document.getElementById("birth_date").value;

        //objeto para almacenar la información
        const formData = {
            "usuario": username,
            "correo": email,
            "contraseña": user_password,
            "calle": userStreet,
            "altura": userStreetNumber,
            "codigo": postalCode,
            "nomnbre": name_user,
            "apellido": lastName,
            "dni": userDni,
            "cumpleaños": birthDate,
        };

        // Convertir el objeto en una cadena JSON
        let formDataJSON = JSON.stringify(formData);
        localStorage.setItem("formData", formDataJSON);

        console.log(formData);

        // Guardar los datos en el almacenamiento local del navegador
        localStorage.setItem("formData", formDataJSON);

        // mensaje sweet alert
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Desea guardar sus datos?",
            text: "Esta acción completa el registro!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Regístrame!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Vamos!",
                text: "Tus datos han sido guardados.",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Oh no!",
                text: "El registro se ha cancelado",
                icon: "error"
              });
            }
          });
            })}
