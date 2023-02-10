function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function copyDiscord() {
    navigator.clipboard.writeText('VidTu#4994');
    alert('Discord username is now in your clipboard.');
}

function copyBromine() {
    navigator.clipboard.writeText('brominemc.ru');
    alert('Server IP is now in your clipboard.');
}

function openLegsSocks() {
    if (confirm('Are you sure you want to see femboy legs in socks?')) {
        window.open('http://thighhighs.vidtu.ru/', '_blank');
    }
}