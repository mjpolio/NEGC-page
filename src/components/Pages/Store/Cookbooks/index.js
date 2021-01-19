import React from 'react';
import './styles.scss';

const Cookbooks = () => {
    return (
        <div>
            <h2 className='heading heading-primary'>
				Cookbooks
			</h2>
            <div className="cookbook-item">
                <div className="cookbook-item-title">NEGC Award-Winning Cookbook</div>
                <div className="cookbook-item-img"></div>
                <div className="cookbook-item-description">
                    <div className="cookbook-item-description-heading">
                        The Norwood Evening Garden Club Cookbook
                    </div>
                    <div className="cookbook-item-description-price">
                        $10
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cookbooks;