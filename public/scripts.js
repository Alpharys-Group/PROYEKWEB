document.addEventListener("DOMContentLoaded", () => {
	// CTA Button Hover Effect
	const ctaButton = document.querySelector(".cta-btn");

	if (ctaButton) {
		ctaButton.addEventListener("mouseover", () => {
			ctaButton.style.transform = "scale(1.1)";
			ctaButton.style.transition = "transform 0.3s ease";
		});

		ctaButton.addEventListener("mouseout", () => {
			ctaButton.style.transform = "scale(1)";
		});
	}

	// Dialog Functionality
	function setupDialog(buttonId, dialogId, closeId, toastMessage) {
		const button = document.getElementById(buttonId);
		const dialog = document.getElementById(dialogId);
		const closeButton = document.getElementById(closeId);

		if (button && dialog && closeButton) {
			// Hide dialog on page load
			dialog.style.display = 'none';

			// Show dialog when button is clicked
			button.addEventListener('click', () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
				dialog.style.display = 'flex';
				showToast(button, toastMessage);
			});

			// Close dialog
			closeButton.addEventListener('click', () => {
				dialog.style.display = 'none';
			});
		}
	}

	// Set up all dialogs
	setupDialog('projectHubBtn', 'projectHubDialog', 'closeDialog', "Untuk melihat proyek selengkapnya, pilih opsi!");
	setupDialog('serviceBtn', 'serviceDialog', 'closeServiceDialog', "Temukan layanan terbaik yang kami sediakan untuk Anda. Pilih opsi!");
	setupDialog('sampBtn', 'sampDialog', 'closeSampDialog', "Lihat apa yang kami lakukan untuk SA-MP, pilih opsi!");
	setupDialog('orgBtn', 'orgDialog', 'closeOrgDialog', "Kami memiliki beberapa organisasi internal. Lihatlah!");

	// Hamburger Menu
	const hamburger = document.querySelector('.hamburger');
	const navbarMenu = document.querySelector('.navbar ul');

	// Add event listener for hamburger click
	if (hamburger) {
		hamburger.addEventListener('click', () => {
			navbarMenu.classList.toggle('menu-active'); // Toggles the menu-active class
			hamburger.classList.toggle('open'); // Toggle the hamburger icon
		});
	}

	// Event listener for "Lihat Proyek" button
	const viewProjectsBtn = document.querySelector(".view-projects-btn");

	if (viewProjectsBtn) {
		viewProjectsBtn.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			showToast(document.getElementById('projectHubBtn'), "Kami telah menyelesaikan berbagai proyek menarik. Klik untuk melihat daftar lengkapnya!");
		});
	}

	// Consultation Dialog
	const consultationBtn = document.getElementById("consultationBtn");
	const consultationDialog = document.getElementById("consultationDialog");
	const closeConsultationDialog = document.getElementById("closeConsultationDialog");

	if (consultationBtn && consultationDialog && closeConsultationDialog) {
		consultationDialog.style.display = "none"; // Hide dialog on page load

		consultationBtn.addEventListener("click", () => {
			consultationDialog.style.display = "flex"; // Show dialog
		});

		closeConsultationDialog.addEventListener("click", () => {
			consultationDialog.style.display = "none"; // Hide dialog
		});
	}
});

function showToast(button, message) {
	// Remove highlights from all buttons
	const allButtons = document.querySelectorAll("#projectHubBtn, #serviceBtn, #sampBtn, #orgBtn");
	allButtons.forEach(btn => {
		btn.style.boxShadow = "none"; // Remove previous highlights
		btn.style.backgroundColor = "transparent";
	});

	// Create toast
	const toast = document.createElement("div");
	toast.className = "toast show"; // Adding show class for animation
	toast.innerText = message; // Set the message
	document.body.appendChild(toast);

	// Highlight the clicked button
	if (button) {
		button.scrollIntoView({ behavior: "smooth", block: "center" });

		// Highlight button with animation
		button.style.transition = "box-shadow 0.3s ease, background-color 0.3s ease";
		button.style.boxShadow = "0 0 10px 5px rgba(255, 255, 255, 0.8)";
		button.style.backgroundColor = "transparent"; // Set background color

		// Remove highlight after a few seconds
		setTimeout(() => {
			button.style.boxShadow = "none";
			button.style.backgroundColor = "transparent";
		}, 3000); // Remove highlight after 3 seconds
	}

	// Remove toast after 3 seconds
	setTimeout(() => {
		toast.classList.remove("show");
		toast.classList.add("hide"); // Adding hide class for fade out animation
		setTimeout(() => {
			toast.remove();
		}, 500); // Remove after fade out effect
	}, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
			var audioElement = document.getElementById('backgroundMusic');
			var musicControl = document.getElementById('musicControl');
			var musicIcon = document.getElementById('musicIcon');
			var isPlaying = true; // Mulai dengan musik yang diputar

			function toggleMusic() {
				if (isPlaying) {
					audioElement.pause();
					musicIcon.classList.remove('fa-pause');
					musicIcon.classList.add('fa-play'); // Ubah ikon menjadi play
				} else {
					audioElement.play();
					musicIcon.classList.remove('fa-play');
					musicIcon.classList.add('fa-pause'); // Ubah ikon menjadi pause
				}
				isPlaying = !isPlaying; // Toggle status
			}

			// Set up the click event listener
			if (musicControl) {
				musicControl.addEventListener('click', toggleMusic);
			}

			// Update isPlaying state ketika audio selesai
			audioElement.addEventListener('ended', () => {
				isPlaying = false;
				musicIcon.classList.remove('fa-pause');
				musicIcon.classList.add('fa-play'); // Ubah ikon menjadi play
			});
});

// Inisialisasi indeks gambar di dalam modal
let currentImageIndex = 0;
const images = [
    "Images/app1.png",
    "Images/app2.png",
    // Tambahkan path gambar lainnya di sini jika diperlukan
];

// Fungsi untuk membuka modal dan menampilkan gambar yang diklik
function openModal(index) {
	const modal = document.getElementById("portfolioModal");
	const modalImage = document.getElementById("modalImage");

	currentImageIndex = index; // Set indeks gambar yang akan ditampilkan
	modalImage.src = images[currentImageIndex]; // Tampilkan gambar yang dipilih
	modal.style.display = "flex"; // Tampilkan modal
}

// Fungsi untuk menutup modal
function closeModal() {
	const modal = document.getElementById("portfolioModal");
	modal.style.display = "none";
}

// Fungsi untuk navigasi gambar di dalam modal
function changeImage(direction) {
	currentImageIndex += direction;

	// Loop ke gambar pertama atau terakhir jika melampaui batas
	if (currentImageIndex >= images.length) {
		currentImageIndex = 0;
	} else if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}

	const modalImage = document.getElementById("modalImage");
	modalImage.src = images[currentImageIndex];
}

// Event listener untuk menutup modal saat pengguna mengklik di luar modal
window.onclick = function(event) {
	const modal = document.getElementById("portfolioModal");
	if (event.target === modal) {
		modal.style.display = "none";
	}
};