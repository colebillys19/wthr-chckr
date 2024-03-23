type SvgComponentPropsType = {
  size?: number;
};

function SvgComponent({ size = 240 }: SvgComponentPropsType) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M131.906 108.517L124.325 104.14L130.597 102.46C132.119 102.052 133.416 101.057 134.204 99.6919C134.992 98.3272 135.205 96.7054 134.797 95.1834C134.39 93.6614 133.394 92.3637 132.029 91.5759C130.664 90.7881 129.043 90.5746 127.521 90.9825L109.771 95.7355L85.5015 81.7252L109.481 67.8813L127.23 72.6343C127.987 72.8461 128.778 72.9057 129.558 72.8097C130.338 72.7136 131.091 72.4638 131.773 72.0747C132.456 71.6856 133.055 71.1649 133.535 70.5429C134.015 69.9208 134.367 69.2097 134.57 68.4507C134.774 67.6916 134.824 66.8998 134.72 66.121C134.615 65.3423 134.357 64.592 133.96 63.9137C133.563 63.2354 133.036 62.6425 132.409 62.1694C131.781 61.6962 131.066 61.3522 130.305 61.1573L124.035 59.4787L131.616 55.102C132.97 54.3085 133.954 53.0119 134.355 51.4952C134.756 49.9784 134.541 48.3646 133.757 47.0059C132.972 45.6472 131.682 44.6539 130.168 44.2428C128.654 43.8318 127.039 44.0363 125.675 44.8117L118.094 49.1885L119.775 42.9168C119.977 42.1632 120.028 41.3772 119.926 40.6036C119.824 39.8301 119.571 39.0842 119.181 38.4085C118.791 37.7328 118.272 37.1406 117.653 36.6656C117.034 36.1907 116.327 35.8423 115.573 35.6404C114.82 35.4385 114.034 35.387 113.26 35.4888C112.487 35.5907 111.741 35.8439 111.065 36.234C110.389 36.6241 109.797 37.1435 109.322 37.7625C108.847 38.3815 108.499 39.088 108.297 39.8416L103.544 57.5902L79.8882 71.2496V46.4998L92.8798 33.5083C93.4315 32.9565 93.8692 32.3015 94.1678 31.5807C94.4664 30.8598 94.62 30.0872 94.62 29.307C94.62 28.5267 94.4664 27.7541 94.1678 27.0333C93.8692 26.3124 93.4315 25.6574 92.8798 25.1057C92.3281 24.554 91.6731 24.1163 90.9522 23.8178C90.2314 23.5192 89.4588 23.3655 88.6785 23.3655C87.8983 23.3655 87.1257 23.5192 86.4048 23.8178C85.684 24.1163 85.029 24.554 84.4773 25.1057L79.8827 29.7003V20.9413C79.8827 19.3655 79.2567 17.8544 78.1425 16.7402C77.0283 15.626 75.5171 15 73.9414 15C72.3657 15 70.8545 15.626 69.7403 16.7402C68.6261 17.8544 68.0001 19.3655 68.0001 20.9413V29.6955L63.4056 25.101C62.8586 24.5277 62.2025 24.0697 61.4759 23.7538C60.7493 23.4378 59.9669 23.2705 59.1746 23.2614C58.3824 23.2524 57.5963 23.402 56.8627 23.7013C56.1291 24.0006 55.4628 24.4436 54.9029 25.0042C54.3431 25.5648 53.901 26.2318 53.6028 26.9658C53.3045 27.6998 53.1561 28.4861 53.1662 29.2783C53.1764 30.0706 53.3449 30.8528 53.6618 31.579C53.9787 32.3051 54.4377 32.9605 55.0117 33.5067L68.0033 46.4982V71.6243L46.4563 59.1872L41.7033 41.4379C41.2784 39.9354 40.2792 38.6605 38.9216 37.889C37.5641 37.1175 35.9575 36.9115 34.4492 37.3154C32.9409 37.7193 31.6523 38.7008 30.862 40.0474C30.0718 41.3941 29.8434 42.9977 30.2263 44.5115L31.9057 50.7831L24.3247 46.4056C22.96 45.6177 21.3382 45.4042 19.8161 45.8121C18.2941 46.22 16.9963 47.2158 16.2085 48.5805C15.4206 49.9451 15.2071 51.5669 15.615 53.089C16.0229 54.6111 17.0187 55.9088 18.3834 56.6966L25.9644 61.0734L19.6928 62.7536C18.9392 62.9555 18.2327 63.3039 17.6137 63.7788C16.9947 64.2538 16.4753 64.846 16.0852 65.5217C15.6951 66.1974 15.4419 66.9433 15.34 67.7168C15.2381 68.4904 15.2896 69.2764 15.4916 70.03C15.6935 70.7837 16.0419 71.4902 16.5168 72.1092C16.9918 72.7282 17.584 73.2476 18.2597 73.6377C18.9354 74.0278 19.6813 74.281 20.4548 74.3829C21.2284 74.4847 22.0144 74.4332 22.768 74.2313L40.5174 69.4783L61.7365 81.7252L40.2275 94.1433L22.4789 89.3903C20.9569 88.9825 19.3352 89.196 17.9706 89.9839C16.6059 90.7718 15.6102 92.0695 15.2024 93.5915C14.7946 95.1136 15.0082 96.7353 15.7961 98.0999C16.5839 99.4645 17.8817 100.46 19.4037 100.868L25.6753 102.548L18.0942 106.925C16.7296 107.713 15.7338 109.011 15.3259 110.533C14.918 112.055 15.1315 113.676 15.9193 115.041C16.7072 116.406 18.0049 117.402 19.527 117.809C21.0491 118.217 22.6708 118.004 24.0355 117.216L31.6166 112.838L29.9364 119.11C29.7178 119.869 29.6526 120.663 29.7446 121.448C29.8367 122.232 30.0841 122.99 30.4724 123.677C30.8607 124.365 31.3821 124.968 32.0062 125.451C32.6303 125.935 33.3445 126.289 34.1071 126.494C34.8698 126.698 35.6655 126.748 36.4478 126.642C37.2301 126.535 37.9833 126.274 38.6634 125.873C39.3435 125.472 39.9368 124.939 40.4087 124.306C40.8806 123.673 41.2216 122.952 41.4118 122.186L46.1648 104.437L68.0017 91.8294V119.608L55.0101 132.6C54.4584 133.152 54.0208 133.807 53.7222 134.528C53.4236 135.248 53.2699 136.021 53.2699 136.801C53.2699 137.581 53.4236 138.354 53.7222 139.075C54.0208 139.796 54.4584 140.451 55.0101 141.002C55.5619 141.554 56.2168 141.992 56.9377 142.29C57.6586 142.589 58.4312 142.743 59.2114 142.743C59.9917 142.743 60.7643 142.589 61.4851 142.29C62.206 141.992 62.861 141.554 63.4127 141.002L68.0073 136.408V145.162C68.0073 146.738 68.6332 148.249 69.7474 149.363C70.8616 150.477 72.3728 151.103 73.9485 151.103C75.5243 151.103 77.0355 150.477 78.1497 149.363C79.2639 148.249 79.8898 146.738 79.8898 145.162V136.41L84.4844 141.005C85.0361 141.557 85.6911 141.994 86.412 142.293C87.1328 142.591 87.9054 142.745 88.6857 142.745C89.4659 142.745 90.2385 142.591 90.9594 142.293C91.6802 141.994 92.3352 141.557 92.8869 141.005C93.4387 140.453 93.8763 139.798 94.1749 139.077C94.4735 138.356 94.6272 137.584 94.6272 136.804C94.6272 136.023 94.4735 135.251 94.1749 134.53C93.8763 133.809 93.4387 133.154 92.8869 132.602L79.8954 119.611V92.2056L103.835 106.026L108.588 123.77C108.79 124.524 109.138 125.231 109.613 125.85C110.088 126.469 110.68 126.988 111.356 127.378C112.032 127.768 112.777 128.021 113.551 128.123C114.325 128.225 115.111 128.174 115.864 127.972C116.618 127.77 117.324 127.421 117.943 126.946C118.562 126.471 119.082 125.879 119.472 125.204C119.862 124.528 120.115 123.782 120.217 123.008C120.319 122.235 120.267 121.449 120.065 120.695L118.385 114.424L125.966 118.8C127.329 119.576 128.945 119.78 130.459 119.369C131.973 118.958 133.263 117.965 134.047 116.606C134.832 115.248 135.047 113.634 134.646 112.117C134.245 110.6 133.26 109.304 131.907 108.51L131.906 108.517Z"
        fill="url(#paint0_linear_25_2)"
      />
      <path
        d="M220.875 168.69L210.767 162.854L219.129 160.614C221.158 160.07 222.888 158.742 223.939 156.922C224.989 155.103 225.274 152.941 224.73 150.911C224.186 148.882 222.858 147.152 221.039 146.101C219.219 145.051 217.057 144.766 215.027 145.31L191.362 151.647L159.002 132.967L190.974 114.508L214.64 120.846C215.649 121.128 216.704 121.208 217.744 121.08C218.783 120.951 219.788 120.618 220.698 120.1C221.608 119.581 222.406 118.887 223.046 118.057C223.687 117.228 224.156 116.28 224.427 115.268C224.698 114.256 224.766 113.2 224.626 112.161C224.487 111.123 224.142 110.123 223.613 109.218C223.085 108.314 222.381 107.523 221.545 106.892C220.708 106.262 219.755 105.803 218.74 105.543L210.38 103.305L220.488 97.4693C222.293 96.4114 223.606 94.6826 224.14 92.6602C224.675 90.6378 224.388 88.4861 223.342 86.6745C222.296 84.8629 220.576 83.5386 218.557 82.9905C216.539 82.4424 214.385 82.715 212.566 83.749L202.458 89.5846L204.7 81.2225C204.969 80.2176 205.038 79.1696 204.902 78.1382C204.766 77.1068 204.428 76.1122 203.908 75.2113C203.388 74.3104 202.695 73.5208 201.87 72.8875C201.045 72.2542 200.103 71.7897 199.098 71.5205C198.093 71.2513 197.045 71.1826 196.014 71.3184C194.982 71.4542 193.988 71.7918 193.087 72.312C192.186 72.8322 191.396 73.5247 190.763 74.35C190.13 75.1754 189.665 76.1173 189.396 77.1222L183.059 100.787L151.518 118.999V85.9998L168.84 68.6777C169.575 67.942 170.159 67.0687 170.557 66.1076C170.955 65.1464 171.16 64.1163 171.16 63.076C171.16 62.0356 170.955 61.0055 170.557 60.0444C170.159 59.0832 169.575 58.2099 168.84 57.4743C168.104 56.7387 167.231 56.1551 166.27 55.757C165.309 55.3589 164.278 55.154 163.238 55.154C162.198 55.154 161.168 55.3589 160.206 55.757C159.245 56.1551 158.372 56.7387 157.636 57.4743L151.51 63.6004V51.9217C151.51 49.8207 150.676 47.8058 149.19 46.3202C147.704 44.8346 145.69 44 143.589 44C141.488 44 139.473 44.8346 137.987 46.3202C136.501 47.8058 135.667 49.8207 135.667 51.9217V63.5941L129.541 57.4679C128.811 56.7036 127.937 56.0929 126.968 55.6717C125.999 55.2505 124.956 55.0273 123.9 55.0153C122.843 55.0032 121.795 55.2026 120.817 55.6017C119.839 56.0007 118.95 56.5914 118.204 57.3389C117.457 58.0864 116.868 58.9757 116.47 59.9544C116.073 60.9331 115.875 61.9815 115.888 63.0378C115.902 64.0941 116.126 65.1371 116.549 66.1053C116.972 67.0735 117.584 67.9474 118.349 68.6756L135.671 85.9977V119.499L106.942 102.916L100.604 79.2505C100.038 77.2471 98.7056 75.5473 96.8955 74.5187C95.0855 73.49 92.9433 73.2153 90.9323 73.7539C88.9212 74.2924 87.2031 75.601 86.1494 77.3966C85.0957 79.1921 84.7912 81.3303 85.3018 83.3486L87.541 91.7108L77.4329 85.8741C75.6133 84.8236 73.4509 84.539 71.4215 85.0828C69.3921 85.6266 67.6618 86.9544 66.6113 88.774C65.5608 90.5935 65.2762 92.7559 65.82 94.7853C66.3639 96.8148 67.6916 98.545 69.5112 99.5955L79.6193 105.431L71.2571 107.671C70.2523 107.941 69.3103 108.405 68.4849 109.038C67.6596 109.672 66.9671 110.461 66.4469 111.362C65.9268 112.263 65.5891 113.258 65.4533 114.289C65.3175 115.32 65.3862 116.369 65.6554 117.373C65.9247 118.378 66.3892 119.32 67.0224 120.146C67.6557 120.971 68.4453 121.663 69.3463 122.184C70.2472 122.704 71.2417 123.041 72.2731 123.177C73.3045 123.313 74.3525 123.244 75.3574 122.975L99.0232 116.638L127.315 132.967L98.6366 149.524L74.9719 143.187C72.9425 142.643 70.7802 142.928 68.9607 143.979C67.1413 145.029 65.8136 146.759 65.2699 148.789C64.7262 150.818 65.0109 152.98 66.0614 154.8C67.1119 156.619 68.8422 157.947 70.8716 158.491L79.2337 160.731L69.1257 166.567C67.3061 167.617 65.9783 169.347 65.4345 171.377C64.8907 173.406 65.1753 175.569 66.2258 177.388C67.2763 179.208 69.0066 180.535 71.036 181.079C73.0654 181.623 75.2278 181.339 77.0474 180.288L87.1554 174.451L84.9152 182.813C84.6237 183.825 84.5368 184.885 84.6595 185.93C84.7822 186.976 85.1121 187.986 85.6298 188.903C86.1476 189.819 86.8428 190.624 87.675 191.268C88.5071 191.913 89.4594 192.386 90.4762 192.658C91.493 192.931 92.554 192.998 93.597 192.856C94.6401 192.714 95.6444 192.365 96.5512 191.83C97.4579 191.296 98.249 190.585 98.8782 189.741C99.5074 188.897 99.9621 187.937 100.216 186.915L106.553 163.249L135.669 146.439V183.478L118.347 200.8C117.611 201.536 117.028 202.409 116.63 203.37C116.231 204.331 116.027 205.361 116.027 206.402C116.027 207.442 116.231 208.472 116.63 209.433C117.028 210.394 117.611 211.268 118.347 212.003C119.082 212.739 119.956 213.322 120.917 213.721C121.878 214.119 122.908 214.324 123.949 214.324C124.989 214.324 126.019 214.119 126.98 213.721C127.941 213.322 128.815 212.739 129.55 212.003L135.676 205.877V217.55C135.676 219.651 136.511 221.665 137.997 223.151C139.482 224.637 141.497 225.471 143.598 225.471C145.699 225.471 147.714 224.637 149.2 223.151C150.685 221.665 151.52 219.651 151.52 217.55V205.88L157.646 212.007C158.381 212.742 159.255 213.326 160.216 213.724C161.177 214.122 162.207 214.327 163.248 214.327C164.288 214.327 165.318 214.122 166.279 213.724C167.24 213.326 168.114 212.742 168.849 212.007C169.585 211.271 170.168 210.398 170.567 209.436C170.965 208.475 171.17 207.445 171.17 206.405C171.17 205.364 170.965 204.334 170.567 203.373C170.168 202.412 169.585 201.539 168.849 200.803L151.527 183.481V146.941L183.446 165.368L189.784 189.027C190.053 190.032 190.517 190.974 191.151 191.799C191.784 192.625 192.574 193.317 193.475 193.837C194.375 194.358 195.37 194.695 196.401 194.831C197.433 194.967 198.481 194.898 199.486 194.629C200.49 194.36 201.432 193.895 202.258 193.262C203.083 192.629 203.776 191.839 204.296 190.938C204.816 190.037 205.154 189.043 205.289 188.011C205.425 186.98 205.357 185.932 205.087 184.927L202.846 176.565L212.954 182.4C214.773 183.434 216.926 183.707 218.945 183.159C220.964 182.611 222.684 181.287 223.73 179.475C224.776 177.663 225.063 175.512 224.528 173.489C223.993 171.467 222.68 169.738 220.876 168.68L220.875 168.69Z"
        fill="url(#paint1_linear_25_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_25_2"
          x1="135"
          y1="71.5"
          x2="-96"
          y2="71.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_25_2"
          x1="65"
          y1="44"
          x2="314.5"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
