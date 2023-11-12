import isBrowser from "./isBrowser";

function isSmallScreen(): boolean {
  return isBrowser() && window.innerWidth < 768;
}

export default isSmallScreen;
