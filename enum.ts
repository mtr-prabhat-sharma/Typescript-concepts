enum UserResponse {
    No = 0,
    Yes = 1,
  }
  
  function respond(recipient: string, message: UserResponse): string {
    return `${recipient} responded with ${message}`;
  }
  
 console.log( respond("Princess Caroline", UserResponse.Yes));