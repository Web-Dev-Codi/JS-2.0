function getData(endpoint) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint)

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            
            
        }
    }
}