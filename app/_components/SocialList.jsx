import React from "react";

const SocialList = ({ classNameName }) => {
	return (
		<>
			<style>
				{`
                .social {
                    margin: 0;
                    list-style: none;
                    padding-left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                .social .social-item {
                    margin: 0 30px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .social .social-item .social-link {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #fff;
                    text-align: center;
                    transform: perspective(1000px) rotate(-30deg) skew(25deg)
                        translate(0, 0);
                    transition: all 0.4s ease;
                }

                .social .social-item .social-link::before {
                    content: "";
                    position: absolute;
                    top: 5px;
                    left: -10px;
                    height: 100%;
                    width: 10px;
                    background: #b1b1b1;
                    transition: all 0.4s ease;
                    transform: rotate(0deg) skewY(-45deg);
                }

                .social .social-item .social-link::after {
                    content: "";
                    position: absolute;
                    top: 40px;
                    left: -5px;
                    height: 10px;
                    width: 100%;
                    background: #b1b1b1;
                    transition: all 0.4s ease;
                    transform: rotate(0deg) skewX(-45deg);
                }

                .social .social-item .social-link:hover {
                    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(5px, -5px);
                    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
                }

                .social .social-item:nth-child(1) a {
                    color: #3b5999;
                }

                .social .social-item:nth-child(1):hover a {
                    background: #3b5999;
                }

                .social .social-item:nth-child(1):hover a::before {
                    background: #3b5999;
                }

                .social .social-item:nth-child(1):hover a::after {
                    background: #3b5999;
                }

                .social .social-item:nth-child(2) a {
                    color: #55acee;
                }

                .social .social-item:nth-child(2):hover a {
                    background: #55acee;
                }

                .social .social-item:nth-child(2):hover a::before {
                    background: #55acee;
                }

                .social .social-item:nth-child(2):hover a::after {
                    background: #55acee;
                }

                .social .social-item:nth-child(3) a {
                    color: #dd4b39;
                }

                .social .social-item:nth-child(3):hover a {
                    background: #dd4b39;
                }

                .social .social-item:nth-child(3):hover a::before {
                    background: #dd4b39;
                }

                .social .social-item:nth-child(3):hover a::after {
                    background: #dd4b39;
                }

                .social .social-item:nth-child(4) a {
                    color: #e4405f;
                }

                .social .social-item:nth-child(4):hover a {
                    background: #e4405f;
                }

                .social .social-item:nth-child(4):hover a::before {
                    background: #e4405f;
                }

                .social .social-item:nth-child(4):hover a::after {
                    background: #e4405f;
                }

                .social .social-item .social-link:hover {
                    color: #ffffff;
                }
            `}
			</style>
			<ul className="social">
				<li className="social-item">
					<a className="social-link" href="/">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
				</li>
				<li className="social-item">
					<a className="social-link" href="/">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
				</li>
				<li className="social-item">
					<a className="social-link" href="/">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
				</li>
				<li className="social-item">
					<a className="social-link" href="/">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
								fill="currentColor"
							></path>
							<path
								d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
								fill="currentColor"
							></path>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
								fill="currentColor"
							></path>
						</svg>
					</a>
				</li>
			</ul>
		</>
	);
};

export default SocialList;
