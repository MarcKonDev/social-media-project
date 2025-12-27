function burgerMenuTemplate() {
    return `<svg
  width="28"
  height="28"
  viewBox="0 0 28 28"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
>
  <line
    x1="4"
    y1="7"
    x2="24"
    y2="7"
    stroke="#000000"
    stroke-width="2.5"
    stroke-linecap="round"
  />
  <line
    x1="4"
    y1="14"
    x2="24"
    y2="14"
    stroke="#000000"
    stroke-width="2.5"
    stroke-linecap="round"
  />
  <line
    x1="4"
    y1="21"
    x2="24"
    y2="21"
    stroke="#000000"
    stroke-width="2.5"
    stroke-linecap="round"
  />
</svg>
`
}

function mobileFooterTemplate() {
    return `<nav class="footer-nav">
            <button class="footer-btn active" aria-label="Home">
                <!-- Home Icon -->
                <svg viewBox="0 0 24 24">
                    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
                </svg>
            </button>

            <button class="footer-btn" aria-label="Search" onclick="toggleSearchOverlay()">
                <!-- Search Icon -->
                <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" />
                </svg>
            </button>

            <button class="footer-btn add" aria-label="Add">
                <!-- Plus Icon -->
                <svg viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>

            <button class="footer-btn" aria-label="Reels">
                <!-- Play Icon -->
                <svg viewBox="0 0 24 24">
                    <polygon points="8,5 19,12 8,19" />
                </svg>
            </button>

            <button class="footer-btn" aria-label="Profile">
                <!-- User Icon -->
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                </svg>
            </button>
        </nav>`
}