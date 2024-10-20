import React, { useState } from 'react';

const ReportMissing = () => {
    const [previewUrl, setPreviewUrl] = useState(null); // Remove the unused `file` state

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        // Generate a preview URL for the uploaded image
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreviewUrl(null); // Reset preview if no file is selected
        }
    };

    return (
        <div className="report-missing-container">
            <h1>Report a Missing Person</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />

                <label htmlFor="last-seen">Last Seen Location:</label>
                <input type="text" id="last-seen" name="last-seen" required />

                <label htmlFor="photo">Upload a Photo:</label>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                {/* Image Preview */}
                {previewUrl && (
                    <img
                        id="image-preview"
                        src={previewUrl}
                        alt="Uploaded Preview"
                        style={{ display: 'block', width: '200px', height: 'auto' }}
                    />
                )}

                <button type="submit">Submit</button>
            </form>

            {/* Example static image from public folder */}
            <div>
                <h2>Example Image:</h2>
                <img
                    src={`${process.env.PUBLIC_URL}/images/child-pulled-from-river.jpg`}
                    alt="Child Pulled from River"
                    style={{ width: '200px', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default ReportMissing;

