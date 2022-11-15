export default function Footer() {
    let footerStyle = {
        position: "relative",
        width: "100%",
        top: "60vh",
        color: "white"
    }
    return (
        <footer className="bg-dark text-center text-lg-start" style={footerStyle}>
            <div className="text-center p-3">
                ©2022 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">MyApp.com</a>
            </div>
        </footer>
    )
}