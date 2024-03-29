const LogoSvg: any = ({ classe }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 95 71"
      >
        <rect
          className={classe}
          width="16.811"
          height="68.926"
          x="0.664"
          y="7.769"
          fill="#c2185b"
          stroke="#c2185b"
          rx="8.406"
          transform="rotate(-25 .664 7.77)"
        ></rect>
        <rect
          className={classe}
          width="16.811"
          height="68.926"
          x="28.665"
          y="7.769"
          fill="#c2185b"
          stroke="#c2185b"
          rx="8.406"
          transform="rotate(-25 28.665 7.77)"
        ></rect>
        <rect
          className={classe}
          width="16.811"
          height="16.81"
          x="78.769"
          y="0.664"
          fill="#c2185b"
          stroke="#c2185b"
          rx="8.405"
          transform="rotate(25 78.77 .664)"
        ></rect>
      </svg>
    </>
  );
};

export default LogoSvg;
