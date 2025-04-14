'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id='contact' className="min-h-screen  py-20 bg-[#1E3A5F]">
            <div className="w-full max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#FAF8F5] mb-10">Contact</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 bg-[#FAF8F5] p-8 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#1E3A5F] text-sm font-semibold mb-2">Nom</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#1E3A5F] transition-colors"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-[#1E3A5F] text-sm font-semibold mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#1E3A5F] transition-colors"
                                required 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[#1E3A5F] text-sm font-semibold mb-2">Sujet</label>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#1E3A5F] transition-colors"
                            required 
                        />
                    </div>

                    <div>
                        <label className="block text-[#1E3A5F] text-sm font-semibold mb-2">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:border-[#1E3A5F] transition-colors"
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full md:w-auto px-8 py-3 bg-[#1E3A5F] text-[#FAF8F5] rounded hover:bg-opacity-90 transition-colors duration-300"
                    >
                        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                    </button>

                    {status === 'success' && (
                        <p className="text-center text-green-500 mt-4">Message envoyé avec succès !</p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-red-500 mt-4">Une erreur est survenue. Veuillez réessayer.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;


