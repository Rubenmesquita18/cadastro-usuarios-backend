import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client/index.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

/* 🔹 GET - LISTAR USUÁRIOS */
app.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

/* 🔹 POST - CRIAR USUÁRIO */
app.post("/usuarios", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // 🔥 VALIDAÇÃO
    if (!name || !email || !age) {
      return res.status(400).json({
        message: "Preencha todos os campos",
      });
    }

    const user = await prisma.user.create({
      data: { name, email, age },
    });

    return res.status(201).json(user);

  } catch (error) {

    // 🔥 ERRO DE EMAIL DUPLICADO
    if (error.code === "P2002") {
      return res.status(400).json({
        message: "Usuário já cadastrado",
      });
    }

    return res.status(500).json({
      message: "Erro ao criar usuário",
    });
  }
});

/* 🔹 PUT - ATUALIZAR USUÁRIO */
app.put("/usuarios/:id", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { name, email, age },
    });

    return res.status(200).json(user);

  } catch (error) {

    // 🔥 CASO USUÁRIO NÃO EXISTA
    if (error.code === "P2025") {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    // 🔥 EMAIL DUPLICADO
    if (error.code === "P2002") {
      return res.status(400).json({
        message: "Email já está em uso",
      });
    }

    return res.status(500).json({
      message: "Erro ao atualizar usuário",
    });
  }
});

/* 🔹 DELETE - DELETAR USUÁRIO */
app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.params.id },
    });

    return res.status(200).json({
      message: "Usuário deletado com sucesso!",
    });

  } catch (error) {

    if (error.code === "P2025") {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    return res.status(500).json({
      message: "Erro ao deletar usuário",
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");
});