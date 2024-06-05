import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const handleMenuToggle = (toggled) => {
    setOpen(toggled);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };


  return (
    <>
      <header>
        <div className="container bg-top">
          <div className="logo">
            <Link href="/" className="flex">
              <img
                src="https://res.cloudinary.com/dh4qhdszo/image/upload/f_auto,q_auto/v1/mgstucson/judabg9vb8iglopwjo1e"
                alt="mgs"
              />
              <TitleLogo title="MGS" caption="7" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link href="/" className={activeLink == "/" ? "activeLink" : ""}>
              Home
            </Link>
            <Link
              href="/about"
              className={activeLink == "/about" ? "activeLink" : ""}
            >
              About Us
            </Link>
            <Link
              href="/team"
              className={activeLink == "/team" ? "activeLink" : ""}
            >
              Team
            </Link>
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : ""}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={activeLink == "/projects" ? "activeLink" : ""}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className={activeLink == "/blogs" ? "activeLink" : ""}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : ""}
            >
              Contact
            </Link>
            <Link
              href="/auth/login"
              className='button-primary'
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </nav>
          <button className="menu-toggle">
            <Hamburger
              toggled={open}
              toggle={handleMenuToggle}
              duration={0.8}
              color="#ffe"
            />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="blur-background active"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={activeLink == "/" ? "activeLink item" : "item"}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className={activeLink == "/about" ? "activeLink item" : "item"}
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  onClick={handleLinkClick}
                  className={activeLink == "/team" ? "activeLink item" : "item"}
                >
                  Team
                </Link>
                <Link
                  href="/services"
                  onClick={handleLinkClick}
                  className={
                    activeLink == "/services" ? "activeLink item" : "item"
                  }
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  onClick={handleLinkClick}
                  className={
                    activeLink == "/projects" ? "activeLink item" : "item"
                  }
                >
                  Projects
                </Link>
                <Link
                  href="/blogs"
                  onClick={handleLinkClick}
                  className={activeLink == "/blogs" ? "activeLink item" : "item"}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className={
                    activeLink == "/contact" ? "activeLink item" : "item"
                  }
                >
                  Contact
                </Link>
              </div>
              <Link
                  href="/auth/login"
                  onClick={handleLinkClick}
                  className='button-primary'
                >
                 Login
                </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
