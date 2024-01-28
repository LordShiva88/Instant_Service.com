import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import styles from "./Navbar.module.css";
import HomeAdress from "../ui/home/HomeAdress";

function Navbar() {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Services",
      pathname: "/service",
    },
    {
      route: "Shop",
      pathname: "/shop",
    },
    {
      route: "Blogs",
      pathname: "/blogs",
    },
    {
      route: "About Us",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <div>
      <HomeAdress />
      <div className="bg-base-100">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[1] w-96 menu bg-white "
              >
                {navItems.map((item, index) => (
                  <div key={index} className="inline-block mr-4 uppercase">
                    <Link href={item.pathname}>
                      <li className={`${styles.pageLink}`}>{item.route}</li>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <Image src={logo} alt="Logo" width={100} height={100} />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            {navItems.map((item, index) => (
              <div key={index} className="inline-block mr-4 uppercase">
                <Link href={item.pathname}>
                  <li className={`${styles.pageLink}`}>{item.route}</li>
                </Link>
              </div>
            ))}
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
