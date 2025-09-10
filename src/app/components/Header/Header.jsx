'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/menu', label: 'Меню' },
    { href: '/gallery', label: 'Галерея' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo} onClick={closeMenu}>
          <Image
            src='/images/icons/logo_m_b.svg'
            alt='Логотип'
            width={180}
            height={60}
            className={styles.logoImage}
          />
        </Link>

        {/* Навигация для десктопа */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка мобильного меню с анимацией */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label='Открыть меню'
          aria-expanded={isMenuOpen}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Мобильное меню */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ''
          }`}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.mobileNavItem}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Оверлей для мобильного меню */}
        {isMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;
