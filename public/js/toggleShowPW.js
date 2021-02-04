function toggleShowPW() {
    const element = document.getElementById("password");
    if (element.type === "password")    element.type = "text";
    else    element.type = "password";
}