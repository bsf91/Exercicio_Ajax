document.addEventListener('DOMContentLoaded', function () {
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const userElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/bsf91')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            nameElement.innerText = json.name;
            userElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        });
});
