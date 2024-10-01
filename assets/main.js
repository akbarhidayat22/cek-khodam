function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Jinn',
                'Syaitan',
                'Malaikat',
                'Peri',
                'Naga',
                'Setan',
                'Hantu',
                'Jin',
                'Iblis',
                'Kuntilanak',
                'Pocong',
                'Singa introvert',
                'Joker',
                'Banteng merah',
                'Sandal jepit',
                'Bebek sumbing',
                'Macan putih',
                'Tikus got',
                'Helikopter',
                'Musang sad',
                'Ultraman pink',
                'Kadal eropa',
                'Stang motor',
                'Spion mobil',
                'Zebra sigma',
                'Monyet depresi',
                'Ikan gurame',
                'ikan teri',
                'Kuda poni',
                'Kelelawar putih',
                'Jupiter kopling',
                'Cicak asli sinjai',
                'Badut pelampiasan',
                'Kacang tanah',
                'Kapal laud',
                'Siluman tutup termos',
                'Pocong rambut gimbal',
                'Awewe gimbal',
                'Pantai bira',
                'Siluman korban judi online',
                'Siluman oyo',
                'Goat messi',
                'Kura kura ninja',
                'Naruto',
                'Lele sambal goreng',
                'Tuyul juring',
                
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});