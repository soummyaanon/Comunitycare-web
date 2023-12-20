const typed = new Typed('.multiple-text',{
    strings:['Join Us','  We care for the Nature','We are EnviroGuardians'],
typeSpeed: 150,
backSpeed: 150,
backDelay: 150,
loop: true
});

ocument.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const rating = document.getElementById('rating').value;

        // Check if any of the fields, including rating, is empty
        if (!fname || !lname || !email || !subject || !rating) {
            alert('Please fill in all fields, including the rating');
            return;
        }
        
        // Assuming submission was successful
        // You can customize the success message as needed
        alert('Submission successful! Thank you.');
        
        // Additional code for any other actions you want to perform after successful submission
        // For example, you might want to reset the form or redirect the user to another page.
        // You can add that code here.
        


        // Add your code to send the form data, including the rating, to Firebase or another backend.
        // For demonstration purposes, we'll just log the data to the console.
        console.log({
            fname,
            lname,
            email,
            subject,
            rating
        });

        // You can continue with your existing form validation logic here.

    });
});
