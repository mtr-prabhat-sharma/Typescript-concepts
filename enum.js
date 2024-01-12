var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    return "".concat(recipient, " responded with ").concat(message);
}
console.log(respond("Princess Caroline", UserResponse.Yes));
