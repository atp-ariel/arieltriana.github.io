function calculate_age() { 
    var diff_ms = Date.now() - new Date("1999-11-01").getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
  
  
$(document).ready(function(){
    $("#age").html(calculate_age());

    fetch('https://api.github.com/users/ArielTriana')
        .then(response => response.json())
        .then(data => $("#count-repos").html(data["public_repos"]));
});

