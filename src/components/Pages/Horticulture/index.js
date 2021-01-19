import React from 'react';
import './styles.scss';
import Pdf01 from '../Horticulture/pdfs/01 Sept Hort Thoughts.pdf';
import Pdf02 from '../Horticulture/pdfs/02 HORTICULTURE_NOTES_april_2013.pdf';
import Pdf03 from '../Horticulture/pdfs/03 SEPTEMBER  HORTICULTURE NOTES.pdf';
import Pdf04 from '../Horticulture/pdfs/04 OCTOBER HORTICULTURE NOTES.pdf';
import Pdf05 from '../Horticulture/pdfs/05 Leaf Dropping and Leaf Hanging.pdf';

const Horticulture = () => {
    return (
        <div>
            <div className="heading heading-primary">
                Horticulture Notes
                <div className="horticulture-img"></div>
            </div>
            <div className="horticulture-notes">
                <ul>
                    <li className="horticulture-item">
                        <a href={Pdf05} target="_blank">
                            Leaf Dropping and Leaf Hanging in Japanese Maple
                        </a>
                    </li>
                    <li className="horticulture-item">
                        <a href={Pdf04} target="_blank">
                            Oriental Bittersweet
                        </a>
                    </li>
                    <li className="horticulture-item">
                        <a href={Pdf03} target="_blank">
                            Choosing Native Plants
                        </a>
                    </li>
                    <li className="horticulture-item">
                        <a href={Pdf02} target="_blank">
                            Tips on Garden Tool Care
                        </a>
                    </li>
                    <li className="horticulture-item">
                        <a href={Pdf01} target="_blank">
                            Autumn Thoughts
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Horticulture; 
