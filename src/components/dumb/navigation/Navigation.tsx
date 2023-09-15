import Image from "next/image"
import { useState } from "react";
import styles from './Navigation.module.css';
import Link from "next/link";
export default function Navigation(){

   const [showDropdown, setShowDropdown] = useState(false)

    return <nav className={styles.navbar}>
      <div className={styles.title}><Link data-cy='homepage-link' className="link-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href='/'>Shoppy</Link></div>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownToggle} onClick={(e) => {e.stopPropagation(); setShowDropdown(!showDropdown)}}>
          <Image src='/images/profile.jpeg' 
              alt="Profile Image" width={40} 
              height={40} 
              className="rounded nav-link dropdown-toggle" 
              data-cy="image" />
          </div>
          {showDropdown && (
            <div className={styles.dropdownContent} data-cy="dropdown-menu">
              <div><i className="bi bi-person-fill"></i> Profile</div>
              <div><i className="bi bi-gear-fill"></i> Settings</div>
              <div><i className="bi bi-cart-fill"></i> Cart</div>
            </div>
          )}
      </div>
    </nav>
}