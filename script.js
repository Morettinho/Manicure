function selectColor(color) {
    document.getElementById('selected-color').innerText = 'Cor selecionada: ' + color;
}

function bookAppointment() {
    const time = document.getElementById('appointment-time').value;
    const selectedColor = document.getElementById('selected-color').innerText.split(': ')[1];
    
    if (!time || selectedColor === 'Nenhuma') {
        document.getElementById('confirmation').innerText = 'Por favor, selecione uma cor e um horário.';
        return;
    }
    
    document.getElementById('confirmation').innerText = `Agendamento confirmado para ${time} com a cor ${selectedColor}.`;
}
