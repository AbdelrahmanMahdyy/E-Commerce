import "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import "./header.css";
import { useEffect, useState } from "react";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/Accessories" },
  { title: "Blog", link: "/Blog" },
  { title: "Content", link: "/Content" },
];

function BottomHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [category_list, setcategory_list] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bottom_header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setcategory_list(!category_list)}
            >
              <IoMdMenu />
              <p>Browse Categories</p>
              <IoIosArrowDown />
            </div>
            <div
              className={
                category_list === true
                  ? "category_nav_list active"
                  : "category_nav_list"
              }
            >
              {categories.map((category) => (
                <Link key={category.slug} to={category.slug}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav_links">
            {NavLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>

        <div className="sign_reg_icons">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
