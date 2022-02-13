import './Footer.css'

function Footer(){
    return (
        <>
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
            </head>
            <body>
                <footer class="footer">
                    <p className="author"> &copy; <span>Mohammad Aladarbeh</span></p>
                    <div className="link">
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter" ></i>
                    </div>
                </footer>
            </body>
        </html>
            
        </>
    );
}

export default Footer;