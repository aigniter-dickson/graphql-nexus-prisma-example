# Migration `20201207092033-initial`

This migration has been generated at 12/7/2020, 9:20:33 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
)

CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201207092033-initial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,23 @@
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Post {
+  id        Int     @id @default(autoincrement())
+  title     String
+  content   String?
+  published Boolean @default(false)
+  author    User?
+}
+
+model User {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+  posts Post[]
+}
```


