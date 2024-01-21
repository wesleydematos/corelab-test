# API Corelab - CoreNotes

## Tabela de Conteúdos

- [Início Rápido](#1-início-rápido)
    - [Instalando Dependências](#11-instalando-dependências)
    - [Scripts](#22-scripts)
- [Endpoints](#2-endpoints)
- [Desenvolvedores](#3-desenvolvedores)

---

## 1. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 1.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
npm install
```
### 1.2. Scripts

Executar as migrações no banco de dados:
```
node ace migration:run
```

Executar aplicação em ambiente de desenvolvimento:

```
npm run dev
```

---

## 2. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Core Notes](#1-core-notes)

---

## 1. **core-notes**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST | /core-notes | Criação de um nota.|
| GET | /core-notes | Busca de todas as notas. |
| GET/:id | /core-notes/:id | Busca uma nota por id. |
| PUT/:id | /core-notes/:id | Edita uma nota por id. |
| DELETE/:id | /core-notes/:id | Deleta uma nota por id. |

---

### 1.1. **Criação de Nota**

### `POST/core-notes`

### Exemplo de Request:
```
POST /core-notes
Host: http://127.0.0.1:3333/api
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:
```json
{
	"title": "Nota teste",
    "description": "descrição curta.",
    "color": "#b9ffdd",
    "favorite": true,
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"message": "Core note created successfully!",
	"data": {
		"title": "Nota teste",
        "description": "descrição curta.",
        "color": "#b9ffdd",
        "favorite": true,
		"created_at": "2024-01-19T13:27:37.092-03:00",
		"updated_at": "2024-01-19T13:27:37.113-03:00",
		"id": 1
	}
}
```

---

### 1.2. **Busca de todas as notas**

### `GET/core-notes` 

### Exemplo de Request:
```
GET /core-notes
Host: http://127.0.0.1:3333/api
Authorization: None
Content-type: None
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"data": [
        {
            "title": "Nota teste",
            "description": "descrição curta.",
            "color": "#b9ffdd",
            "favorite": true,
            "created_at": "2024-01-19T13:27:37.092-03:00",
            "updated_at": "2024-01-19T13:27:37.113-03:00",
            "id": 1
	    },
    ]
}
```
---
### 1.3. **Busca de nota por id**

### `GET/core-notes/:id` 

### Exemplo de Request:
```
GET /core-notes/:id
Host: http://127.0.0.1:3333/api
Authorization: None
Content-type: None
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"data": {
		"id": 1,
		"title": "ESTUDAR",
		"description": "ESTUDAR.",
		"favorite": 1,
		"color": "#b9ffdd",
		"created_at": "2024-01-19T13:27:37.000-03:00",
		"updated_at": "2024-01-19T13:27:37.000-03:00"
	}
}
```
---
### 1.4. **Edição de nota por id**

### `PUT/core-notes/:id` 

### Exemplo de Request:
```
PUT /core-notes/:id
Host: http://127.0.0.1:3333/api
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:
```json
{
	"title": "Nota teste",
    "description": "descrição curta.",
    "color": "#b9ffdd",
    "favorite": true,
}
```


### Exemplo de Response:
```
200 OK
```
```json
{
	"message": "Core note updated successfully!",
	"data": {
		"id": 1,
		"title": "Nota teste",
        "description": "descrição curta.",
        "color": "#b9ffdd",
        "favorite": true,
		"created_at": "2024-01-19T13:27:37.000-03:00",
		"updated_at": "2024-01-19T13:28:10.064-03:00"
	}
}
```
---
### 1.5. **Deleção de nota por id**

### `DELETE/core-notes/:id` 

### Exemplo de Request:
```
DELETE /core-notes/:id
Host: http://127.0.0.1:3333/api
Authorization: None
Content-type: None
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"message": "Core note deleted successfully!",
	"data": {
		"id": 1,
		"title": "Nota teste",
        "description": "descrição curta.",
        "color": "#b9ffdd",
        "favorite": true,
		"created_at": "2024-01-19T13:27:37.000-03:00",
		"updated_at": "2024-01-19T13:28:10.064-03:00"
	}
}
```
---

## 3. Desenvolvedores
[ Voltar para o topo ](#tabela-de-conteúdos)


[<img src="https://avatars.githubusercontent.com/u/104766684?v=4" width=115><br><sub>Wesley Matos</sub>](https://github.com/wesleydematos) 
