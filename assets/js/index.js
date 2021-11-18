

window.onload =    ()=>{
    singup();
$('.toast').toast('show'); 


}


const singup = ()=>{
   
  const form =  document.querySelector("#signup");

  form.onsubmit = (e)=>{
      e.preventDefault();

      const ajax = new XMLHttpRequest();


      const formdata  = JSON.stringify({
          name : document.querySelector('#name').value,
          email : document.querySelector('#email').value,
          mobile : document.querySelector('#mobile').value,
          password : document.querySelector('#password').value
      });



      ajax.open('POST','http://localhost:8080/api/singup',true);

      ajax.send(formdata);

      
      $(".loader").removeClass('d-none');
      
      ajax.onload = ()=>{
          
          $(".loader").addClass('d-none');


          const response =  JSON.parse(ajax.response); 
          $('.toast').removeClass('d-none');

          if(response.status != 200){

                $("#massage").html('Success');
                $('.toast').toast('show');
                $(".toast-1").addClass('bg-success');

          }else{
            $("#massage").html(response.message);
            $(".toast-1").addClass('bg-warning');

          }
          
          


      }


     
  }
    

     
}



const singin = ()=>{

     
}