import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const copy = <i className="far fa-copy"></i>;


function ListItem({rgb,hex}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (hexVal) => {
    navigator.clipboard.writeText(hexVal);
  }
  return (
    <li className={styles.colorName} style={{ background: rgb}}>
      <span onClick={(e) => {
        copyToClipboard(hex);
        setCopied(true);
        setTimeout(()=> {setCopied(false)} ,1000)
      }}>
        {copied ? "Copied!" : hex} {copy}
      </span>
    </li>

  )
}

export default ListItem