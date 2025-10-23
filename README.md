# Sepatu Bersih

**Sepatu Bersih** adalah REST API sederhana untuk layanan **daftar barang cuci sepatu**, dibangun menggunakan **Node.js** dan **Express.js**, dengan penyimpanan data di **Supabase**.  
API ini mendukung operasi **CRUD (Create, Read, Update, Delete)** serta fitur **filter status** seperti `GET /items?status=Selesai`.

---

## Tujuan Proyek
Proyek ini dibuat untuk memenuhi tugas pembuatan **REST API sederhana** menggunakan Node.js dan Express.js dengan database eksternal (Supabase), serta deployment ke Vercel.

API ini dirancang agar pengguna atau admin dapat:
- Menambahkan data sepatu yang sedang dicuci.  
- Melihat seluruh daftar sepatu (dengan opsi filter berdasarkan status).  
- Memperbarui status cucian sepatu.  
- Menghapus data sepatu yang sudah selesai.

---

## Fitur Utama

| Fitur | Deskripsi |
|-------|------------|
|  **Create** | Tambah data sepatu baru ke daftar cucian |
|  **Read** | Ambil semua data sepatu atau filter berdasarkan status |
|  **Update** | Ubah informasi atau status cucian sepatu |
|  **Delete** | Hapus data sepatu dari daftar |
|  **Filter by Status** | Contoh: `GET /items?status=Selesai` |

---

## Struktur Data

Data disimpan di **Supabase** dengan struktur tabel `items` seperti berikut:

| Kolom | Tipe Data | Deskripsi |
|--------|------------|-----------|
| `id` | integer (auto increment) | ID unik untuk tiap sepatu |
| `nama_customer` | varchar | Nama pemilik sepatu |
| `tipe_sepatu` | varchar | Jenis sepatu yang dicuci |
| `status` | varchar | Status pengerjaan (misal: "Menunggu", "Proses", "Selesai") |
| `tanggal_masuk` | date | Tanggal sepatu diterima |
| `tanggal_selesai` | date (nullable) | Tanggal sepatu selesai dicuci |

---

## Endpoint API

### 1. **GET /items**
Ambil seluruh daftar sepatu.  
Tambahkan parameter `status` untuk memfilter data.

**Contoh Request:**
```bash
GET https://sepatu-zeus.vercel.app/items?status=Selesai
