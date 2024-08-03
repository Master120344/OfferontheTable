/* General Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
}

header h1 {
    margin: 0;
    font-size: 28px;
    display: inline-block;
    color: #ff6f61;
}

header nav {
    display: inline-block;
    float: right;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
}

header nav ul li a:hover {
    color: #ff6f61;
}

header nav ul li a.btn {
    background-color: #ff6f61;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

header nav ul li a.btn:hover {
    background-color: #ff3d2e;
}

.menu-toggle {
    display: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
}

#hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('hero-bg.jpg') no-repeat center center/cover;
    color: #fff;
    padding: 100px 0;
    text-align: center;
}

#hero h2 {
    font-size: 48px;
    margin-bottom: 20px;
    animation: fadeInDown 1s;
}

#hero p {
    font-size: 24px;
    margin-bottom: 30px;
    animation: fadeInUp 1s;
}

#hero .btn {
    background-color: #ff6f61;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    color: #fff;
    animation: pulse 2s infinite;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

#features, #how-it-works, #about-us {
    padding: 50px 0;
}

#features h2, #how-it-works h2, #about-us h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 36px;
    border-bottom: 2px solid #ff6f61;
    display: inline-block;
    padding-bottom: 10px;
}

.features-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.feature {
    text-align: center;
    flex: 1;
    min-width: 250px;
    margin: 15px;
    background-color: #fff;
    border: 2px solid #ff6f61;
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.feature:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.feature i {
    font-size: 48px;
    color: #ff6f61;
    margin-bottom: 10px;
}

#how-it-works ol {
    padding-left: 20px;
    font-size: 18px;
}

#about-us p {
    font-size: 18px;
    line-height: 1.6;
}

footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

footer p {
    font-size: 18px;
    margin-bottom: 20px;
}

footer form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer form input, footer form textarea {
    width: 80%;
    max-width: 500px;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

footer form button {
    background-color: #ff6f61;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

footer form button:hover {
    background-color: #ff3d2e;
}

footer .social {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

footer .social a {
    color: #fff;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s;
}

footer .social a:hover {
    color: #ff6f61;
}

/* Mobile Styles */
@media (max-width: 768px) {
    header nav {
        display: none; /* Hide the default navigation */
    }

    header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .menu-toggle {
        display: block;
    }

    header nav ul {
        flex-direction: column;
        align-items: center;
        display: none; /* Hide the menu */
    }

    header nav ul.showing {
        display: block;
    }

    header nav ul li {
        margin: 10px 0;
    }

    #hero h2 {
        font-size: 36px;
    }

    #hero p {
        font-size: 18px;
    }

    .features-grid {
        flex-direction: column;
        align-items: center;
    }

    .feature {
        margin-bottom: 20px;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 18px;
    }

    #hero h2 {
        font-size: 28px;
    }

    #hero p {
        font-size: 16px;
    }

    #hero .btn {
        padding: 10px 20px;
        font-size: 16px;
    }

    .feature i {
        font-size: 36px;
    }
}

/* Toggle Menu Styles */
.menu-toggle {
    display: none;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    nav ul.showing {
        display: block;
    }
}