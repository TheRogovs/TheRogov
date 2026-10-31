"use strict";

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("is-open", !expanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element) || !event.target.closest("a")) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  });
}

const modeButtons = [...document.querySelectorAll("[data-mode]")];
const profileName = document.querySelector(".profile-name");
const profileDetail = document.querySelector(".profile-detail");
const profileAvatar = document.querySelector(".profile-avatar");
const profileState = document.querySelector(".profile-state");

for (const button of modeButtons) {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    for (const option of modeButtons) {
      const selected = option === button;
      option.classList.toggle("is-selected", selected);
      option.setAttribute("aria-pressed", String(selected));
    }

    const microsoft = mode === "microsoft";
    profileName.textContent = microsoft ? "Microsoft account" : "Player";
    profileDetail.textContent = microsoft
      ? "Sign in when you install the launcher"
      : "Offline profile";
    profileAvatar.textContent = microsoft ? "M" : "P";
    profileState.lastChild.textContent = microsoft ? " In launcher" : " Ready";
  });
}
