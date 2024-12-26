const absenForm = document.getElementById('absenForm');
        const absenList = document.getElementById('absenList');

        // Fungsi untuk memuat data dari Local Storage
        function loadAbsen() {
            const absenData = JSON.parse(localStorage.getItem('absensi')) || [];
            absenList.innerHTML = '<h2>Daftar Kehadiran</h2>';
            absenData.forEach((item, index) => {
                const absenItem = document.createElement('div');
                absenItem.className = 'absen-item';
                absenItem.innerHTML = `<span>${item.nama} - ${item.kelas}</span> <button onclick="hapusAbsen(${index})">Hapus</button>`;
                absenList.appendChild(absenItem);
            });
        }

        // Fungsi untuk menambahkan data ke Local Storage
        absenForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama').value;
            const kelas = document.getElementById('kelas').value;

            if (nama && kelas) {
                const absenData = JSON.parse(localStorage.getItem('absensi')) || [];
                absenData.push({ nama, kelas });
                localStorage.setItem('absensi', JSON.stringify(absenData));

                loadAbsen();
                absenForm.reset();
            } else {
                alert('Silakan lengkapi semua data!');
            }
        });

        // Fungsi untuk menghapus data dari Local Storage
        function hapusAbsen(index) {
            const absenData = JSON.parse(localStorage.getItem('absensi')) || [];
            absenData.splice(index, 1);
            localStorage.setItem('absensi', JSON.stringify(absenData));

            loadAbsen();
        }

        // Memuat data saat halaman pertama kali dibuka
        loadAbsen();