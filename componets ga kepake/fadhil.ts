






// soal 1

type KategoriBuku = 'fiksi' | 'nonfiksi' | 'edukasi'

interface Buku {
    judul: string
    penulis: string
    tahunTerbit: number
}

interface bukuFav extends Buku {
    kategori: KategoriBuku
}
const bukuFavorite: Buku & {kategori:KategoriBuku} = {
    judul: 'pulang',
    penulis: 'tere liye',
    tahunTerbit: 2010,
    kategori: 'fiksi'
};
























// soal nomor 2

interface kendaraan {
    merk: string,
    roda: number
}

interface mobil extends kendaraan {
    pintu: number,
    isElektrik: boolean
}

const mobilSaya: mobil = {
    merk: 'mercedes',
    roda: 4,
    pintu: 4,
    isElektrik: true,
}


























// soal 3

type alamat = {
    jalan: string,
    kota: string
}

type kontak = {
    email: string;
    telepon: string;
}

type profileLengkap = alamat & kontak;

const profileSaya: profileLengkap = {
    jalan: 'jalan-jalan',
    kota: 'jakarta',
    email: 'example@gmail.com',
    telepon: '1234567890'
}