const app = angular.module("contactApp", []);
app.controller("ContactController", function ($scope, $timeout) {
    // Initialize EmailJS with your public key
    emailjs.init("6Pobu86IVORw6pWTf");
    $scope.formData = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        budget: '',
        message: '',
        newsletter: false
    };
    $scope.successMessage = "";
    $scope.errorMessage = "";

    $scope.submitForm = function () {
        $scope.errorMessage = "";
        
        if ($scope.contactForm.$valid) {
            // Prepare email data
            const emailData = {
                firstName: $scope.formData.firstName,
                lastName: $scope.formData.lastName,
                email: $scope.formData.email,
                subject: $scope.formData.subject,
                budget: $scope.formData.budget,
                message: $scope.formData.message,
                newsletter: $scope.formData.newsletter
            };

            // Send email using EmailJS (you'll need to set up EmailJS account)
            emailjs.send("service_l0llzom", "template_r1l8fu9", emailData).then(
                function (response) {
                console.log("SUCCESS!", response.status, response.text);
                $scope.successMessage = "Thank you, " +
                $scope.formData.firstName +
                " " +
                $scope.formData.lastName +
                "! Your message has been sent successfully and I'll get back to you within 24 hours.";

                // Reset form
                $scope.formData = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    budget: "",
                    message: "",
                    newsletter: false,
                };
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                $scope.$apply();

                // Clear success message after 5 seconds
                $timeout(() => {
                    $scope.successMessage = "";
                }, 5000);
                },
                function (error) {
                    console.log("FAILED...", error);
                    $scope.errorMessage =
                        "Sorry, there was an error sending your message. Please try again or contact me directly.";
                    $scope.$apply();
                    $timeout(() => {
                    $scope.errorMessage = "";
                }, 5000);
                }
            );
        } else {
            $scope.errorMessage = "Please fill in all required fields correctly.";
            $timeout(() => {
                $scope.errorMessage = "";
            }, 3000);
        }
    };

    // Form validation helpers
    $scope.isFieldInvalid = function(field) {
        return $scope.contactForm.$submitted && $scope.contactForm[field].$invalid;
    };

    $scope.getFieldError = function(field) {
        if (!$scope.contactForm.$submitted) return '';
        
        if (field === 'email' && $scope.contactForm.email.$error.email) {
            return 'Please enter a valid email address.';
        }
        
        if (!$scope.formData[field]) {
            return field.charAt(0).toUpperCase() + field.slice(1) + ' is required.';
        }
        
        return '';
    };
});
