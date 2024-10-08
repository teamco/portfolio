/**
 * @export
 * @param onActiveTab
 */
export const handleActiveTab = (onActiveTab) => {
  window.addEventListener('focus', () => onActiveTab(true));
  window.addEventListener('blur', () => onActiveTab(false));
};

/**
 * @export
 * @param {string} id
 */
export const scrollToRef = ({ id }) => {
  const ref = document.querySelector(`#${id}`);
  ref && ref.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

/**
 * @export
 * @return {boolean}
 */
export function isLocalHost() {
  const { hostname } = window.location;
  return hostname === 'localhost' ||
      hostname.match(/^192\./) ||
      hostname.match(/^10\./);
}

/**
 * @export
 * @param path
 * @return {RegExpMatchArray}
 */
export function isHost(path) {
  return window.location.href.match(new RegExp(path));
}

/**
 * @export
 * @param {boolean} [styled]
 * @return {boolean}
 */
export const handleMobile = (styled = true) => {
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (mobile && styled) {
    document.body.classList.add('mobile');
  }

  return mobile;
};
