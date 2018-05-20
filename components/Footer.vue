<template>
  <footer class="footer">
    <hr>

    <div class="links">
      <a href="https://www.linkedin.com/in/taylor-gratzer" title="My LinkedIn" target="_blank" rel="noopener">
        <i class="icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.894 40.904H33.786V29.766C33.786 27.11 33.732 23.692 30.082 23.692C26.376 23.692 25.81 26.582 25.81 29.57V40.904H18.702V18H25.53V21.122H25.622C26.576 19.322 28.896 17.422 32.362 17.422C39.564 17.422 40.896 22.162 40.896 28.332V40.904H40.894ZM10.674 14.866C8.386 14.866 6.548 13.014 6.548 10.736C6.548 8.46 8.388 6.61 10.674 6.61C12.954 6.61 14.802 8.46 14.802 10.736C14.802 13.014 12.952 14.866 10.674 14.866ZM14.238 40.904H7.11V18H14.238V40.904ZM44.45 0H3.542C1.584 0 0 1.548 0 3.458V44.542C0 46.454 1.584 48 3.542 48H44.444C46.4 48 48 46.454 48 44.542V3.458C48 1.548 46.4 0 44.444 0H44.45Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48) scale(48) rotate(90)">
                <stop stop-color="#3E3CBE"/>
                <stop offset="1" stop-color="#6F5BBF"/>
              </linearGradient>
            </defs>
          </svg>
        </i>
      </a>

      <a href="https://github.com/Nickardson" title="Github" target="_blank" rel="noopener">
        <i class="icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 -1.85799e-08C10.74 -1.85799e-08 0 11.0188 0 24.6094C0 35.4846 6.876 44.707 16.41 47.9575C17.61 48.1892 18.05 47.4284 18.05 46.7742C18.05 46.1897 18.03 44.6414 18.02 42.5906C11.344 44.0754 9.936 39.2888 9.936 39.2888C8.844 36.4485 7.266 35.6897 7.266 35.6897C5.092 34.1639 7.434 34.1947 7.434 34.1947C9.844 34.367 11.11 36.7295 11.11 36.7295C13.25 40.4926 16.728 39.4057 18.1 38.7761C18.316 37.1847 18.934 36.0999 19.62 35.4846C14.29 34.8694 8.688 32.753 8.688 23.3235C8.688 20.637 9.618 18.4427 11.158 16.72C10.888 16.0986 10.078 13.5967 11.368 10.2067C11.368 10.2067 13.378 9.54638 17.968 12.7292C19.888 12.1816 21.928 11.9109 23.968 11.8986C26.008 11.9109 28.048 12.1816 29.968 12.7292C34.528 9.54638 36.538 10.2067 36.538 10.2067C37.828 13.5967 37.018 16.0986 36.778 16.72C38.308 18.4427 39.238 20.637 39.238 23.3235C39.238 32.7776 33.628 34.8591 28.288 35.4641C29.128 36.2024 29.908 37.7118 29.908 40.0169C29.908 43.3104 29.878 45.9559 29.878 46.7557C29.878 47.4017 30.298 48.1708 31.528 47.9247C41.13 44.6967 48 35.4682 48 24.6094C48 11.0188 37.254 -1.85799e-08 24 -1.85799e-08Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48) scale(48) rotate(90)">
                <stop stop-color="#3E3CBE"/>
                <stop offset="1" stop-color="#6F5BBF"/>
              </linearGradient>
            </defs>
          </svg>
        </i>
      </a>

      <nuxt-link to="/contact" title="Contact Me">
        <i class="icon">
          <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.2 0H4.8C2.16 0 0.024 2.16 0.024 4.8L0 33.6C0 36.24 2.16 38.4 4.8 38.4H43.2C45.84 38.4 48 36.24 48 33.6V4.8C48 2.16 45.84 0 43.2 0ZM43.2 9.6L24 21.6L4.8 9.6V4.8L24 16.8L43.2 4.8V9.6Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48) scale(48 38.4) rotate(90)">
                <stop stop-color="#3E3CBE"/>
                <stop offset="1" stop-color="#6F5BBF"/>
              </linearGradient>
            </defs>
          </svg>
        </i>
      </nuxt-link>
    </div>
  </footer>
</template>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  margin: 40px;
}

.icon {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 0 15px 0 15px;
}

.icon > svg {
  vertical-align: middle;
  height: 48px;
}

</style>
