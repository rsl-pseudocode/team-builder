import React from 'react';

const DonateButton = () => {
    return (
        <div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="HQDY5LKER4LAU"/>
                <input type="hidden" name="no_recurring" value="1"/>
                <input type="hidden" name="item_name" value="Tip if you like it"/>
                <input type="hidden" name="currency_code" value="SEK"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"
                       name="submit" title="PayPal - The safer, easier way to pay online!"
                       alt="Donate with PayPal button"/>
                <img alt="" border="0" src="https://www.paypal.com/en_SE/i/scr/pixel.gif" width="1" height="1"/>
            </form>

        </div>
    );
};

export default DonateButton;
