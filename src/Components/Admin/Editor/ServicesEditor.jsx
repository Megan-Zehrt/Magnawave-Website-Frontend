import React from 'react'
import ImageUpload from '../../ImageUpload';
import '../../../Styling/ServicesEditor.css';

const ServicesEditor = ({ data = {}, onChange }) => {
    return (
        <div className="about-section-editor">
            <h2>Service Section</h2>

            <div className="form-group">
                <label className="form-label">MagnaWave PEMF Title:</label>
                <input
                    type="text"
                    className="form-input"
                    value={data.magnaWavePEMFTitle || ''}
                    onChange={(e) => onChange('magnaWavePEMFTitle', e.target.value)}
                    placeholder="Enter about section title"
                />
            </div>

            <div className="form-group">
                <label className="form-label">MagnaWave PEMF Text (Description):</label>
                <textarea
                    className="form-textarea"
                    value={data.magnaWavePEMFText || ''}
                    onChange={(e) => onChange('magnaWavePEMFText', e.target.value)}
                    placeholder="Enter about section text"
                />
            </div>

            <div className="form-group">
                <label className="form-label">MagnaWave PEMF Image URL:</label>
                <input
                    type="text"
                    className="form-input"
                    value={data.magnaWavePEMFUrl || ''}
                    onChange={(e) => onChange('magnaWavePEMFUrl', e.target.value)}
                    placeholder="Enter image URL"
                />
                <ImageUpload onUpload={(url) => onChange('magnaWavePEMFUrl', url)} />

                {data.magnaWavePEMFUrl && (
                    <div className="image-preview">
                        <img
                            src={data.magnaWavePEMFUrl}
                            alt="Landing Preview"
                            style={{ maxWidth: '100%', marginTop: '10px' }}
                        />
                    </div>
                )}
            </div>
            <div className="form-group">
                <label className="form-label">Red Light Title:</label>
                <input
                    type="text"
                    className="form-input"
                    value={data.redLightTitle || ''}
                    onChange={(e) => onChange('redLightTitle', e.target.value)}
                    placeholder="Enter about section title"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Red Light Text (Description):</label>
                <textarea
                    className="form-textarea"
                    value={data.redLightText || ''}
                    onChange={(e) => onChange('redLightText', e.target.value)}
                    placeholder="Enter about section text"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Red Light Image URL:</label>
                <input
                    type="text"
                    className="form-input"
                    value={data.redLightUrl || ''}
                    onChange={(e) => onChange('redLightUrl', e.target.value)}
                    placeholder="Enter image URL"
                />
                <ImageUpload onUpload={(url) => onChange('redLightUrl', url)} />

                {data.redLightUrl && (
                    <div className="image-preview">
                        <img
                            src={data.redLightUrl}
                            alt="Landing Preview"
                            style={{ maxWidth: '100%', marginTop: '10px' }}
                        />
                    </div>
                )}
            </div>
            <div className="form-group">
                <label className="form-label">Therapeutic Massage Title:</label>
                <input
                    type="text"
                    className="form-input"
                    value={data.massageTitle || ''}
                    onChange={(e) => onChange('massageTitle', e.target.value)}
                    placeholder="Enter about section title"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Therapeutic Massage Text (Description):</label>
                <textarea
                    className="form-textarea"
                    value={data.massageText || ''}
                    onChange={(e) => onChange('massageText', e.target.value)}
                    placeholder="Enter about section text"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Therapeutic Massage Image URL:</label>
                <input
                    type="text"
                    className="form-input"
                    value={data.massageUrl || ''}
                    onChange={(e) => onChange('massageUrl', e.target.value)}
                    placeholder="Enter image URL"
                />
                <ImageUpload onUpload={(url) => onChange('massageUrl', url)} />

                {data.massageUrl && (
                    <div className="image-preview">
                        <img
                            src={data.massageUrl}
                            alt="Landing Preview"
                            style={{ maxWidth: '100%', marginTop: '10px' }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ServicesEditor