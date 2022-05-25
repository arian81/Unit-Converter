let number_input = document.getElementById("num-input");
let info = document.getElementsByClassName("description");
let mainColor = "#fbf7ee";
let secondaryColor = "#1F2937";

number_input.onchange = function () {
    for (i = 0; i < info.length; i++) {
        switch (i) {
            case 0:
                info[0].innerText = `${number_input.value} meters = ${
                    Math.round(
                        (number_input.value * 3.281 + Number.EPSILON) * 1000
                    ) / 1000
                } feet  | ${number_input.value} feet = ${
                    Math.round(
                        (number_input.value / 3.281 + Number.EPSILON) * 1000
                    ) / 1000
                } meters`;
                break;
            case 1:
                info[1].innerText = `${number_input.value} liters = ${
                    Math.round(
                        (number_input.value * 3.785 + Number.EPSILON) * 1000
                    ) / 1000
                } gallons | ${number_input.value} gallons = ${
                    Math.round(
                        (number_input.value / 3.785 + Number.EPSILON) * 1000
                    ) / 1000
                } liters`;
                break;
            case 2:
                info[2].innerText = `${number_input.value} kilos = ${
                    Math.round(
                        (number_input.value * 2.205 + Number.EPSILON) * 1000
                    ) / 1000
                } pounds | ${number_input.value} pounds = ${
                    Math.round(
                        (number_input.value / 2.205 + Number.EPSILON) * 1000
                    ) / 1000
                } kilos`;
                break;
        }
    }
};

function gradientChange(fstColor, sndColor) {
    document.getElementsByClassName(
        "top"
    )[0].style.background = `linear-gradient(246.26deg, ${sndColor} 0%, ${fstColor} 100%)`;
}

function changeTheme(theme) {
    let themeElements = document.getElementsByClassName("theme");
    for (let i = 0; i < themeElements.length; i++) {
        if (themeElements[i].classList.contains("active")) {
            themeElements[i].classList.remove("active");
        }
        if (themeElements[i].classList.contains(theme)) {
            themeElements[i].classList.add("active");
        }
    }

    document.getElementsByClassName("top")[0].className = `top ${theme}`;

    // let color = document.getElementsByClassName(theme)[0];
    // console.debug(theme);
    // document.getElementsByClassName("top")[0].style.background =
    //     getComputedStyle(color).background.match(/linear-gradient.*\)/)[0];
}

function changeMode(mode) {
    let modeElements = document.getElementsByClassName("lightdark");
    let root = document.documentElement;
    for (let i = 0; i < modeElements.length; i++) {
        if (modeElements[i].classList.contains("activemode")) {
            modeElements[i].classList.remove("activemode");
            modeElements[i].getElementsByTagName("svg")[0].style.opacity = 1;
            modeElements[i].disabled = false;
        }
        if (modeElements[i].classList.contains(mode)) {
            modeElements[i].classList.add("activemode");
            modeElements[i].getElementsByTagName("svg")[0].style.opacity = 0;
            modeElements[i].disabled = true;
        }
    }
    root.style.setProperty("--main-color", secondaryColor);
    root.style.setProperty("--secondary-color", mainColor);
    [mainColor, secondaryColor] = [secondaryColor, mainColor];
}
