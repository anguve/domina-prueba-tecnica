import express from "express";
import cors from "cors";
import { USERS } from "./users.data.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 5;
  const search = (req.query.search || "").toLowerCase();

  const filtered = USERS.filter((user) =>
    user.name.toLowerCase().includes(search)
  );

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const data = filtered.slice(start, end);

  res.json({
    data,
    page,
    pageSize,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / pageSize),
  });
});

app.listen(3001, () => {
  console.log("API corriendo en http://localhost:3001");
});
