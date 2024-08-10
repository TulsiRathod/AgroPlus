import React, { useState } from 'react';
import Header from './Header';

const AgroPlantDetails = () => {
    const [plant, setPlant] = useState({
        id: 1,
        plantName: 'Potato',
        category: 'Vegetable',
        imageUrl: 'https://via.placeholder.com/300',
        disease: 'Late Blight',
        details: 'Late blight is a fungal disease that affects potato leaves and tubers.',
        cure: 'Use fungicides and practice crop rotation.',
    });

    const handleBackClick = () => {
        // Handle the back navigation here
        console.log('Back button clicked');
    };

    return (
        <>
            <Header />
            <button className="plant-back-button" onClick={handleBackClick}>← Back</button>
            <img src={plant.imageUrl} alt={plant.plantName} className="plant-image" />
            <table className="plant-details-table">
                <tbody>
                    <tr>
                        <td className="plant-detail-label"><strong>Name:</strong></td>
                        <td className="plant-detail-value">{plant.plantName}</td>
                    </tr>
                    <tr>
                        <td className="plant-detail-label"><strong>Category:</strong></td>
                        <td className="plant-detail-value">{plant.category}</td>
                    </tr>
                    <tr>
                        <td className="plant-detail-label"><strong>Disease:</strong></td>
                        <td className="plant-detail-value">{plant.disease}</td>
                    </tr>
                    <tr>
                        <td className="plant-detail-label"><strong>Cure:</strong></td>
                        <td className="plant-detail-value">{plant.cure}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default AgroPlantDetails;
