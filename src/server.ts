import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({
  logger: true,
});
server.register(cors, {
    //origin: ["http://127.0.0.1:3333"]
    origin: "*",
    methods: ["GET", "POST"]

})

const teams = [
  { id: 1, name: "Ferrari" },
  { id: 2, name: "McLaren / Mercedes" },
  { id: 3, name: "Red Bull Racing / Honda RBPT" },
  { id: 4, name: "Mercedes-AMG Petronas" },
  { id: 5, name: "Aston Martin / Mercedes" },
  { id: 6, name: "Alpine / Renault" },
  { id: 7, name: "Williams / Mercedes" },
  { id: 8, name: "RB (Visa Cash App RB) / Honda RBPT" },
  { id: 9, name: "Stake F1 Team Kick Sauber / Ferrari" },
  { id: 10, name: "Haas F1 Team / Ferrari" },
];

const drivers = [
  { id: 1, name: "Lewis Hamilton" },
  { id: 2, name: "Fernando Alonso" },
  { id: 3, name: "Max Verstappen" },
  { id: 4, name: "Sergio Pérez" },
  { id: 5, name: "Charles Leclerc" },
  { id: 6, name: "Carlos Sainz" },
  { id: 7, name: "George Russell" },
  { id: 8, name: "Lando Norris" },
  { id: 9, name: "Oscar Piastri" },
  { id: 10, name: "Esteban Ocon" },
  { id: 11, name: "Pierre Gasly" },
  { id: 12, name: "Valtteri Bottas" },
  { id: 13, name: "Zhou Guanyu" },
  { id: 14, name: "Alexander Albon" },
  { id: 15, name: "Logan Sargeant" },
  { id: 16, name: "Yuki Tsunoda" },
  { id: 17, name: "Daniel Ricciardo" },
  { id: 18, name: "Kevin Magnussen" },
  { id: 19, name: "Nico Hülkenberg" },
  { id: 20, name: "Lance Stroll" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);

  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const drive = drivers.find((d) => d.id === id);

  if (drive) {
    res.type("application/json").code(200);
    return { drive };
  } else {
    res.type("application/json").code(404);
    return { message: "Not found" };
  }
});

server.listen({ port: 3333 }, () => {
  console.log("server iniciado");
});
