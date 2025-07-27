export class SideBar {
  #sidebar;
  #btnCloseSidebar;
  #btnShowSidebar;
  #wrapperSidebar;
  #disabled = false;
  constructor() {
    this.#sidebar = document.querySelector(".sidebar");
    this.#wrapperSidebar = document.querySelector(".sidebar__wrapper");
    this.#btnCloseSidebar = document.querySelector("#btn__close--sidebar");
    this.#btnShowSidebar = document.querySelector("#btn__show--sidebar");
    this.#attachEventListeners();
  }
  #attachEventListeners() {
    this.#btnCloseSidebar.addEventListener("click", () => this.close());
    this.#btnShowSidebar.addEventListener("click", () => this.show());
  }
  show() {
    if (this.#disabled) return;
    this.#disabled = true;
    this.#sidebar.classList.add("wrapper__show");
    this.#wrapperSidebar.classList.add("show");
    this.#sidebar.classList.remove("wrapper__hide");
    this.#wrapperSidebar.classList.remove("hide");
    this.#disabled = false;
  }
  close() {
    if (this.#disabled) return;
    this.#disabled = true;
    this.#sidebar.classList.add("wrapper__hide");
    this.#wrapperSidebar.classList.add("hide");

    const handleAnimationEnd = () => {
      this.#sidebar.classList.remove("wrapper__show");
      this.#wrapperSidebar.classList.remove("show");
      this.#disabled = false;
      this.#wrapperSidebar.removeEventListener("animationend", handleAnimationEnd);
      this.#wrapperSidebar.removeEventListener("transitionend", handleAnimationEnd);
    };

    this.#wrapperSidebar.addEventListener("animationend", handleAnimationEnd);
    this.#wrapperSidebar.addEventListener("transitionend", handleAnimationEnd);
  }
}
