"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ml-3">
          Login
        </Link>
      ) : (
        <>
          <span className="bg-slate-100  border-solid border-blue-500 text-black px-4 py-2 rounded-md hover:bg-slate-200 ml-3 hover:cursor-pointer" onClick={signOut}>
            Logout
          </span>
          <span className="bg-slate-100  border-solid border-blue-500 text-black px-4 py-2 rounded-md hover:bg-slate-200 ml-3 hover:cursor-pointer">
            <Link href="/profile">Profile</Link>
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Roadmap</Link>
          <Link href="/">Quiz</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;