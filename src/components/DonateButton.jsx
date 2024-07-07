import React from 'react';

const DonateButton = () => {
    return (
        <div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID"/>
                <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                />
                <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
        </div>
    );
};

export default DonateButton;