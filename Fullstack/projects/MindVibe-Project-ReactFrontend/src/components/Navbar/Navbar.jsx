import "../../index.css";
import styles from "../Navbar/Navbar.module.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles["navbar"]}>
        <h1 className={styles.logo}
        onClick={() => navigate("/HomePage")}
        >MindVibes</h1>

        <div className={styles["links"]}>
          <a href="/">Home</a>
          <a href="/feelings">Moods</a>
          <a href="#help">Blog</a>
        </div>
        <div className={styles["links"]}>
            <button className={styles["button"]}
            onClick={() => navigate("/UserProfilePage")}>Login</button>
        </div>
    </nav>
  );
}

export default Navbar;