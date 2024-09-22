// Smooth scrolling ketika link di navbar diklik
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Mengurangi 50px untuk header
      behavior: "smooth", // Scroll halus
    });
  });
});

// Validasi sederhana pada form kontak
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form dari submit jika validasi gagal

  // Mendapatkan nilai input form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi sederhana
  if (!name) {
    alert("Nama harus diisi.");
    return;
  }
  if (!validateEmail(email)) {
    alert("Masukkan email yang valid.");
    return;
  }
  if (!message) {
    alert("Pesan harus diisi.");
    return;
  }

  // Jika validasi berhasil, kirim form (simulasi)
  alert("Terima kasih, pesan Anda telah terkirim!");
  form.reset(); // Reset form setelah submit
});

// Fungsi validasi email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
