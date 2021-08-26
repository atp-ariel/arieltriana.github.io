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
                    pinned = pinned.concat(`<div class="card projects col-sm-4 rounded-0 p-3 m-3 shadow"><a href="${repo_item["link"]}" target="blank" class="main-font f-l">${repo_item["repo"]}</a><p><strong>Description: </strong>${repo_item["description"]}</p><p><strong>Language: </strong>${repo_item["language"]}</p><p>${repo_item["stars"]} <i class="fa fa-star"></i>     ${repo_item["forks"]} <i class="fas fa-code-branch"></i></p></div>`)
                }
            )
        )
    $("#repos-pinned").html(pinned);
}

function get_posts_medium() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://atp-ariel.medium.com/feed/")
        .then(response => response.json())
        .then(data => {
            if(data["items"].length === 0)
            {
                $("#blog-title").append("<p>There are no post in the blog</p><small  class='text-white' >Subscribe on <a class='m-3'href='https://atp-ariel.medium.com'><i class='fab fa-medium text-white f-l'></i></a></small>")
            }
            else{
                $("#blog").append("<div class='container-flex'><div id='blog-content' class='row justify-content-center'></div></div>")
                data["items"].forEach(post => {
                    pubDate = new Date(post["pubDate"])
                    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(pubDate);
                    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(pubDate);
                    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(pubDate);
                    $("#blog-content").append(`
                    <div class="card col-sm-5 rounded-0 m-3 shadow">
                        <div class="bg-white card-header w-100">
                            <a href="${post["link"]}"><h5 class="text-black">${post["title"]}</h5></a>
                            <div class="d-flex">
                                <small class="mr-2"><i class="fas fa-clock mr-2"></i>${ye}-${mo}-${da}</small>
                                <small class="mr-2"><i class="fas fa-user mr-2"></i>${post["author"]}</small>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>${post["description"].substring(0,300)}</p>
                        </div>
                        <div class="card-footer bg-white m-2 text-right">
                            <a class="bg-color shadow text-white rounded-pill p-2 text-decoration-none abtn" href="${post["link"]}">Read more</a>
                        </div>
                    </div>`)
                })
            }
        })
}

$(document).ready(function(){
    $("#age").html(calculate_age());

    fetch('https://api.github.com/users/ArielTriana')
        .then(response => response.json())
        .then(data => $("#count-repos").html(data["public_repos"]));

    print_pinned();

    get_posts_medium();
});

