function calculate_age() { 
    var diff_ms = Date.now() - new Date("1999-11-01").getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

async function print_pinned() {
    var pinned = "";
    await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=ArielTriana")
        .then(response => response.json())
        .then(
            data => data.forEach(
                repo_item => {
                    pinned = pinned.concat(`<div class="card col-4 rounded-0 p-3"><a href="${repo_item["link"]}" class="main-font">${repo_item["repo"]}</a><p><strong>Description: </strong>${repo_item["description"]}</p></div>`)
                }
            )
        )
    $("#repos-pinned").html(pinned);
}

$(document).ready(function(){
    $("#age").html(calculate_age());

    fetch('https://api.github.com/users/ArielTriana')
        .then(response => response.json())
        .then(data => $("#count-repos").html(data["public_repos"]));


    print_pinned();
});

