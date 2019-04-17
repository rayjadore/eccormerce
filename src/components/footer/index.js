import React,{ Component } from 'react';

export const Footer = ({ }) =>(
    <footer className="site__footer">
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="footer__widgets">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-4 col-sm-6 footer__aboutus">
                                <div className="footer-aboutus"><div className="footer-aboutus__title">
                                    <h4 className="footer-aboutus__header decor-header">About Us</h4>
                                </div>
                                <div className="footer-aboutus__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.
                                 Ut a lectus magna. Mauris sed coqut odio.
                                </div>
                                <ul className="footer-aboutus__contacts">
                                    <li className="footer-aboutus__contacts-item">
                                        <a href="">715 Park Ave, NY 10021 USA</a>
                                    </li>
                                    <li className="footer-aboutus__contacts-item">
                                        <a href="">CustomisedBrands@example.com</a>
                                    </li>
                                    <li className="footer-aboutus__contacts-item">
                                        <a href="">+1 754 000-00-00</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2 col-sm-6 col-md-3">
                            <div className="footer-links" data-collapse data-collapse-opened-className="footer-links--opened" data-collapse-item>
                                <div className="footer-links__title">
                                    <h4 className="footer-links__header" data-collapse-trigger>Information</h4>
                                </div>
                                <div className="footer-links__content" data-collapse-content>
                                <ul className="footer-links__list">
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">About Us</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Delivery Information</a>
                                    </li>
                                    <li className="footer-links__item"><a href="" className="footer-links__link">Privacy Policy</a>
                                    </li><li className="footer-links__item">
                                        <a href="" className="footer-links__link">Brands</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Contact Us</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Returns</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Site Map</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2 col-sm-6 col-md-3">
                        <div className="footer-links" data-collapse data-collapse-opened-className="footer-links--opened" data-collapse-item>
                            <div className="footer-links__title">
                                <h4 className="footer-links__header" data-collapse-trigger>My Account
                                </h4>
                            </div>
                            <div className="footer-links__content" data-collapse-content>
                                <ul className="footer-links__list">
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">My Account</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Order History</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Wish List</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Newsletter</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Specials</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Gift Certificates</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <a href="" className="footer-links__link">Affiliate</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="col-12 col-lg-4 footer__followus">
                    <div className="footer-followus">
                        <div className="footer-followus__title">
                            <h4 className="footer-followus__header">Follow Us</h4>
                            </div>
                            <div className="footer-followus__text">Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.
                            </div>
                            <form className="footer-followus__subscribe-form">
                                <input type="email" className="form-control form-control--footer" placeholder="Email address" />
                                 <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        <ul className="footer-followus__social-links">
                            <li className="footer-followus__social-link">
                                <a href="https://themeforest.net/user/kos9/portfolio" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="footer-followus__social-link">
                                <a href="https://themeforest.net/user/kos9/portfolio" target="_blank"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="footer-followus__social-link">
                                <a href="https://themeforest.net/user/kos9/portfolio" target="_blank"><i className="fab fa-youtube"></i></a>
                            </li>
                            <li className="footer-followus__social-link">
                                <a href="https://themeforest.net/user/kos9/portfolio" target="_blank"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li className="footer-followus__social-link">
                                <a href="https://themeforest.net/user/kos9/portfolio" target="_blank"><i className="fas fa-rss"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div className="row justify-content-between">
        <div className="col-12 col-sm-auto">
            <div className="copyright">
                <a href="">CustomisedBrands</a> by <a href="">Kos</a>
            </div>
        </div>
        <div className="footer__payments col-auto">
            <img srcset="images/payments.png, images/payments@2x.png 2x" src="images/payments.png" alt="" />
        </div>
    </div>
</div>
</div>
</footer>
);