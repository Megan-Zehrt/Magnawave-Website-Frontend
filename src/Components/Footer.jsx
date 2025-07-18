import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styling/Footer.css';

const Footer = () => {
    const [adminInfo, setAdminInfo] = useState(null);

    useEffect(() => {
        console.log("Fetching admin information...");
        axios.get('http://localhost:8000/api/admin/information')
            .then(res => {
                console.log("Admin information received:", res.data);
                setAdminInfo(res.data);
            })
            .catch(err => {
                console.error('Failed to fetch admin information:', err);
                alert("No admin information found.");
            });
    }, []);

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-section brand">
                    <h3>Common Questions</h3>
                    <ul>
                        <li><a href="/">Science Behind It All</a></li>
                        <li><a href="/appointments">Which Service is best for me?</a></li>
                        <li><a href="/services">About Me</a></li>
                        <li><a href="/ambassador">Join the Team</a></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Equine-Edge-Sports-Therapy/available-appointments">Book Appointment</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact</h4>
                    <p>Email: {adminInfo?.email || ''}</p>
                    <p>Phone: {adminInfo?.phoneNumber || ''}</p>
                    <p>Location: {adminInfo?.location || 'Weatherford, Texas, USA'}</p>

                    {adminInfo?.facebookUrl || adminInfo?.instagramUrl ? (
                        <div className="social-links">
                            <h5>Follow Us</h5>
                            <ul>
                                {adminInfo.facebookUrl && (
                                    <li>
                                        <a
                                            href={adminInfo.facebookUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                )}
                                {adminInfo.instagramUrl && (
                                    <li>
                                        <a
                                            href={adminInfo.instagramUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Equine Edge Sports Therapy LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
