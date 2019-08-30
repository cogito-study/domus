import React, { FunctionComponent } from 'react';
import { Flex } from '@cogito-study/alea';

export const CogitoLogo: FunctionComponent = () => {
  return (
    <Flex alignItems="center" ml={8} mr={8} mt={3} mb={3}>
      <svg width="90" viewBox="0 0 353 145" fill="#5477D8" xmlns="http://www.w3.org/2000/svg">
        <path d="M143.27 71.472C143.27 68.8496 143.723 66.3702 144.628 64.0338C145.534 61.6974 146.822 59.6472 148.491 57.883C150.207 56.1188 152.257 54.736 154.641 53.7347C157.025 52.6857 159.696 52.1613 162.652 52.1613C166.514 52.1613 169.828 53.0195 172.593 54.736C175.407 56.4049 177.504 58.6459 178.887 61.459L171.234 63.8908C170.328 62.3173 169.113 61.1014 167.587 60.2432C166.061 59.3372 164.368 58.8843 162.509 58.8843C160.935 58.8843 159.457 59.1942 158.074 59.814C156.739 60.4339 155.571 61.316 154.57 62.4603C153.569 63.557 152.782 64.8682 152.21 66.394C151.638 67.9198 151.351 69.6125 151.351 71.472C151.351 73.2839 151.638 74.9766 152.21 76.5501C152.83 78.0759 153.64 79.4109 154.641 80.5553C155.69 81.6996 156.882 82.6056 158.218 83.2731C159.6 83.8929 161.055 84.2029 162.58 84.2029C163.534 84.2029 164.488 84.0837 165.441 83.8453C166.395 83.5592 167.253 83.1777 168.016 82.7009C168.827 82.2241 169.518 81.6758 170.09 81.0559C170.71 80.4361 171.163 79.7685 171.449 79.0533L179.173 81.342C177.934 84.1552 175.859 86.4677 172.951 88.2796C170.042 90.0438 166.609 90.9259 162.652 90.9259C159.743 90.9259 157.097 90.4014 154.713 89.3524C152.329 88.3034 150.279 86.8968 148.562 85.1326C146.893 83.3208 145.582 81.2467 144.628 78.9103C143.723 76.5739 143.27 74.0945 143.27 71.472Z" />
        <path d="M202.111 90.9259C199.155 90.9259 196.485 90.4014 194.101 89.3524C191.764 88.3034 189.762 86.8968 188.093 85.1326C186.424 83.3685 185.137 81.3182 184.231 78.9818C183.325 76.5978 182.872 74.1183 182.872 71.5436C182.872 68.9688 183.325 66.5132 184.231 64.1769C185.137 61.7928 186.424 59.7187 188.093 57.9545C189.809 56.1903 191.836 54.7837 194.172 53.7347C196.556 52.6857 199.202 52.1613 202.111 52.1613C205.02 52.1613 207.642 52.6857 209.978 53.7347C212.362 54.7837 214.389 56.1903 216.058 57.9545C217.774 59.7187 219.085 61.7928 219.991 64.1769C220.897 66.5132 221.35 68.9688 221.35 71.5436C221.35 74.1183 220.897 76.5978 219.991 78.9818C219.085 81.3182 217.774 83.3685 216.058 85.1326C214.389 86.8968 212.362 88.3034 209.978 89.3524C207.642 90.4014 205.02 90.9259 202.111 90.9259ZM190.954 71.6151C190.954 73.427 191.24 75.0958 191.812 76.6216C192.384 78.1474 193.171 79.4825 194.172 80.6268C195.173 81.7235 196.342 82.6056 197.677 83.2731C199.059 83.8929 200.538 84.2029 202.111 84.2029C203.684 84.2029 205.139 83.8929 206.474 83.2731C207.857 82.6056 209.049 81.6996 210.05 80.5553C211.051 79.4109 211.838 78.0759 212.41 76.5501C212.982 75.0243 213.268 73.3554 213.268 71.5436C213.268 69.7794 212.982 68.1344 212.41 66.6086C211.838 65.0351 211.051 63.6762 210.05 62.5319C209.049 61.3875 207.857 60.5054 206.474 59.8856C205.139 59.218 203.684 58.8843 202.111 58.8843C200.585 58.8843 199.131 59.218 197.748 59.8856C196.413 60.5531 195.245 61.459 194.244 62.6034C193.242 63.7477 192.432 65.1066 191.812 66.6801C191.24 68.2059 190.954 69.8509 190.954 71.6151Z" />
        <path d="M243.133 90.5683C240.606 90.5683 238.293 90.0676 236.195 89.0663C234.098 88.0174 232.286 86.6108 230.76 84.8466C229.282 83.0824 228.114 81.0559 227.255 78.7672C226.445 76.4786 226.039 74.0707 226.039 71.5436C226.039 68.8734 226.469 66.3702 227.327 64.0338C228.185 61.6498 229.377 59.5995 230.903 57.883C232.429 56.1188 234.241 54.736 236.339 53.7347C238.484 52.6857 240.844 52.1613 243.419 52.1613C246.423 52.1613 249.046 52.8765 251.287 54.3069C253.575 55.7373 255.459 57.5969 256.937 59.8856V52.8049H263.874V89.1379C263.874 91.8557 263.374 94.2636 262.372 96.3615C261.371 98.4595 259.964 100.224 258.153 101.654C256.388 103.132 254.29 104.253 251.859 105.016C249.427 105.779 246.804 106.16 243.991 106.16C239.843 106.16 236.386 105.445 233.621 104.014C230.903 102.632 228.614 100.677 226.755 98.1496L231.189 94.0013C232.619 96.0039 234.455 97.5297 236.696 98.5787C238.985 99.6277 241.417 100.152 243.991 100.152C245.612 100.152 247.138 99.9376 248.569 99.5085C250.047 99.0793 251.334 98.4118 252.431 97.5059C253.528 96.5999 254.386 95.4556 255.006 94.0728C255.673 92.6901 256.007 91.0451 256.007 89.1379V83.4161C254.672 85.7048 252.836 87.469 250.5 88.7087C248.163 89.9484 245.708 90.5683 243.133 90.5683ZM245.708 84.2029C246.9 84.2029 248.044 84.0121 249.141 83.6307C250.238 83.2016 251.239 82.6532 252.145 81.9857C253.098 81.2705 253.909 80.4838 254.576 79.6255C255.244 78.7196 255.721 77.7659 256.007 76.7646V66.9662C255.53 65.7742 254.91 64.7013 254.147 63.7477C253.384 62.7464 252.502 61.8882 251.501 61.173C250.547 60.4577 249.522 59.9094 248.426 59.528C247.329 59.0988 246.232 58.8843 245.136 58.8843C243.419 58.8843 241.87 59.2657 240.487 60.0286C239.152 60.7438 238.007 61.7213 237.054 62.961C236.1 64.153 235.361 65.5119 234.837 67.0377C234.312 68.5635 234.05 70.137 234.05 71.7581C234.05 73.4746 234.336 75.0958 234.908 76.6216C235.528 78.0997 236.362 79.4109 237.411 80.5553C238.46 81.6519 239.676 82.534 241.059 83.2016C242.489 83.8691 244.039 84.2029 245.708 84.2029Z" />
        <path d="M273.308 90.2107V52.8049H281.176V90.2107H273.308ZM273.308 46.6541V38H281.176V46.6541H273.308Z" />
        <path d="M311.443 88.2796C310.441 88.7564 309.059 89.3047 307.295 89.9246C305.53 90.4968 303.647 90.7828 301.644 90.7828C300.405 90.7828 299.236 90.616 298.14 90.2822C297.043 89.9484 296.066 89.4478 295.207 88.7802C294.397 88.1127 293.753 87.2545 293.276 86.2055C292.8 85.1088 292.561 83.7976 292.561 82.2718V58.8843H287.626V52.8049H292.561V40.5033H300.428V52.8049H308.582V58.8843H300.428V79.7685C300.524 81.1036 300.929 82.0811 301.644 82.7009C302.407 83.2731 303.337 83.5592 304.434 83.5592C305.53 83.5592 306.579 83.3685 307.581 82.987C308.582 82.6056 309.321 82.2956 309.798 82.0572L311.443 88.2796Z" />
        <path d="M332.791 90.9259C329.835 90.9259 327.165 90.4014 324.781 89.3524C322.445 88.3034 320.442 86.8968 318.773 85.1326C317.104 83.3685 315.817 81.3182 314.911 78.9818C314.005 76.5978 313.552 74.1183 313.552 71.5436C313.552 68.9688 314.005 66.5132 314.911 64.1769C315.817 61.7928 317.104 59.7187 318.773 57.9545C320.49 56.1903 322.516 54.7837 324.852 53.7347C327.237 52.6857 329.883 52.1613 332.791 52.1613C335.7 52.1613 338.322 52.6857 340.659 53.7347C343.043 54.7837 345.069 56.1903 346.738 57.9545C348.455 59.7187 349.766 61.7928 350.672 64.1769C351.578 66.5132 352.031 68.9688 352.031 71.5436C352.031 74.1183 351.578 76.5978 350.672 78.9818C349.766 81.3182 348.455 83.3685 346.738 85.1326C345.069 86.8968 343.043 88.3034 340.659 89.3524C338.322 90.4014 335.7 90.9259 332.791 90.9259ZM321.634 71.6151C321.634 73.427 321.92 75.0958 322.492 76.6216C323.064 78.1474 323.851 79.4825 324.852 80.6268C325.854 81.7235 327.022 82.6056 328.357 83.2731C329.74 83.8929 331.218 84.2029 332.791 84.2029C334.365 84.2029 335.819 83.8929 337.154 83.2731C338.537 82.6056 339.729 81.6996 340.73 80.5553C341.732 79.4109 342.518 78.0759 343.09 76.5501C343.663 75.0243 343.949 73.3554 343.949 71.5436C343.949 69.7794 343.663 68.1344 343.09 66.6086C342.518 65.0351 341.732 63.6762 340.73 62.5319C339.729 61.3875 338.537 60.5054 337.154 59.8856C335.819 59.218 334.365 58.8843 332.791 58.8843C331.266 58.8843 329.811 59.218 328.429 59.8856C327.093 60.5531 325.925 61.459 324.924 62.6034C323.923 63.7477 323.112 65.1066 322.492 66.6801C321.92 68.2059 321.634 69.8509 321.634 71.6151Z" />
        <path d="M107.893 87.9101C102.607 87.9101 97.5787 89.8918 93.7349 93.491L93.631 93.5821C87.9102 99.2438 80.3096 102.363 72.2273 102.363C55.4147 102.363 41.7346 88.6826 41.7346 71.8693C41.7346 55.0486 55.4147 41.3637 72.2273 41.3637C80.9101 41.3637 89.2016 45.079 94.9836 51.5682L95.0325 51.6226C97.3817 54.255 100.755 55.7659 104.283 55.7659C111.108 55.7659 116.659 50.2116 116.659 43.3848C116.659 40.3487 115.545 37.4302 113.528 35.1687C103.054 23.3846 88.0012 16.6265 72.2273 16.6265C41.7659 16.6265 16.9845 41.4085 16.9845 71.8693C16.9845 102.327 41.7666 127.107 72.2273 127.107C85.7919 127.107 98.8321 122.147 108.951 113.139C109.105 113.001 110.935 111.237 110.935 111.237L105.543 105.273C105.543 105.273 103.683 107.091 103.571 107.187C94.9319 114.858 83.7994 119.083 72.2273 119.083C46.1912 119.083 25.0103 97.9021 25.0103 71.8693C25.0103 45.8277 46.1912 24.6408 72.2273 24.6408C85.7104 24.6408 98.5794 30.422 107.537 40.5016C108.243 41.2991 108.631 42.3229 108.631 43.384C108.631 45.789 106.681 47.7448 104.284 47.7448C103.054 47.7448 101.874 47.2231 101.052 46.3128C93.7546 38.0715 83.2505 33.3433 72.2273 33.3433C50.9867 33.3433 33.7081 50.626 33.7081 71.8693C33.7081 93.1113 50.9874 110.393 72.2273 110.393C82.4088 110.393 91.9958 106.469 99.2241 99.3409C101.592 97.1412 104.67 95.9292 107.893 95.9292C114.93 95.9292 120.658 101.659 120.658 108.7C120.658 111.982 119.413 115.098 117.151 117.476C105.036 129.46 89.0148 136.06 72.0398 136.06C36.7455 136.06 8.03266 107.338 8.03266 72.0337C8.03266 36.7407 36.7455 8.02787 72.0398 8.02787C92.4299 8.02787 111.778 17.8778 123.804 34.3779L124.043 34.7311L130.546 30.0083L130.286 29.6516C116.755 11.0843 94.9809 0 72.0398 0C32.3175 0 0 32.3147 0 72.035C0 111.766 32.3175 144.09 72.0398 144.09C91.1588 144.09 109.202 136.652 122.872 123.121L122.93 123.037C126.635 119.166 128.675 114.075 128.675 108.701C128.675 97.2369 119.353 87.9101 107.893 87.9101Z" />
      </svg>
    </Flex>
  );
};

export const MenuLogo: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00D2B3" width="32px">
      <g data-name="Layer 2">
        <g data-name="menu">
          <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
          <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
        </g>
      </g>
    </svg>
  );
};
