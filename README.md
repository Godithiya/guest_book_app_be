# Guest Management API

API ini bertujuan untuk mengelola data tamu menggunakan framework **Express** dan ORM **Prisma**. Proyek ini mendukung fitur seperti menambahkan data tamu, memperbarui data tamu, menghapus data tamu, dan mengambil daftar tamu dengan pagination. Selain itu, terdapat fitur tambahan untuk menambahkan data tamu secara acak menggunakan library **Chance**.

## Fitur

### 1. Menambah Data Tamu

#### Endpoint: `POST /api/guest/create`

- **Deskripsi**: Menambahkan data tamu baru ke dalam database.
- **Request Body**:
  ```json
  {
    "name": "string",
    "address": "string",
    "message": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Berhasil tambah data guest"
  }
  ```

### 2. Menambah Data Tamu Menggunakan Params

#### Endpoint: `POST /api/guest/create-params/:name/:address/:message`

- **Deskripsi**: Menambahkan data tamu baru ke dalam database dengan data yang diterima melalui URL parameters.

### 3. Menghapus Data Tamu

#### Endpoint: `DELETE /api/guest/delete`

- **Deskripsi**: Menghapus beberapa data tamu berdasarkan ID.
- **Request Body**:
  ```json
  {
    "ids": [1, 2, 3]
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "succes delete X data!"
  }
  ```

### 4. Menambah Data Tamu Acak

#### Endpoint: `POST /api/guest/chance`

- **Deskripsi**: Menambahkan satu data tamu berdasarkan input dari request body dan menambahkan 10 data tamu acak menggunakan library **Chance**.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Berhasil tambah data guest acak",
    "data": [
      {
        "name": "string",
        "address": "string",
        "message": "string"
      }
    ]
  }
  ```

### 5. Mengambil Daftar Tamu dengan Pagination

#### Endpoint: `GET /api/guest/list`

- **Deskripsi**: Mengambil daftar tamu dari database dengan pagination.
- **Query Parameters**:
  - `page`: Halaman saat ini (default: 1)
  - `limit`: Jumlah data per halaman (default: 10)
- **Response**:
  ```json
  {
    "success": true,
    "current_page": 1,
    "total_page": 2,
    "total_data": 20,
    "query": [
      {
        "id": 1,
        "name": "string",
        "address": "string",
        "message": "string"
      }
    ]
  }
  ```

### 6. Memperbarui Data Tamu

#### Endpoint: `PUT /api/guest/update/:id`

- **Deskripsi**: Memperbarui data tamu berdasarkan ID.
- **Request Body**:
  ```json
  {
    "name": "string",
    "address": "string",
    "message": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Berhasil mengupdate data guest",
    "data": {
      "id": 1,
      "name": "string",
      "address": "string",
      "message": "string"
    }
  }
  ```

#### Versi Alternatif

- **Endpoint**: `PUT /api/guest/update`
- **Request Body**:
  ```json
  {
    "id": 1,
    "data": {
      "name": "string",
      "address": "string",
      "message": "string"
    }
  }
  ```

## Struktur Folder

```
project/
├── conn/         # File koneksi Prisma
├── src/
│   ├── guest/
│   │   ├── create.js
│   │   ├── delete.js
│   │   ├── chance.js
│   │   ├── list.js
│   │   └── update.js
│   └── conn.js
|   |
|   └── server.js
```

## Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript.
- **Express.js**: Framework backend.
- **Prisma**: ORM untuk mempermudah interaksi dengan database.
- **Chance**: Library untuk menghasilkan data acak.

## Instalasi

1. Clone repository:
   ```bash
   git clone <repository_url>
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd project
   ```
3. Instal dependencies:
   ```bash
   npm install
   ```
4. Jalankan migrasi Prisma:
   ```bash
   npx prisma migrate dev
   ```
5. Jalankan server:
   ```bash
   npm start
   ```

## Pengujian API

Gunakan tools seperti **Postman** atau **Thunderclient** untuk menguji endpoint-endpoint yang tersedia.

