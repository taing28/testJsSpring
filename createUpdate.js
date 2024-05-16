let url = "http://localhost:8080/bill"


const modalDetail = document.querySelector('#detail-course-modal')

const modalForm = document.querySelector('#modal-form')

modalForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let input = e.target

    let requestBody = {
        id: input.id.value,
        combo: input.combo.value,
        diameter: input.diameter.value,
        bakedRibs: input.bakedRibs.value,
        drink: input.drink.value,
        drinkQuantity: input.drinkQuantity.value,
        voucherId: input.voucherId.value,
        pizzaType: input.pizzaType.value,
        salad: input.salad.value,
        totalPrice: input.totalPrice.value,
        sale: input.sale.value,
        fullName: input.fullName.value,
        email: input.email.value,
        phone: input.phone.value,
        address: input.address.value,
        note: input.note.value,
        status: input.status.value,
        createDate: input.createDate.value,
        updateDate: input.updateDate.value
    }

    //Xoa cac truong null truoc khi gui
    for (var key in requestBody) {
        if ((requestBody[key] === null | requestBody[key] === undefined | requestBody[key] === "") && requestBody.hasOwnProperty(key)) {
            delete requestBody[key];
        }
    }

    if (requestBody.id === undefined) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                requestBody
            )
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.text();
            })
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })
    }

    else {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                requestBody
            )
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.text();
            })
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })
    }


})