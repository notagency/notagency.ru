import React from 'react';

const Logo = ({theme = 'white'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.39 33.29">
    <path d="M13.82,19.09L19.13,1.7l5.38,17.37L36.92,32.36l-17.73-4L1.47,32.44Z"
          fill="transparent" stroke={theme === 'black' ? '#fff' : '#f70236'}
          strokeMiterlimit="10" />
  </svg>
);

export default React.memo(Logo);