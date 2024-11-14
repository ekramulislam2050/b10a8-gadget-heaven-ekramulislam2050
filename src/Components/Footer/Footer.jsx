

const Footer = () => {
    return (

        <div>
             <div className="mt-10 text-center">
                 <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                 <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit.    </p>
                 < hr />
             </div>
            <footer className="p-10 mx-auto footer place-items-center">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;