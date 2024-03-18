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
        d="M152.846 186.194H62.814C54.5651 186.194 46.397 184.57 38.7761 181.413C31.1552 178.256 24.2306 173.629 18.3978 167.796C12.565 161.964 7.93813 155.039 4.78143 147.418C1.62473 139.797 0 131.629 0 123.38C0 115.131 1.62473 106.963 4.78143 99.3425C7.93813 91.7215 12.565 84.797 18.3978 78.9641C24.2306 73.1313 31.1552 68.5045 38.7761 65.3478C46.397 62.1911 54.5651 60.5663 62.814 60.5663C66.6376 60.5648 70.4535 60.9108 74.2146 61.6C80.5806 48.2899 90.2122 36.8078 102.212 28.2235C117.044 17.6102 134.552 12 152.846 12C172.943 12.004 192.421 18.9571 207.978 31.6809C223.535 44.4046 234.214 62.1162 238.205 81.8136C242.196 101.511 239.253 121.982 229.875 139.758C220.497 157.534 205.262 171.52 186.75 179.346C176.025 183.887 164.493 186.216 152.846 186.194Z"
        fill="url(#paint0_linear_24_46)"
      />
      <path
        d="M70.6033 227.891C63.675 227.891 58.8661 220.991 61.2623 214.491L67.7817 196.81C67.9946 196.233 68.3792 195.736 68.8837 195.384C69.3883 195.033 69.9884 194.844 70.6033 194.844C71.2179 194.845 71.8178 195.033 72.322 195.385C72.8263 195.736 73.2107 196.234 73.4236 196.81L79.9429 214.491C82.3391 220.991 77.5302 227.891 70.6033 227.891Z"
        fill="url(#paint1_linear_24_46)"
      />
      <path
        d="M179.338 227.891C172.411 227.891 167.602 220.991 169.999 214.491L176.518 196.81C176.731 196.234 177.115 195.736 177.62 195.385C178.124 195.033 178.724 194.845 179.338 194.844C179.953 194.844 180.553 195.033 181.058 195.384C181.562 195.736 181.947 196.233 182.16 196.81L188.679 214.491C191.075 220.991 186.267 227.891 179.338 227.891Z"
        fill="url(#paint2_linear_24_46)"
      />
      <path
        opacity="0.1"
        d="M88 186.188L143.049 185.953L146 172.681L119.393 174.325L120.202 143.49L88 186.188Z"
        fill="url(#paint3_linear_24_46)"
      />
      <path
        d="M120.641 141.298L100.191 187.088C100.042 187.421 99.9783 187.786 100.007 188.15C100.035 188.514 100.154 188.865 100.352 189.171C100.551 189.477 100.823 189.729 101.143 189.903C101.464 190.077 101.823 190.168 102.188 190.168H122.042C122.61 190.168 123.155 190.388 123.563 190.782C123.971 191.177 124.21 191.714 124.229 192.281L125.138 219.195C125.216 221.513 128.371 222.129 129.319 220.017L149.809 174.308C149.957 173.978 150.02 173.616 149.994 173.256C149.968 172.895 149.853 172.547 149.66 172.242C149.466 171.937 149.2 171.684 148.885 171.507C148.57 171.329 148.216 171.233 147.855 171.226L127.555 170.841C126.991 170.83 126.452 170.602 126.052 170.203C125.653 169.805 125.423 169.267 125.41 168.703L124.825 142.146C124.774 139.809 121.593 139.166 120.641 141.298Z"
        fill="url(#paint4_linear_24_46)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_24_46"
          x1="-0.00126852"
          y1="99.0971"
          x2="239.943"
          y2="99.0971"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#9DE0F4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_24_46"
          x1="147.345"
          y1="119.631"
          x2="16.6553"
          y2="279.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_24_46"
          x1="200.415"
          y1="187.632"
          x2="69.7244"
          y2="347.281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#69BBFF" />
          <stop offset="1" stopColor="#1798FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_24_46"
          x1="88"
          y1="164.604"
          x2="146"
          y2="164.604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E2121" />
          <stop offset="1" stopColor="#1E2121" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_24_46"
          x1="84.3252"
          y1="221.309"
          x2="151.701"
          y2="153.932"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.06" stopColor="#FF6800" />
          <stop offset="1" stopColor="#FFF100" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;