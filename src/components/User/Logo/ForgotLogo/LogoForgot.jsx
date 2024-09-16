import React, { useState, useEffect } from "react";
import styles from "./LogoForgot.module.css";

const LogoForgot = () => {
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
      viewBox="0 0 2048 928"
      max-width="300px"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? styles.active : styles.svgDefault}
    >
      <path
        transform="translate(427,32)"
        d="m0 0h120l8 3 6 5 4 8 2 16 4 58 1 10 6 3 33 11 24 10 8 4 2 4-8 11-16 21-12 16-13 17-6 7-6-1-19-7-22-6-30-5-9-1h-27l-23 2-23 4-21 6-20 7-19 9-17 10-20 14-15 13-11 10-7 8-11 13-12 17-12 21-11 23-9 27-5 22-3 24v37l3 26 6 26 9 26 12 25 11 18 10 14 11 13 9 10 8 8 8 7 18 14 17 11 18 10 19 8 24 8 27 6 19 2h41l32-5 23-6 22-8h6l11 14 32 42 10 14 1 3-5 4-27 12-36 12-5 2-5 69-2 16-5 8-6 5-5 2h-124l-8-4-6-8-2-6-3-39-3-44-16-4-25-9-25-11-23-12-5 1-14 13-11 9-11 10-8 7-14 12-8 4h-13l-8-4-62-62-4-5-8-7-8-8-5-10v-10l3-7 9-11 9-10 9-11 11-12 9-11 6-7-1-7-9-16-9-20-9-23-8-26-4-1-81-6-8-5-6-7-1-3v-127l6-9 8-5 17-2 58-4 9-1 2-1 12-36 10-24 14-27-1-7-9-9-9-11-11-12-9-11-11-12-5-8-1-4v-9l3-8 9-10 43-43h2v-2l5-4 7-8 10-9 4-5 8-6 5-2h10l9 4 10 9 11 9 12 11 11 9 11 10 5 4 7-1 27-14 24-10 28-9 6-2 1-3 5-69 2-14 3-6 8-7z"
        fill="#5CE4E8"
        className={styles.svgelem1}
      ></path>
      <path
        transform="translate(347,343)"
        d="m0 0h10l10 1 10 14 10 15 16 23 11 16 9-12 9-14 16-23 11-16 2-3 5-1h12l10 1 1 1v134l-1 1h-30l-1-1v-78l-4 5-14 20-13 20h-24l-10-15-14-20-6-9-2-1v79h-30l-1-1v-135z"
        fill="#FDFDFD"
        className={styles.svgelem2}
      ></path>
      <path
        transform="translate(1287,343)"
        d="m0 0 18 1 22 32 17 25 8 11 10-14 8-12 11-16 17-25 6-2h12l10 1 1 16-1 3 1 2v114l-1 1h-31l-1-79-8 12-12 17-7 11-4 5h-23l-30-44-1-1-1 79h-30l-1-1v-135z"
        fill="#FDFDFD"
        className={styles.svgelem3}
      ></path>
      <path
        transform="translate(1007,340)"
        d="m0 0h19l15 3 13 5 11 7 10 9 8 13 3 7v4h-34l-7-9-5-4-9-4-4-1h-17l-11 4-8 6-7 9-4 13-1 5v11l4 14 6 9 8 7 8 4 9 2 14-1 11-4 9-7 6-10 1-4-1-1h-41l-1-1-1-23 1-1h77l1 1v13l-3 17-5 13-6 10-9 10-7 6-14 7-12 3-8 1h-17l-15-3-12-5-9-6-10-9-7-10-5-10-4-16-1-13 2-18 5-14 6-11 9-10 10-8 13-6z"
        fill="#FDFDFD"
        className={styles.svgelem4}
      ></path>
      <path
        transform="translate(674,343)"
        d="m0 0 17 1 11 15 26 36 12 17 6 9 3-1v-76h31l1 10v125l-1 1h-26l-6-7-12-17-14-19-12-17-13-18h-2l-1 78h-30l-1-1v-135z"
        fill="#FDFCFC"
        className={styles.svgelem5}
      ></path>
      <path
        transform="translate(853,343)"
        d="m0 0h18l13 1 14 35 17 43 15 38 7 17v3h-33l-5-10-4-11v-2l-54 1-8 21-2 1h-32l-1-2 32-80 18-46 4-8zm14 41-9 23-8 21-1 3 1 1h36l-1-6-8-20-8-21z"
        fill="#FDFDFD"
        className={styles.svgelem6}
      ></path>
      <path
        transform="translate(564,343)"
        d="m0 0h15l13 1 41 103 12 30v3h-32l-3-2-7-19v-2l-54 1-8 21-2 1h-32l-1-2 11-27 16-40 22-56 4-10zm11 41-10 26-8 21 1 1h36l1-2-7-16-11-29z"
        fill="#FDFDFD"
        className={styles.svgelem7}
      ></path>
      <path
        transform="translate(1925,343)"
        d="m0 0h90v26l-58 1v27l53 1v26l-53 1-1 28h61v27h-92z"
        fill="#FDFDFD"
        className={styles.svgelem8}
      ></path>
      <path
        transform="translate(1114,343)"
        d="m0 0h89l1 5v21h-59v29h53l1 1v24l-1 1h-53v29h60l1 1v25l-1 1h-91l-1-105z"
        fill="#FDFDFD"
        className={styles.svgelem9}
      ></path>
      <path
        transform="translate(1835,343)"
        d="m0 0 66 1v27l-5 1h-50l1 33 48 1 1 4v22l-1 1h-49v46l-1 1h-29l-1-1-1-18v-106l1-11z"
        fill="#FDFDFD"
        className={styles.svgelem10}
      ></path>
      <path
        transform="translate(1459,343)"
        d="m0 0h14l8 1 18 34 10 18v2l2-1 6-12 12-22 10-19 4-1h29l3 2-8 15-9 16-14 25-14 24-3 5-1 20-2 2 2 2v25l-1 1h-30l-1-1-1-47-6-11-16-29-26-46v-2z"
        fill="#FDFDFD"
        className={styles.svgelem11}
      ></path>
      <path
        transform="translate(1640,343)"
        d="m0 0h24l7 1v106h48l11 1v28l-1 1h-89l-1-1v-135z"
        fill="#FDFDFD"
        className={styles.svgelem12}
      ></path>
      <path
        transform="translate(1761,343)"
        d="m0 0h10l11 1 1 135-2 1h-26l-4-1v-135z"
        fill="#FDFDFD"
        className={styles.svgelem13}
      ></path>
      <path
        transform="translate(646,647)"
        d="m0 0h9l5 5 10 15 3 5v2l4-2 16-24 1-1h10l1 1v51l-5 2-7 1-1-1-1-30-10 15-3 2h-7l-4-4-7-11v-2h-2v30l-2 1h-10l-1-1v-53z"
        fill="#FEBC59"
        className={styles.svgelem14}
      ></path>
      <path
        transform="translate(1111,542)"
        d="m0 0h9l8 10 14 20 1 1 1-30 1-1h10l2 1v53l-1 1h-10l-8-10-12-17-2-5h-2v32h-12l-1-1v-46l1-7z"
        fill="#FFBC59"
        className={styles.svgelem15}
      ></path>
      <path
        transform="translate(1008,646)"
        d="m0 0h16l9 4 7 6 3 5v4h-12l-7-6-3-1h-9l-6 3-4 6-1 10 2 7 5 5 5 2h7l7-3 4-7-17-1v-9h31v8l-3 9-4 6-7 6-9 3h-12l-10-4-7-6-4-8-1-3v-15l4-10 7-7z"
        fill="#FEBC59"
        className={styles.svgelem16}
      ></path>
      <path
        transform="translate(439,541)"
        d="m0 0h16l9 4 8 7 4 9 1 10-3 12-6 8-5 4-9 3h-15l-12-6-6-8-3-9v-11l3-9 9-10zm2 12-6 4-4 8v9l4 8 6 4 9 1 7-3 5-5 1-3v-13l-4-6-6-4z"
        fill="#FEBC59"
        className={styles.svgelem17}
      ></path>
      <path
        transform="translate(825,647)"
        d="m0 0h10l6 7 12 17 5 7 1-31h12l1 2v52l-2 1h-9l-10-13-13-19-1 31-1 1h-11l-1-1v-53z"
        fill="#FEBC59"
        className={styles.svgelem18}
      ></path>
      <path
        transform="translate(1038,541)"
        d="m0 0h15l10 4 5 4 5 8 2 6v12l-4 11-8 8-10 4h-16l-10-5-7-8-3-8-1-9 2-10 6-9 8-6zm2 12-5 3-4 5-2 7 1 8 4 6 5 4 9 1 8-3 5-6 1-4v-10l-3-6-5-4-3-1z"
        fill="#FEBC59"
        className={styles.svgelem19}
      ></path>
      <path
        transform="translate(1152,647)"
        d="m0 0h27l9 3 5 6 2 5v10l-4 8-4 3 1 5 7 12v3h-13l-8-13-2-3-8-1v16l-1 1h-11l-1-1v-53zm20 10-8 1v16h13l5-4 1-7-5-5z"
        fill="#FFBC59"
        className={styles.svgelem20}
      ></path>
      <path
        transform="translate(595,542)"
        d="m0 0h25l9 3 5 4 3 6v11l-4 8-5 5 9 15v3h-13l-6-9-4-7-8-1v17h-12l-1-1v-53zm11 11v16l9 1 6-2 3-3v-8l-3-3-2-1z"
        fill="#FFBC59"
        className={styles.svgelem21}
      ></path>
      <path
        transform="translate(866,542)"
        d="m0 0h26l9 3 5 4 3 7v10l-3 6-5 5v4l8 13v3h-13l-6-9-4-7-8-1v16l-1 1h-11l-1-1v-53zm12 11v16l2 1h7l7-3 2-2 1-6-2-4-3-2z"
        fill="#FEBC59"
        className={styles.svgelem22}
      ></path>
      <path
        transform="translate(955,541)"
        d="m0 0h15l8 4 5 6 1 2v6h-11l-4-6-2-1h-8l-3 2v5l4 3 17 6 6 5 2 4v9l-4 7-6 4-3 1h-16l-8-4-5-6-1-8h12l4 6 1 1h9l3-2v-6l-9-4-12-4-5-4-3-7 1-9 4-6z"
        fill="#FEBC59"
        className={styles.svgelem23}
      ></path>
      <path
        transform="translate(925,647)"
        d="m0 0h12l5 10 13 33 4 11-1 1h-12l-4-9h-22l-2 7-2 2h-10l-2-1 3-9 16-41zm5 18-6 15v2l13 1 1-4-5-13z"
        fill="#FEBC59"
        className={styles.svgelem24}
      ></path>
      <path
        transform="translate(759,647)"
        d="m0 0h11l5 10 15 38 2 6-2 1h-11l-4-9h-21l-4 8-1 1h-11l-1-3 20-50zm4 18-6 15v2l13 1 1-4-5-12-1-2z"
        fill="#FEBC59"
        className={styles.svgelem25}
      ></path>
      <path
        transform="translate(1212,542)"
        d="m0 0h9l3 3 20 50v2h-13l-4-8-2-1h-20l-3 9h-13l1-5 15-38 5-11zm4 17-4 9-3 9 1 1h13l-1-7-5-12z"
        fill="#FEBC59"
        className={styles.svgelem26}
      ></path>
      <path
        transform="translate(717,542)"
        d="m0 0h24l10 3 6 5 3 7v9l-4 8-6 5-5 2-14 1h-1l-1 15h-12l-1-10v-44zm12 11v18h12l5-4 1-8-4-5-2-1z"
        fill="#FFBC59"
        className={styles.svgelem27}
      ></path>
      <path
        transform="translate(516,542)"
        d="m0 0 7 1 1 35 3 6 4 2 8-1 3-4 1-4 1-34 1-1h10l1 1v39l-5 10-7 5-4 1h-15l-8-5-4-5-3-12v-25l5-6z"
        fill="#FEBC59"
        className={styles.svgelem28}
      ></path>
      <path
        transform="translate(1581,542)"
        d="m0 0h32l2 1-1 9-1 1h-22v10l21 1v10l-20 1-1 11h22l2 1v10h-36l-1-1v-52z"
        fill="#FEBC59"
        className={styles.svgelem29}
      ></path>
      <path
        transform="translate(795,542)"
        d="m0 0h32l2 1v9l-1 1h-22v10l21 1v10h-21v12h23l1 1v10h-37v-54z"
        fill="#FEBC59"
        className={styles.svgelem30}
      ></path>
      <path
        transform="translate(1080,647)"
        d="m0 0h35l1 1v9l-5 1h-19l1 9 2 1 19 1v9l-1 1h-20l-1 12h24l1 1v9l-2 1h-35z"
        fill="#FEBC5A"
        className={styles.svgelem31}
      ></path>
      <path
        transform="translate(1511,542)"
        d="m0 0h29l4 1v10l-8 1h-13l-1 14h20v10l-19 1-1 17-1 1h-11l-1-1v-52z"
        fill="#FEBC59"
        className={styles.svgelem32}
      ></path>
      <path
        transform="translate(338,542)"
        d="m0 0h12l4 5 8 15h2l11-20h13l-1 5-16 28-1 2-1 20h-12l-1-19-18-33z"
        fill="#FFBC59"
        className={styles.svgelem33}
      ></path>
      <path
        transform="translate(1390,542)"
        d="m0 0h11l1 1v42h24v11l-1 1h-35l-1-1v-52z"
        fill="#FEBC59"
        className={styles.svgelem34}
      ></path>
      <path
        transform="translate(1277,542)"
        d="m0 0h11l1 1v42h23l1 3v8l-1 1h-36v-54z"
        fill="#FEBC59"
        className={styles.svgelem35}
      ></path>
      <path
        transform="translate(1460,542)"
        d="m0 0h10l2 1v50l-4 3-9 1v-54z"
        fill="#FEBC59"
        className={styles.svgelem36}
      ></path>
    </svg>
  );
};

export default LogoForgot;
