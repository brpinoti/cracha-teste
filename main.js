var textGithub    = " ";
var textYoutube   = " ";
var textFacebook  = " ";
var textInstagram = " ";
var textTweeter   = " ";

function getProfileInfos() {
  textGithub    = document.getElementById('textGithub').value;
  textYoutube   = document.getElementById('textYoutube').value;
  textFacebook  = document.getElementById('textFacebook').value;
  textInstagram = document.getElementById('textInstagram').value;
  textTweeter   = document.getElementById('textTweeter').value
}

getProfileInfos()

const LinksSocialMedia = {
  github: textGithub,
  youtube: textYoutube,
  facebook: textFacebook,
  instagram: textInstagram,
  twitter: textTweeter
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
