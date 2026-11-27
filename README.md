# Fresh Coffee

Sistema de gestión de pedidos para una cafetería, hecho con Next.js, TypeScript y Prisma. Conecta a los clientes, la cocina y el panel de administración.

## Funcionalidades

### Panel de administración
- Listado de productos con paginación y búsqueda.
- Alta, edición y borrado de productos.
- Productos organizados por categorías.

### Toma de pedidos
- Interfaz para registrar el pedido de un cliente.
- Los pedidos llegan al panel de cocina para prepararse.

### Panel de cocina
- Muestra los pedidos entrantes.
- Permite marcar un pedido como completado.

### Pedidos listos
- Lista los pedidos listos para retirar.

## Tecnologías

| Área | Tecnología |
|---|---|
| Frontend | Next.js 15 (App Router), React 19, Tailwind CSS 4 |
| Lenguaje | TypeScript |
| Base de datos | PostgreSQL con Prisma ORM |
| Imágenes | Cloudinary (next-cloudinary) |
| Calidad de código | ESLint, `tsc` |

## Requisitos

- Node.js 20.9 o superior (se recomienda la versión de `.nvmrc`).
- npm.
- Una base de datos PostgreSQL accesible.
- Una cuenta de Cloudinary con un upload preset sin firma llamado `preset-cf`.

## Puesta en marcha

1. Clonar el repositorio.

   ```bash
   git clone https://github.com/Octa96mz/next-cafe
   cd next-cafe
   ```

2. Instalar las dependencias. El script `postinstall` genera el cliente de Prisma.

   ```bash
   npm ci
   ```

3. Crear el fichero `.env` a partir de la plantilla y rellenar los valores.

   ```bash
   cp .env.example .env
   ```

4. Aplicar las migraciones a la base de datos.

   ```bash
   npm run db:migrate
   ```

5. Cargar los datos iniciales (categorías y productos).

   ```bash
   npm run db:seed
   ```

6. Arrancar el servidor de desarrollo en http://localhost:3000.

   ```bash
   npm run dev
   ```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | Análisis con ESLint |
| `npm run typecheck` | Comprobación de tipos con TypeScript |
| `npm run build` | Compilación de producción (requiere `DATABASE_URL` definida) |
| `npm run start` | Servidor de producción tras `build` |
| `npm run db:migrate` | Aplica las migraciones existentes |
| `npm run db:seed` | Carga los datos iniciales |

## Autor

Octa96mz
