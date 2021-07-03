$(function(){
    var totalSlide = 3;
    var index = 1;

    setInterval(function () {
        if (index == totalSlide) {
            index = 1;
            $(".slide-wrapper").animate({ "margin-left": "0px" })
        } else {
            index++;
            $(".slide-wrapper").animate({ "margin-left": -945 * (index - 1) + "px" })
        }
    }, 3000)
})

function onResize() {
    var width = window.outerWidth
    var slideInterval;

    if (width <= 500) {
        clearInterval(slideInterval);
        var totalSlide = 9;
        var index = 1;

        slideInterval = setInterval(function () {
            if (index == totalSlide) {
                index = 1;
                $(".slide-wrapper").animate({ "margin-left": "0px" })
            } else {
                index++;
                $(".slide-wrapper").animate({ "margin-left": -315 * (index - 1) + "px" })
            }
        }, 1000)
    } else if (width > 500 && width <= 1100) {
        clearInterval(slideInterval);
        var totalSlide = 6;
        var index = 1;

        slideInterval = setInterval(function () {
            if (index == totalSlide) {
                index = 1;
                $(".slide-wrapper").animate({ "margin-left": "0px" })
            } else {
                index++;
                $(".slide-wrapper").animate({ "margin-left": -630 * (index - 1) + "px" })
            }
        }, 2000)
    } else {
        clearInterval(slideInterval);
        var totalSlide = 3;
        var index = 1;

        slideInterval = setInterval(function () {
            if (index == totalSlide) {
                index = 1;
                $(".slide-wrapper").animate({ "margin-left": "0px" })
            } else {
                index++;
                $(".slide-wrapper").animate({ "margin-left": -945 * (index - 1) + "px" })
            }
        }, 3000)
    }
}

function onRegister(form) {
    var errorMessage = document.getElementById("login-signup-error-msg");

    var username = form.username.value.trim()
    var email = form.email.value.trim().toLowerCase()
    var password = form.password.value.trim()
    var confPassword = form.confpassword.value.trim()
    var dob = form.dob.value
    var gender = form.gender.value
    var agreement = form.agreement.checked

    if (username == "") {
        errorMessage.innerText = "username must be filled"
        return false
    } else {
        if (username.length < 5) {
            errorMessage.innerText = "username must be at least 5 characters"
            return false;
        }
    }

    if (email == "") {
        errorMessage.innerText = "email must be filled"
        return false
    } else {
        var falseCount = 0;

        var at = email.indexOf("@")

        if (at >= 0) {
            var atSplits = email.split("@")

            if (atSplits[1] !== "") {
                for (atSplit of atSplits) {
                    if (atSplit.indexOf(" ") >= 0)
                        falseCount++;
                }

                var dot = atSplits[1].indexOf(".")

                if (dot >= 1) {
                    var dotSplits = atSplits[1].split(".")
                    var webDomain = dotSplits[1] // "com, net, id, ..."

                    for (dotSplit of dotSplits) {
                        if (dotSplit.indexOf(" ") >= 0)
                            falseCount++;
                    }

                    if (webDomain == "")
                        falseCount++;
                } else {
                    falseCount++;
                }

            } else {
                falseCount++
            }
        } else {
            falseCount++;
        }

        if (falseCount > 0) {
            errorMessage.innerText = "invalid email address"
            return false
        }
    }

    if (password == "") {
        errorMessage.innerText = "password must be filled"
        return false
    } else {
        if (password.length < 8) {
            errorMessage.innerText = "password length must be at least 8 characters"
            return false
        }
    }

    if (confPassword == "") {
        errorMessage.innerText = "confirm password must be filled"
        return false
    } else {
        if (confPassword == password) {

        } else {
            errorMessage.innerText = "password didn't match"
            return false
        }
    }

    if (dob == "") {
        errorMessage.innerText = "please insert date of birth"
        return false
    } else {

        var dayOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        var now = new Date()
        var nowDay = now.getDate()
        var nowMonth = now.getMonth() + 1
        var nowYear = now.getFullYear()

        var birthDate = new Date(dob)
        var birthDay = birthDate.getDate()
        var birthMonth = birthDate.getMonth() + 1
        var birthYear = birthDate.getFullYear()

        var desiredAge = 15;
        var birthAge

        if (birthDay > nowDay) {
            nowDay += birthDay + dayOfMonths[birthMonth - 1]
            nowMonth -= 1;
        }

        if (birthMonth > nowMonth) {
            nowYear -= 1;
            nowMonth += 12;
        }

        birthAge = nowYear - birthYear;

        if (birthAge < desiredAge) {
            errorMessage.innerText = "you must be at least 15 to make an account"
            return false;
        }
    }

    if (gender == "") {
        errorMessage.innerText = "please insert your gender"
        return false;
    }

    if (agreement == false) {
        errorMessage.innerText = "you have to agree with the terms and conditions to continue"
        return false
    }
}


function onLogin(form) {
    var errorMessage = document.getElementById("login-signup-error-msg");

    var email = form.email.value.trim().toLowerCase()
    var password = form.password.value.trim()

    if (email == "") {
        errorMessage.innerText = "email must be filled"
        return false
    } else {
        var falseCount = 0;

        var at = email.indexOf("@")

        if (at >= 0) {
            var atSplits = email.split("@")

            if (atSplits[1] !== "") {
                for (atSplit of atSplits) {
                    if (atSplit.indexOf(" ") >= 0)
                        falseCount++;
                }

                var dot = atSplits[1].indexOf(".")

                if (dot >= 1) {
                    var dotSplits = atSplits[1].split(".")
                    var webDomain = dotSplits[1] // "com, net, id, ..."

                    for (dotSplit of dotSplits) {
                        if (dotSplit.indexOf(" ") >= 0)
                            falseCount++;
                    }

                    if (webDomain == "")
                        falseCount++;
                } else {
                    falseCount++;
                }

            } else {
                falseCount++
            }
        } else {
            falseCount++;
        }

        if (falseCount > 0) {
            errorMessage.innerText = "invalid email address"
            return false
        }
    }

    if (password == "") {
        errorMessage.innerText = "password must be filled"
        return false
    } else {
        if (password.length < 8) {
            errorMessage.innerText = "password length must be at least 8 characters"
            return false
        }
    }
}

$('.absolute-hamburger').on('click', function() {
    $('.drop-down').toggleClass('hamburger-on-off')
})
