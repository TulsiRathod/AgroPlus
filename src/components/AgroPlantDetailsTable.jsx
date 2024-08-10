import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const AgroPlantDetailsTable = () => {
    const [requests, setRequests] = useState([
        {
            id: 1,
            plantName: 'Potato',
            imageUrl: 'https://via.placeholder.com/50',
            requestDate: '2024-08-01',
        },
        {
            id: 2,
            plantName: 'Tomato',
            imageUrl: 'https://via.placeholder.com/50',
            requestDate: '2024-08-02',
        },
        {
            id: 3,
            plantName: 'Pepper',
            imageUrl: 'https://via.placeholder.com/50',
            requestDate: '2024-08-03',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newPlantName, setNewPlantName] = useState('');
    const [newPlantImage, setNewPlantImage] = useState(null);

    const navigate = useNavigate();

    const handleAddRequest = (e) => {
        e.preventDefault();

        const newRequest = {
            id: requests.length + 1,
            plantName: newPlantName,
            imageUrl: URL.createObjectURL(newPlantImage),
            requestDate: new Date().toISOString().split('T')[0],
        };

        setRequests([...requests, newRequest]);
        setShowModal(false);
    };

    const handleFileChange = (e) => {
        setNewPlantImage(e.target.files[0]);
    };

    return (
        <>
            <Header />
            <button className="plant-back-button" onClick={() => navigate(-1)}>← Back</button>
            <div className="plant-request-container">
                <h1>Plant Request History</h1>
                <button className="add-request-btn" onClick={() => setShowModal(true)}>+ Add New Request</button>
                
                <table className="plant-table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Plant Name</th>
                            <th>Image</th>
                            <th>Request Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.id}</td>
                                <td>{request.plantName}</td>
                                <td><img src={request.imageUrl} alt={request.plantName} /></td>
                                <td>{request.requestDate}</td>
                                <td><button>Check</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Add New Plant Request</h2>
                            <form onSubmit={handleAddRequest}>
                                <div>
                                    <label>Plant Name:</label>
                                    <input 
                                        type="text" 
                                        value={newPlantName} 
                                        onChange={(e) => setNewPlantName(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label>Upload Image:</label>
                                    <input 
                                        type="file" 
                                        onChange={handleFileChange} 
                                        required 
                                    />
                                </div>
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => setShowModal(false)}>Close</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AgroPlantDetailsTable;
