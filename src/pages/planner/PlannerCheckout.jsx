import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const PlannerCheckout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const itinerary = location.state?.itinerary;

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!itinerary) {
        navigate('/planner');
        return null; // Prevents render error before navigation fires
    }

    const handlePayment = () => {
        setIsProcessing(true);
        // Simulate payment gateway delay
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            // Navigate back to home after 3 seconds of showing success
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 2000);
    };

    return (
        <div className="planner-page">
            <div className="planner-header sticky">
                <button className="icon-btn" onClick={() => navigate(-1)} disabled={isProcessing || isSuccess}>
                    <ArrowLeft size={24} />
                </button>
                <h2>Review & Book</h2>
                <div style={{ width: 24 }}></div>
            </div>

            <div style={{ padding: '16px' }}>
                <div className="checkout-summary">
                    <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Itinerary Summary</h3>

                    {itinerary.timeline.map((event) => (
                        <div key={event.id} className="receipt-row">
                            <span>{event.titlePrefix} ({event.item.name || event.item.title})</span>
                        </div>
                    ))}

                    <div className="receipt-total">
                        <span>Total (Includes Taxes)</span>
                        <span>{itinerary.totalPrice}</span>
                    </div>
                </div>
            </div>

            <div className="planner-footer" style={{ padding: '0 16px' }}>
                <button
                    className="btn-primary large"
                    onClick={handlePayment}
                    disabled={isProcessing || isSuccess}
                >
                    {isProcessing ? 'Processing Payment...' : `Pay ${itinerary.totalPrice}`}
                </button>
            </div>

            {/* Success Overlay */}
            {isSuccess && (
                <div className="success-overlay">
                    <CheckCircle2 size={80} color="var(--color-success)" style={{ marginBottom: '24px' }} />
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>Booking Confirmed!</h2>
                    <p style={{ color: 'var(--color-dark-gray)', textAlign: 'center', maxWidth: '300px' }}>
                        Your ultimate day out in the district is booked. We've notified your friends.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PlannerCheckout;
