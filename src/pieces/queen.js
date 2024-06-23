const Queen = ({ theme }) => {
  return (
    <svg
      width='121'
      height='112'
      viewBox='0 0 121 112'
      className='chess-piece'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.4402 75.8144L32.2806 88.6442L26.4774 89.6709C25.0444 89.9244 24 91.1697 24 92.625V105.75C24 107.407 25.3431 108.75 27 108.75L93.6346 108.75C94.4303 108.75 95.1933 108.434 95.7559 107.871C96.3185 107.309 96.6346 106.546 96.6346 105.75V92.625C96.6346 91.1681 95.5879 89.9218 94.1529 89.6701L88.2275 88.6309L96.0598 75.8144C96.1981 75.5881 96.3058 75.3446 96.38 75.09L105.449 43.9962C105.549 43.9987 105.649 44 105.75 44C112.239 44 117.5 38.7394 117.5 32.25C117.5 25.7607 112.239 20.5 105.75 20.5C99.2607 20.5 94 25.7607 94 32.25C94 34.4532 94.608 36.5163 95.6629 38.2784L83.2714 49.0408L80.3806 25.6555C84.701 23.9185 87.75 19.6919 87.75 14.75C87.75 8.26065 82.4893 3 76 3C69.5107 3 64.25 8.26065 64.25 14.75C64.25 18.6264 66.1264 22.0601 69.0156 24.199L60.25 44.0676L51.4844 24.199C54.3736 22.0601 56.25 18.6264 56.25 14.75C56.25 8.26065 50.9893 3 44.5 3C38.0107 3 32.75 8.26065 32.75 14.75C32.75 19.6919 35.799 23.9185 40.1194 25.6555L37.2286 49.0408L24.8371 38.2784C25.892 36.5163 26.5 34.4532 26.5 32.25C26.5 25.7607 21.2393 20.5 14.75 20.5C8.26065 20.5 3 25.7607 3 32.25C3 38.7394 8.26065 44 14.75 44C14.8506 44 14.9509 43.9987 15.051 43.9962L24.12 75.09C24.1942 75.3446 24.3019 75.5881 24.4402 75.8144Z'
        fill={theme.primary}
        stroke={theme.secondary}
        strokeWidth='6'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Queen;
