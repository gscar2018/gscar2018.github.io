
// validate 
function validate(){
        if( document.requestsForm.Name.value == "" ) {
           alert( "Please provide your name!" );
           document.requestsForm.Name.focus() ;
           return false;
        }
        if( document.requestsForm.Email.value == "" ) {
           alert( "Please provide your Email!" );
           document.requestsForm.Email.focus() ;
           return false;
        }
        if( document.requestsForm.Subject.value == "" ) {
            alert( "Please enter a subject" );
            document.requestsForm.Subject.focus() ;
            return false;
         }
        return( true );
}