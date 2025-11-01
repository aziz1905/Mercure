Ringkasan Alur Aplikasi & Fitur Utama: Mercure Website

Berdasarkan analisis situs mercure.accor.com, berikut adalah ringkasan alur dan fitur utama yang akan kita replikasi.

1. Tujuan Utama Aplikasi

Tujuan utamanya adalah sebagai portal hospitality (perhotelan) yang memungkinkan pengguna untuk:

Mencari ketersediaan hotel berdasarkan destinasi, tanggal, dan tamu.

Menemukan penawaran, panduan perjalanan lokal, dan informasi tentang hotel.

Memesan kamar dan mengelola keanggotaan loyalitas (ALL - Accor Live Limitless).

2. Fitur Utama (Key Features)

Fitur-fitur ini adalah komponen inti yang perlu kita bangun:

A. Komponen Halaman Utama (Homepage)

Header & Navigasi:

Navigasi Utilitas (Atas): Berisi fungsionalitas sekunder:

Pilihan Bahasa (Contoh: en)

Pilihan Mata Uang (Contoh: IDR (Rp))

Autentikasi (Sign in / Sign up)

Navigasi Utama (Tengah): Tautan utama aplikasi:

Logo Mercure

Destinations

Offers

Local Travel Guide

About Mercure

Mercure Store

Loyalty

Menu Mobile: Tombol (hamburger) untuk menampilkan navigasi di perangkat seluler.

Widget Pemesanan (Booking Widget):

Ini adalah Call-to-Action (CTA) utama di halaman depan.

Biasanya berupa formulir besar di atas Hero Image.

Input yang Dibutuhkan:

Destinasi (Input teks dengan autocomplete)

Check-in (Pemilih Tanggal / Kalender)

Check-out (Pemilih Tanggal / Kalender)

Kamar & Tamu (Pemilih jumlah, misal: 1 Kamar, 2 Dewasa)

Tombol: "Search" (Cari).

Blok Konten (Content Blocks):

Area di bawah booking widget yang mempromosikan bagian lain dari situs:

Penawaran (Offers): "SAVE ON YOUR STAY" (Kartu-kartu promosi).

Panduan Lokal (Local Guide): "SPREAD YOUR WINGS" (Artikel atau inspirasi perjalanan).

Hotel Unggulan (Flagship Hotels): Menampilkan beberapa properti Mercure tertentu.

Tentang Merek (Brand Info): "WHO WE ARE" dan "MERCURE STORE".

B. Fitur Lainnya (Implied)

Halaman Hasil Pencarian (Search Results Page - SRP): Menampilkan daftar hotel setelah pengguna mencari.

Halaman Detail Hotel (Hotel Detail Page - HDP): Halaman individual untuk setiap hotel (foto, fasilitas, tipe kamar).

Alur Pemesanan (Booking Flow): Formulir untuk memasukkan data tamu dan pembayaran.

3. Alur Pengguna Utama (Main User Flow)

Alur pengguna yang paling umum adalah:

Landing: Pengguna tiba di Halaman Utama.

Pencarian: Pengguna mengisi Booking Widget dan menekan "Search".

Melihat Hasil: Pengguna dialihkan ke Halaman Hasil Pencarian dan melihat daftar hotel.

Memilih Hotel: Pengguna mengklik satu hotel untuk melihat Halaman Detail Hotel.

Memilih Kamar: Pengguna memilih tipe kamar dan harga.

Pemesanan: Pengguna mengisi detail tamu dan pembayaran.

Konfirmasi: Pengguna menerima konfirmasi pemesanan.

4. Tumpukan Teknologi (Sesuai Permintaan)

Build Tool: Vitea

Bahasa: TypeScript

Styling: Tailwind CSS

Framework: React (direkomendasikan untuk Vite dan arsitektur berbasis komponen ini)