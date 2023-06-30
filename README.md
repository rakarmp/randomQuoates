# Random Quote API

API ini menyediakan kutipan acak dari daftar kutipan yang tersedia.

## Endpoint

`GET /quote`

## Parameter

Tidak ada parameter yang diperlukan untuk endpoint ini.

## Contoh Permintaan

bashCopy code

`GET /quote`

## Contoh Respons

```jsonCopy code
{
  "quote": "The only way to do great work is to love what you do. - Steve Jobs"
}
```

API "Random Quote" memungkinkan Anda mendapatkan kutipan acak dari berbagai sumber yang terdapat dalam daftar kutipan. Anda dapat menggunakan endpoint `GET /quote` untuk meminta kutipan acak. Respons akan berisi kutipan dengan format teks dalam properti `"quote"`.
