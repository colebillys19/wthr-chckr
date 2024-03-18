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
        d="M39.584 130.258C37.0899 130.262 34.6947 129.283 32.9161 127.535C27.5601 122.296 23.3061 116.039 20.4044 109.132C17.5026 102.225 16.0118 94.8068 16.0196 87.3149C16.0196 85.6984 16.0907 84.0616 16.2291 82.4489C16.3608 80.9154 16.8623 79.4366 17.6906 78.1393C18.5188 76.8419 19.6492 75.7647 20.9848 74.9997C22.3205 74.2348 23.8216 73.805 25.3597 73.7471C26.8978 73.6892 28.427 74.0049 29.8164 74.6673C32.7408 76.0637 35.942 76.7841 39.1827 76.7752C51.2043 76.7752 60.9846 66.9975 60.9846 54.9721C60.9963 51.5491 60.1928 48.1726 58.6405 45.1219C57.9435 43.7492 57.5897 42.228 57.6093 40.6886C57.6289 39.1492 58.0215 37.6375 58.7533 36.2831C59.4851 34.9286 60.5343 33.7717 61.8111 32.9116C63.0879 32.0514 64.5542 31.5135 66.0843 31.3441C68.1603 31.1152 70.2472 31.0003 72.3357 31C84.5111 31.002 96.3583 34.9478 106.104 42.2466C115.849 49.5453 122.968 59.8044 126.394 71.4876C127.013 73.6027 126.878 75.8668 126.014 77.8941C125.151 79.9213 123.61 81.5862 121.656 82.6051C109.019 89.203 99.3206 100.306 94.4818 113.716C93.639 116.062 91.9101 117.984 89.6664 119.069C87.4226 120.155 84.8428 120.317 82.4805 119.522C76.2653 117.438 69.5989 117.09 63.2006 118.517C56.8024 119.944 50.9152 123.091 46.1745 127.618C44.4016 129.317 42.0395 130.264 39.584 130.258Z"
        fill="url(#paint0_linear_9_2)"
      />
      <path
        opacity="0.1"
        d="M118.657 55.2802C117.048 52.9596 115.269 50.7626 113.332 48.7075C110.765 49.7602 108.23 50.9361 105.802 52.2047C91.8854 59.4727 80.0769 70.2053 71.5165 83.3666H71.0085C52.9167 83.3316 35.5161 90.3127 22.4651 102.842C21.3544 103.905 20.2805 105.003 19.2435 106.136C19.6456 107.269 20.085 108.391 20.5616 109.502C23.4577 116.265 27.6554 122.392 32.9159 127.534C34.6818 129.265 37.0518 130.242 39.5248 130.257C41.9978 130.272 44.3796 129.325 46.1666 127.615C50.9074 123.088 56.7945 119.941 63.1928 118.514C69.591 117.087 76.2574 117.435 82.4727 119.519C84.8349 120.314 87.4148 120.152 89.6586 119.066C91.9023 117.981 93.6311 116.059 94.4739 113.713C99.3127 100.304 109.011 89.2001 121.649 82.6021C123.603 81.5833 125.143 79.9184 126.007 77.8911C126.871 75.8639 127.005 73.5998 126.386 71.4847C124.697 65.7029 122.087 60.2312 118.657 55.2802Z"
        fill="url(#paint1_linear_9_2)"
      />
      <path
        d="M147.804 208.565H71.0023C60.7971 208.571 50.7915 205.737 42.1062 200.379C33.4208 195.02 26.3986 187.35 21.8261 178.226C17.2536 169.103 15.3113 158.887 16.2168 148.722C17.1223 138.557 20.8397 128.844 26.9528 120.673C28.7778 118.236 30.8003 115.953 32.9998 113.847C43.2179 104.041 56.8397 98.5768 71.0023 98.6042C73.9917 98.6029 76.9763 98.8441 79.9268 99.3254C87.0719 84.9243 98.5971 73.1581 112.847 65.7165C114.993 64.5953 117.235 63.5578 119.504 62.6461C129.861 58.4631 141.014 56.6234 152.166 57.2589C163.317 57.8943 174.19 60.989 184.004 66.3213C193.819 71.6536 202.332 79.0913 208.933 88.1011C215.535 97.111 220.061 107.47 222.188 118.435C224.314 129.4 223.989 140.7 221.234 151.524C218.479 162.349 213.363 172.43 206.254 181.044C199.144 189.659 190.217 196.594 180.111 201.352C170.006 206.11 158.973 208.573 147.804 208.565Z"
        fill="url(#paint2_linear_9_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_2"
          x1="11.7986"
          y1="162.457"
          x2="128.71"
          y2="-1.57778"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.7" stopColor="#FFE88A" />
          <stop offset="1" stopColor="#FFE4C5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9_2"
          x1="17.1838"
          y1="187.8"
          x2="90.1692"
          y2="61.8047"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E2121" />
          <stop offset="1" stopColor="#1E2121" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9_2"
          x1="16.0195"
          y1="132.872"
          x2="223.501"
          y2="132.872"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#9DE0F4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;