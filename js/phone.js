const searchBtn = document.getElementById('searchBtn');
const containerData = document.getElementById('phone');
const warning = document.getElementById('warning');
warning.style.display = 'none';

// spinner
const toggleSpinner = displaySpinner => {
    document.getElementById('spinner').style.display = displaySpinner;

}

searchBtn.addEventListener('click',
    function () {
        const searchArea = document.getElementById('searchArea').value;

        const searchField = document.getElementById('searchArea');
        // clear data
        searchField.value = '';
        toggleSpinner('block');
        // document.getElementById('searchArea') = '';
        containerData.innerHTML = '';
        if (searchArea === '' && searchArea != getPhones) {
            warning.style.display = 'block';
        }
        else {
            getPhones(searchArea);
            warning.style.display = 'none';
        }
    }
);