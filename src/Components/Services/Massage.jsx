import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styling/Magnawave.css'; // Assuming you have a CSS file for styles
import MassageImg from '../../Images/Massage.jpg';

const testimonials = [
    { id: 1, name: "John Doe", feedback: "The MagnaWave service has improved my horse's recovery time greatly!" },
    { id: 2, name: "Jane Smith", feedback: "I noticed a significant difference in my horse's performance after just a few sessions." },
    { id: 3, name: "Tom Johnson", feedback: "Highly recommend! The team is professional and the results are amazing!" },
];

const Massage = () => {

    const navigate = useNavigate()

    return (
        <div className="magna-wave-container">
            <div className="header-section">
                <a href="/" className="home-button">Home</a>  {/* Home button here */}
                <div className="left-column">
                    <h1 className="service-name">Massage Therapy</h1>
                    <p className="service-description">
                        Enhance your horse's performance with our Massage service.
                    </p>
                    <button className="book-now-button" onClick={() => navigate("/Equine-Edge-Sports-Therapy/schedule/massage")}>Book Now</button>
                </div>
                <div className="right-column">
                    <img
                        className="magna-wave-image"
                        src={MassageImg}
                        alt="MagnaWave Service"
                    />
                </div>
            </div>
            <div className="detailed-description">
                <h2>Why Book This Service?</h2>
                <p>
                    MagnaWave therapy uses Pulsed Electromagnetic Field (PEMF) technology to help increase circulation, reduce inflammation, and promote healing in your horse. By booking this service, you are investing in your horse’s well-being and longevity.
                </p>
                <p>
                    With regular sessions, you can enhance your horse's performance, recovery, and overall well-being.
                </p>
            </div>
            <div className="testimonials-section">
                <h2>What Our Clients Say</h2>
                <div className="testimonials-container">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                            <p className="testimonial-name">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Massage;
