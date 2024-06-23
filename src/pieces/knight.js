const Knight = ({ theme }) => {
  return (
    <svg
      width='102'
      height='113'
      viewBox='0 0 102 113'
      className='chess-piece'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M39.3109 13.9107C38.9869 16.2215 38.9671 18.7537 39.5651 21.2231C39.1606 21.3385 38.7661 21.4708 38.3881 21.6225C30.039 24.973 21.4721 33.4204 17.3449 49.9291C16.4025 53.699 14.8185 55.409 12.4379 57.9426C10.0667 60.4662 7.15861 63.5615 4.40648 69.5245C1.10938 76.6682 3.9564 83.8611 9.17233 87.5747C14.5165 91.3797 22.2775 91.5458 28.5017 85.3216C33.9323 79.891 38.6227 77.6709 42.8098 75.6934L43.0092 75.5992C44.8231 74.743 46.6867 73.8633 48.4519 72.7114C46.9942 74.6898 45.002 76.5839 42.3142 78.2084C35.8418 82.1204 32.0267 88.136 29.8699 93.5881C27.7308 98.9954 27.097 104.164 27.2435 106.822C27.3312 108.412 28.6463 109.657 30.239 109.657H95.5054C97.1622 109.657 98.5054 108.313 98.5054 106.657C98.5054 86.0347 97.1528 66.4326 91.964 51.2117C86.8472 36.2021 77.8141 25.0131 62.4095 21.7024L47.2723 4.04731C46.6255 3.29291 45.6471 2.90775 44.6596 3.01879C43.6721 3.12983 42.8036 3.72266 42.3405 4.60188C41.0638 7.02565 39.8089 10.3592 39.3109 13.9107Z'
        fill={theme.primary}
        stroke={theme.secondary}
        strokeWidth='6'
        strokeLinejoin='round'
      />
      <path
        d='M43.2157 45.7158C43.2157 46.9395 42.2237 47.9315 41 47.9315C39.7763 47.9315 38.7842 46.9395 38.7842 45.7158C38.7842 44.492 39.7763 43.5 41 43.5C42.2237 43.5 43.2157 44.492 43.2157 45.7158Z'
        fill={theme.secondary}
        stroke={theme.secondary}
        strokeWidth='6'
      />
    </svg>
  );
};

export default Knight;