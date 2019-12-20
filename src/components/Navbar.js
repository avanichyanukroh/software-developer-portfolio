import React, { forwardRef } from 'react';

const styles = {
    links: {
        margin: '16px 32px'
    }
}

const Navbar = forwardRef((props, ref) => {
    return (
        <nav
            className={props.navbarSticky ? 'navbar-sticky' : 'navbar'}
            ref={ref}
        >
            <a href="#" style={styles.links}>About Me</a>
            <a href="#" style={styles.links}>Portfolio</a>
            <a href="#" style={styles.links}>Skills</a>
            <a href="#" style={styles.links}>Contact</a>
        </nav>
    );
});

export default Navbar;
