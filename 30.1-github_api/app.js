const btn = document.querySelector("button");
const avatar = document.querySelector("img");
const user = document.querySelector(".user-name");
const repo = document.querySelector(".num-of-repo");
const username = document.querySelector(".search-bar");
const link = document.querySelector("a");

const getUser = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username.value}`
    );
    const data = await response.json();
    console.log(data);
    avatar.src = data.avatar_url;
    link.href = data.html_url;
    user.textContent = `Username: ${data.login}`;
    repo.textContent = `Number of public repo: ${data.public_repos}`;
    if (data.message === "Not Found") {
      user.textContent = `User doesn't exist, try with a different spelling :)`;
      repo.textContent = undefined;
      avatar = undefined;
      link.href = undefined;
    }
  } catch (e) {
    console.log(e);
  }
};
btn.addEventListener("click", getUser);
btn.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    getUser();
  }
});
