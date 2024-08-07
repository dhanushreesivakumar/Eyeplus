import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from '../Assests/onlineeyetest1.jfif';

const DetailForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, age, gender } = formData;
        if (name && age && gender) {
            navigate('/instruct');
        } else {
            alert('Please fill in all the details.');
        }
    };

    return (
        <div>
            <img src={service1} alt="Online Eye Test" />

            <div style={styles.detailForm}>
                <h2 style={styles.header}>Fill out your details</h2>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        style={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        style={styles.input}
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="gender"
                        style={styles.input}
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="submit" style={styles.button}>Take the test</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    detailForm: {
        position: 'absolute',
        top: '200px',
        right: '170px',
        width: '300px',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
        marginBottom: '20px',
        fontSize: '1.5em',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        padding: '10px',
        backgroundColor: 'navy',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: 'darkblue',
    }
};

export default DetailForm;
