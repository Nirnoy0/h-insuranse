import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5">    
                <footer class="bg-dark text-center text-white">
                <div class="container p-4">
                    <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" target="blank" role="button"
                        ><i class="fab fa-facebook-f"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" target="blank" role="button"
                        ><i class="fab fa-twitter"></i
                    ></a>

                   
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" target="blank" role="button"
                        ><i class="fab fa-google"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" target="blank" role="button"
                        ><i class="fab fa-instagram"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" target="blank" role="button"
                        ><i class="fab fa-linkedin-in"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/" target="blank" role="button"
                        ><i class="fab fa-github"></i
                    ></a>
                    </section>

                    <section>
                    <form>
                        <div class="row d-flex justify-content-center">
                        <div class="col-auto">
                            <p class="pt-2">
                            <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div class="col-md-5 col-12">
                            <div class="form-outline form-white mb-4">
                            <input type="email" class="form-control"/>
                            <label class="form-label pt-3">Email address</label>
                            </div>
                        </div>

                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-light mb-4">
                            Subscribe
                            </button>
                        </div>
                        </div>
                    </form>
                    </section>

                    <section class="mb-4">
                    <p>
                    Health insurance facilitates access to care and is associated with lower death rates, better health outcomes, and improved productivity. Despite recent gains, more than 28 million individuals still lack coverage, putting their physical, mental, and financial health at risk.
                    </p>
                    </section>

                   
                </div>

                <div class="text-center p-3">
                    © 2021 Copyright:
                    <a class="text-white text-decoration-none" href="#"> H-Insurance</a>
                </div>
                </footer>
        </div>
    );
};

export default Footer;