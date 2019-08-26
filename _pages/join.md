---
permalink: "/join/"
layout: page
title:  "Join the Alpha"
---

<p>TaskRatchet is a todo list with teeth. You decide what you want to do, when you want to do it by, and how much you’ll 
pay if you don’t. TaskRatchet will make sure you follow through.</p>

<p>Join the alpha to get early access to the service and influence its future development with your feedback.</p>

<p>Ready to get started?</p>

<h3>TaskRatchet Alpha Membership — $1</h3>

<!-- Load Stripe.js on your website. -->


<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
<button style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
		id="checkout-button-sku_F4Ha6GSmGhP8Lw"
		role="link">
	Checkout
</button>

<div id="error-message"></div>

<script>
	var stripe = Stripe('pk_live_inP66DVvlOOA4r3CpaD73dFo00oWsfSpLd');

	var checkoutButton = document.getElementById('checkout-button-sku_F4Ha6GSmGhP8Lw');
	checkoutButton.addEventListener('click', function () {
		// When the customer clicks on the button, redirect
		// them to Checkout.
		stripe.redirectToCheckout({
			items: [{sku: 'sku_F4Ha6GSmGhP8Lw', quantity: 1}],

			// Do not rely on the redirect to the successUrl for fulfilling
			// purchases, customers may not always reach the success_url after
			// a successful payment.
			// Instead use one of the strategies described in
			// https://stripe.com/docs/payments/checkout/fulfillment
			successUrl: window.location.protocol + '//TaskRatchet.com?stripe=success',
			cancelUrl: window.location.protocol + '//TaskRatchet.com?stripe=canceled',
		})
			.then(function (result) {
				if (result.error) {
					// If `redirectToCheckout` fails due to a browser or network
					// error, display the localized error message to your customer.
					var displayError = document.getElementById('error-message');
					displayError.textContent = result.error.message;
				}
			});
	});
</script>
