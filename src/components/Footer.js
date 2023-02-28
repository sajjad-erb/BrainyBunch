
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className=" tracking-widest">
                <div className="grid grid-cols-12 container mx-auto px-4 items-start pt-10">
                    <div className="md:col-span-6 col-span-12 pb-10 ">
                        <img src="logo.svg" alt="" />
                        <div><span className="text-white mt-2 text-lg"></span></div>
                        <div className="flex pb-10 pt-10">
                            <a className="cursor-pointer" href="https://www.facebook.com/softaims/">
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_237_146)">
                                        <path
                                            d="M27.3001 20.9998C27.3001 22.6707 26.6363 24.2731 25.4549 25.4546C24.2734 26.6361 22.671 27.2998 21.0001 27.2998C19.3292 27.2998 17.7268 26.6361 16.5453 25.4546C15.3638 24.2731 14.7001 22.6707 14.7001 20.9998C14.7001 20.6407 14.7379 20.29 14.803 19.9498H12.6001V28.3435C12.6001 28.9273 13.0726 29.3998 13.6564 29.3998H28.3459C28.6257 29.3993 28.8938 29.2878 29.0914 29.0897C29.2891 28.8917 29.4001 28.6233 29.4001 28.3435V19.9498H27.1972C27.2623 20.29 27.3001 20.6407 27.3001 20.9998V20.9998ZM21.0001 25.1998C21.5518 25.1997 22.098 25.0909 22.6077 24.8797C23.1173 24.6684 23.5804 24.3588 23.9704 23.9686C24.3604 23.5784 24.6697 23.1152 24.8807 22.6055C25.0917 22.0957 25.2002 21.5494 25.2001 20.9977C25.1999 20.4461 25.0911 19.8998 24.8799 19.3902C24.6686 18.8805 24.3591 18.4175 23.9689 18.0275C23.5787 17.6375 23.1155 17.3281 22.6057 17.1171C22.096 16.9061 21.5497 16.7976 20.998 16.7977C19.8838 16.798 18.8154 17.2409 18.0277 18.0289C17.2401 18.817 16.7977 19.8857 16.798 20.9998C16.7983 22.114 17.2411 23.1825 18.0292 23.9701C18.8172 24.7578 19.8859 25.2001 21.0001 25.1998V25.1998ZM26.0401 16.5898H28.558C28.7253 16.5898 28.8857 16.5235 29.0042 16.4054C29.1227 16.2874 29.1895 16.1271 29.1901 15.9598V13.4419C29.1901 13.2743 29.1235 13.1135 29.0049 12.995C28.8864 12.8764 28.7256 12.8098 28.558 12.8098H26.0401C25.8724 12.8098 25.7117 12.8764 25.5931 12.995C25.4746 13.1135 25.408 13.2743 25.408 13.4419V15.9598C25.4101 16.3063 25.6936 16.5898 26.0401 16.5898V16.5898ZM21.0001 0.839844C15.6533 0.839844 10.5255 2.96384 6.74481 6.74457C2.96408 10.5253 0.840088 15.6531 0.840088 20.9998C0.840088 26.3466 2.96408 31.4744 6.74481 35.2551C10.5255 39.0358 15.6533 41.1598 21.0001 41.1598C23.6475 41.1598 26.2691 40.6384 28.715 39.6253C31.1609 38.6121 33.3833 37.1271 35.2554 35.2551C37.1274 33.3831 38.6124 31.1607 39.6255 28.7147C40.6386 26.2688 41.1601 23.6473 41.1601 20.9998C41.1601 18.3524 40.6386 15.7309 39.6255 13.2849C38.6124 10.839 37.1274 8.6166 35.2554 6.74457C33.3833 4.87254 31.1609 3.38757 28.715 2.37443C26.2691 1.3613 23.6475 0.839844 21.0001 0.839844V0.839844ZM31.5001 29.1667C31.5001 30.4498 30.4501 31.4998 29.167 31.4998H12.8332C11.5501 31.4998 10.5001 30.4498 10.5001 29.1667V12.8329C10.5001 11.5498 11.5501 10.4998 12.8332 10.4998H29.167C30.4501 10.4998 31.5001 11.5498 31.5001 12.8329V29.1667V29.1667Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_237_146">
                                            <rect width="42" height="42" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a className="mx-2 cursor-pointer" href="https://www.facebook.com/softaims/">
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_25_336)">
                                        <path
                                            d="M21 0.839844C9.86577 0.839844 0.839966 9.86564 0.839966 20.9998C0.839966 32.134 9.86577 41.1598 21 41.1598C32.1342 41.1598 41.16 32.134 41.16 20.9998C41.16 9.86564 32.1342 0.839844 21 0.839844ZM16.065 29.3557H11.9826V16.2181H16.065V29.3557ZM13.9986 14.6053C12.7092 14.6053 11.8755 13.6918 11.8755 12.562C11.8755 11.4091 12.7344 10.5229 14.0511 10.5229C15.3678 10.5229 16.1742 11.4091 16.1994 12.562C16.1994 13.6918 15.3678 14.6053 13.9986 14.6053ZM30.975 29.3557H26.8926V22.075C26.8926 20.3803 26.3004 19.2295 24.8241 19.2295C23.6964 19.2295 23.0265 20.0086 22.7304 20.7583C22.6212 21.025 22.5939 21.403 22.5939 21.7789V29.3536H18.5094V20.4076C18.5094 18.7675 18.4569 17.3962 18.4023 16.216H21.9492L22.1361 18.0409H22.218C22.7556 17.1841 24.0723 15.9199 26.2752 15.9199C28.9611 15.9199 30.975 17.7196 30.975 21.5878V29.3557Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_25_336">
                                            <rect width="42" height="42" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a className="cursor-pointer" href="https://www.facebook.com/softaims/">
                                <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_25_334)">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0 21.1173C0 31.5578 7.58275 40.2395 17.5 42V26.8328H12.25V21H17.5V16.3328C17.5 11.0828 20.8827 8.16725 25.6672 8.16725C27.1827 8.16725 28.8173 8.4 30.3328 8.63275V14H27.65C25.0828 14 24.5 15.2827 24.5 16.9172V21H30.1L29.1672 26.8328H24.5V42C34.4173 40.2395 42 31.5595 42 21.1173C42 9.5025 32.55 0 21 0C9.45 0 0 9.5025 0 21.1173Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_25_334">
                                            <rect width="42" height="42" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>

                    </div>
                    <div className="md:col-span-3 col-span-12 mt-7">
                        <h5 className="text-uppercase font-semibold text-white text-2xl ">Company</h5>
                        <ul className="list-unstyled md:mt-10 mt-5">
                            <li>
                                <a href="https://thesoftaims.com/" className=" text-lg text-white">Website</a>
                            </li>
                            <li>
                                <a href="https://thesoftaims.com/team" className=" text-lg text-white ">About The Team</a>
                            </li>
                            <li>
                                <a href="https://thesoftaims.com/location" className="text-lg text-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-3 col-span-12 mt-7 pb-5 md:pb-0">
                        <h5 className="text-uppercase font-semibold text-white text-2xl mt-4 md:mt-0">Legal</h5>

                        <ul className="list-unstyled md:mt-10 mt-5">
                            <li>
                                <a href="/privacy" className="text-lg text-white">Privacy</a>
                            </li>
                            <li>
                                <a href="/terms_conditions" className="text-lg text-white">Terms</a>
                            </li>
                            <li>
                                <a href="/cookies_policy" className="text-lg text-white">Cookies</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="text-center p-3 text-white bg-blue-650">
                    &copy 2022 All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
