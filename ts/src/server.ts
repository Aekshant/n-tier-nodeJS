
import Database  from "./infra/typeOrm/config/ormconfig";
import expressApp from "./httpServer/config/config"



export default async function startServer() {
    const db = Database.getInstance();
    await db.connect();
    expressApp.listen(3000, () => console.log("Server running on port 3000"));
}
