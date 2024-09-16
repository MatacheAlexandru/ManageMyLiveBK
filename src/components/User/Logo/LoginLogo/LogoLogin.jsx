import React, { useState, useEffect } from "react";

import styles from "./LogoLogin.module.css";
const Logo = () => {
  const [active, setActive] = useState(false);

  // Activează animația după ce componenta este montată
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 200); // Poți ajusta timpul
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      version="1.1"
      viewBox="0 0 2048 901"
      max-width="800px"
      max-height="400px"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? styles.active : styles.svgDefault}
    >
      <path
        transform="translate(420,15)"
        d="m0 0h116l9 2 6 4 5 6 2 5 2 18 4 59 1 7 10 4 30 10 30 13 2 2v5l-11 14-14 19-14 18-12 16-3 3-6-1-19-7-23-6-22-4-9-1h-47l-23 3-26 6-20 7-18 8-21 11-16 11-13 10-13 12-16 16-11 14-10 14-11 19-8 16-10 25-6 22-4 23-2 21v18l2 26 4 23 6 22 9 24 8 16 9 16 12 17 8 10 9 10 7 8 8 7 11 10 19 14 13 8 21 11 20 8 23 7 25 5 17 2h40l27-4 22-5 26-9 2-1h7l9 11 36 48 9 13-5 5-19 9-27 10-22 7-4 50-2 28-2 9-5 8-8 5-4 1h-109l-15-1-9-6-4-6-2-9-5-73-1-6-36-12-24-10-29-15-5 1-13 12-11 9-12 11-11 9-11 10-8 4-10 1-8-3-8-7-78-78-4-8-1-10 3-8 12-14 9-10 9-11 11-12 9-11 4-5-1-6-9-16-9-19-10-26-7-24v-2l-34-2-52-4-8-5-6-7-1-3v-126l4-8 7-6 7-2 39-3 41-3 3-3 12-36 9-21 8-16 7-13-1-6-7-7-9-11-10-11-9-11-12-13-7-10-2-7 1-10 6-9 81-81 8-4h12l8 4 14 12 11 10 11 9 12 11 13 10h5l16-9 25-12 28-10 17-5 2-6 4-62 2-17 4-8 5-5z"
        fill="#2484FA"
        className={styles.svgelem1}
      ></path>
      <path
        transform="translate(332,328)"
        d="m0 0h26l6 7 10 15 16 23 10 15 5 7v3l4-4 25-37 11-16 9-13h26l1 1v136h-31l-1-78-8 10-23 34h-23l-8-11-10-15-13-19-2-1 1 7v72l-1 1h-30l-1-2v-134z"
        fill="#FDFDFD"
        className={styles.svgelem2}
      ></path>
      <path
        transform="translate(1273,328)"
        d="m0 0h27l8 11 16 24 8 11 10 15 5 7 2 1 2-4 25-37 9-13 8-12 3-3h26l1 1v135l-1 1h-30l-1-1v-76l1-2-5 5-9 12-18 27-1 1h-23l-30-44-1-1-1 79h-31z"
        fill="#FDFDFD"
        className={styles.svgelem3}
      ></path>
      <path
        transform="translate(999,325)"
        d="m0 0h25l14 3 12 5 13 9 7 7 7 11 4 9v4h-33l-10-11-8-5-11-3h-11l-9 2-8 4-8 7-6 10-3 11v18l4 12 7 10 10 7 9 3h18l11-4 9-6 6-10 2-7h-44v-24h78l1 6-1 16-4 15-7 14-8 10-9 8-16 8-12 3-6 1h-21l-15-4-16-8-9-7-9-11-7-14-3-11-1-7v-20l4-17 8-16 11-12 13-9 13-5z"
        fill="#FEFEFE"
        className={styles.svgelem4}
      ></path>
      <path
        transform="translate(657,328)"
        d="m0 0h26l5 5 10 14 26 36 12 17 6 9 1-81h30l1 1v107l1 27-1 2h-26l-8-9-13-19-12-16-12-17-13-19h-2v80h-31l-1-36v-100z"
        fill="#FEFEFE"
        className={styles.svgelem5}
      ></path>
      <path
        transform="translate(846,328)"
        d="m0 0h31l5 10 15 38 23 58 11 27v4h-33l-5-10-4-12-4-1h-27l-23 1-9 22h-34l3-10 11-27 19-48 15-38 5-13zm15 42-8 19-9 24v3h36l-3-10-14-36z"
        fill="#FDFDFD"
        className={styles.svgelem6}
      ></path>
      <path
        transform="translate(553,328)"
        d="m0 0h31l5 10 20 51 12 30 16 41 2 5h-34l-5-10-4-11v-2h-55l-1 5-6 16-2 2h-32l-1-2 12-30 27-68 14-36zm15 41-5 12-10 27-3 8h37l-1-5-15-39-1-3z"
        fill="#FDFDFD"
        className={styles.svgelem7}
      ></path>
      <path
        transform="translate(1924,327)"
        d="m0 0h89l1 1v25l-1 1h-59l1 28h53v27h-54v29h59l3 2v24l-1 1h-91l-1-1v-136z"
        fill="#FEFEFE"
        className={styles.svgelem8}
      ></path>
      <path
        transform="translate(1110,327)"
        d="m0 0h89v27h-59v28h53l1 1v26h-54v29h59l2 1v26h-92v-137z"
        fill="#FEFEFE"
        className={styles.svgelem9}
      ></path>
      <path
        transform="translate(1812,328)"
        d="m0 0h87v28h-55l1 34 48 1 1 5v20l-1 1h-49v48h-31l-1-6z"
        fill="#FEFEFE"
        className={styles.svgelem10}
      ></path>
      <path
        transform="translate(1441,328)"
        d="m0 0h35l6 9 15 29 9 16 3-4 15-28 12-22h36l-8 16-8 14-14 25-14 24-5 9-1 49h-31l-1-47-10-19-14-24-12-22-12-21z"
        fill="#FEFEFE"
        className={styles.svgelem11}
      ></path>
      <path
        transform="translate(1636,328)"
        d="m0 0h31l1 57 1 1v18l-1 8v23l59 1 1 15v13l-1 1h-90l-1-1-1-84-1-1v-28l1-1z"
        fill="#FAFCFD"
        className={styles.svgelem12}
      ></path>
      <path
        transform="translate(1749,328)"
        d="m0 0h31v137h-31l-1-1v-135z"
        fill="#FEFEFE"
        className={styles.svgelem13}
      ></path>
      <path
        transform="translate(639,633)"
        d="m0 0h10l8 11 10 15h2l9-12 8-12 2-2h10v54h-12v-31l-4 4-9 13h-9l-12-16-1 30h-12l-1-3v-50z"
        fill="#2484FA"
        className={styles.svgelem14}
      ></path>
      <path
        transform="translate(1006,631)"
        d="m0 0h9l10 3 8 6 5 8v2h-13l-7-6-10-1-8 4-3 4-1 3v12l3 6 5 4 3 1h8l6-3 4-5 1-3h-17v-9l30-1v11l-4 10-8 8-7 3-5 1h-9l-11-4-7-6-4-8-1-3v-16l3-8 6-7 10-5z"
        fill="#2484FA"
        className={styles.svgelem15}
      ></path>
      <path
        transform="translate(1034,526)"
        d="m0 0h12l11 4 6 5 5 9 1 3v16l-5 10-8 7-11 4h-9l-12-4-6-5-6-12-1-11 2-9 6-9 9-6zm1 12-7 4-3 5-1 4v9l4 8 7 4h12l7-5 3-7v-11l-5-8-6-3z"
        fill="#2484FA"
        className={styles.svgelem16}
      ></path>
      <path
        transform="translate(434,526)"
        d="m0 0h11l11 4 7 6 5 10 1 11-2 10-6 9-7 5-10 3h-8l-10-3-6-4-6-7-3-8v-14l4-10 4-5 8-5zm0 12-7 4-4 8v10l3 6 6 5 2 1h12l7-5 3-6v-12l-3-6-5-4-3-1z"
        fill="#2484FA"
        className={styles.svgelem17}
      ></path>
      <path
        transform="translate(819,633)"
        d="m0 0h10l7 9 13 18 4 4v-30l1-1h11v54h-10l-7-9-12-17-4-5-1 31h-12l-1-6v-47z"
        fill="#2484FA"
        className={styles.svgelem18}
      ></path>
      <path
        transform="translate(1111,527)"
        d="m0 0 5 1 10 14 11 16 2 1v-31l11-1 1 1 1 53-1 1h-10l-12-16-8-12-3-3-1 31h-12v-54z"
        fill="#2484FA"
        className={styles.svgelem19}
      ></path>
      <path
        transform="translate(863,527)"
        d="m0 0h20l10 2 8 7 2 5v10l-4 8-5 4 2 5 7 12v2h-13l-10-16h-7l-1 4v12h-12l-1-9v-44zm9 11-1 1v15l1 1h13l5-4 1-2v-6l-3-4-3-1z"
        fill="#2484FA"
        className={styles.svgelem20}
      ></path>
      <path
        transform="translate(591,527)"
        d="m0 0h19l10 2 7 6 3 7v9l-4 8-5 5 6 11 3 5v2h-13l-9-15v-2h-9v17h-12v-54zm8 11v17h13l4-2 2-4v-6l-3-4-3-1z"
        fill="#2484FA"
        className={styles.svgelem21}
      ></path>
      <path
        transform="translate(1147,633)"
        d="m0 0h29l8 4 4 5 2 5v10l-5 8-4 3 2 5 7 12v2h-13l-9-15-1-1-8-1v17h-12zm12 10v17h14l5-6v-6l-3-4-3-1z"
        fill="#2484FA"
        className={styles.svgelem22}
      ></path>
      <path
        transform="translate(952,526)"
        d="m0 0h11l8 3 6 7 2 7-1 1h-11l-3-6-2-1h-8l-4 2-1 4 3 3 10 4 11 4 5 6 2 9-3 7-7 6-7 2h-9l-11-4-5-6-1-2v-6l2-1h8l4 5v2l4 1h7l4-1v-8l-7-3-12-4-6-4-3-3-1-3v-10l4-6 7-4z"
        fill="#2484FA"
        className={styles.svgelem23}
      ></path>
      <path
        transform="translate(1208,527)"
        d="m0 0h8l3 3 20 50v2h-12l-4-8-23-1-1 5-2 4h-12l1-6 14-35 5-12zm3 17-5 12-1 7h14l-1-6-5-13z"
        fill="#2484FA"
        className={styles.svgelem24}
      ></path>
      <path
        transform="translate(714,527)"
        d="m0 0h17l11 2 7 5 4 8v10l-4 8-5 4-9 3-12 1v11l-1 3h-12v-54zm10 11-2 2v16l1 1h10l6-3 2-9-3-5-4-2z"
        fill="#2484FA"
        className={styles.svgelem25}
      ></path>
      <path
        transform="translate(920,633)"
        d="m0 0h11l5 10 16 40 1 4-10 1-4-4-2-5h-22l-4 8h-12l2-9 14-35 4-9zm5 16-5 12-2 7h15l-3-10-3-9z"
        fill="#2484FA"
        className={styles.svgelem26}
      ></path>
      <path
        transform="translate(511,527)"
        d="m0 0h4l1 16v16l2 9 3 3h10l4-4 1-4 1-35 11-1 1 1v36l-3 10-7 7-9 3h-8l-10-4-6-7-2-5v-40z"
        fill="#2484FA"
        className={styles.svgelem27}
      ></path>
      <path
        transform="translate(753,633)"
        d="m0 0h11l11 27 10 25v2h-12l-3-9-23 1-4 8h-12l1-5 15-38 4-9zm4 17-7 17v1h16l-6-17z"
        fill="#2484FA"
        className={styles.svgelem28}
      ></path>
      <path
        transform="translate(1583,527)"
        d="m0 0h27l1 1v9l-1 1h-22v11h20l1 1v9l-21 1v12h23l1 1v9h-37v-54z"
        fill="#2484FA"
        className={styles.svgelem29}
      ></path>
      <path
        transform="translate(796,527)"
        d="m0 0h25l2 1v9l-1 1-22 1-1 10h21l1 1v9l-21 1-1 12h25v10h-37v-54z"
        fill="#2484FA"
        className={styles.svgelem30}
      ></path>
      <path
        transform="translate(1075,633)"
        d="m0 0h35l1 1v8l-1 1h-23v11l21 1v9l-2 1h-19v12h24l1 10h-37z"
        fill="#2484FA"
        className={styles.svgelem31}
      ></path>
      <path
        transform="translate(1510,527)"
        d="m0 0h29l1 1v10l-11 1h-11v14h14l6 1v9l-1 1h-19v18h-12v-54z"
        fill="#2484FA"
        className={styles.svgelem32}
      ></path>
      <path
        transform="translate(330,528)"
        d="m0 0h13l11 20h2l11-20h14l-8 15-10 17-1 3-1 19h-12l-1-21-12-21-6-10z"
        fill="#2484FA"
        className={styles.svgelem33}
      ></path>
      <path
        transform="translate(1394,527)"
        d="m0 0 4 1v43h24v10l-1 1h-35l-1-6 1-48z"
        fill="#2484FA"
        className={styles.svgelem34}
      ></path>
      <path
        transform="translate(1272,528)"
        d="m0 0h12v43h23l1 1v10h-36z"
        fill="#2484FA"
        className={styles.svgelem35}
      ></path>
      <path
        transform="translate(1463,527)"
        d="m0 0 5 1v53l-1 1h-11l-1-1v-49l1-4z"
        fill="#2484FA"
        className={styles.svgelem36}
      ></path>
    </svg>
  );
};

export default Logo;
