# Password Generator Backend

Essa aplicação é uma API para geração e gerenciamento de senhas.

## Dependências

- Docker
- Docker Compose

## Para Rodar

### Clonar o repositório

Primeiro, clone o repositório e acesse a pasta do projeto:

```bash
git clone git@github.com:gstaciaki/password-generator-backend.git
cd password-generator-backend
```

### Definir variáveis de ambiente

```bash
cp .env.example .env
```

### Subir os containers

```bash
docker compose up -d
```

## Testando a API

```bash
curl --location 'http://localhost/passwords'
```
